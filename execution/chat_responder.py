"""
Chat Responder - OpenAI integration with tools
Replaces N8N AI Agent + Postgres Chat Memory
"""

import os
import json
from typing import Dict, List, Any, Optional
from datetime import datetime
from openai import AsyncOpenAI

from .db_helper import DatabaseHelper
from .webhook_service import WebhookService


class ChatResponder:
    """
    AI chat responder using OpenAI with function calling
    """
    
    def __init__(self):
        self.client = AsyncOpenAI(api_key=os.getenv("OPENAI_API_KEY"))
        self.db = DatabaseHelper()
        
        # Define available tools
        self.tools = [
            {
                "type": "function",
                "function": {
                    "name": "book_meeting",
                    "description": "Book a NEW meeting when the user wants to schedule a call or demo. Extract name, email, and preferred date/time from the conversation.",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "name": {
                                "type": "string",
                                "description": "Customer's full name"
                            },
                            "email": {
                                "type": "string",
                                "description": "Customer's email address"
                            },
                            "preferredDateTime": {
                                "type": "string",
                                "description": "Preferred date and time in ISO format (YYYY-MM-DDTHH:mm:ss)"
                            },
                            "timezone": {
                                "type": "string",
                                "description": "Timezone (e.g., 'UTC', 'America/New_York')",
                                "default": "UTC"
                            },
                            "phone": {
                                "type": "string",
                                "description": "Customer's phone number (optional)"
                            }
                        },
                        "required": ["name", "email", "preferredDateTime"]
                    }
                }
            },
            {
                "type": "function",
                "function": {
                    "name": "reschedule_meeting",
                    "description": "Reschedule or cancel an existing meeting. Use 'reschedule' action with new date/time, or 'cancel' action.",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "action": {
                                "type": "string",
                                "enum": ["reschedule", "cancel"],
                                "description": "Action to perform"
                            },
                            "newDateTime": {
                                "type": "string",
                                "description": "New date/time in ISO format (required for reschedule)"
                            },
                            "timezone": {
                                "type": "string",
                                "description": "Timezone",
                                "default": "UTC"
                            },
                            "reason": {
                                "type": "string",
                                "description": "Reason for reschedule/cancel"
                            },
                            "email": {
                                "type": "string",
                                "description": "User's email for finding the booking (optional if unknown)"
                            }
                        },
                        "required": ["action"]
                    }
                }
            },
            {
                "type": "function",
                "function": {
                    "name": "end_conversation",
                    "description": "End the conversation when the user is satisfied and the conversation is complete.",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "summary": {
                                "type": "string",
                                "description": "Brief summary of what was accomplished"
                            }
                        }
                    }
                }
            },
            {
                "type": "function",
                "function": {
                    "name": "escalate_to_human",
                    "description": "Alert a human agent when the user is angry, frustrated, or explicitly asks to speak to a person.",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "reason": {
                                "type": "string",
                                "description": "Reason for escalation (e.g. 'Angry User', 'Complex Request')" 
                            },
                            "summary": {
                                "type": "string",
                                "description": "Brief context of the user's issue"
                            }
                        },
                        "required": ["reason", "summary"]
                    }
                }
            }
        ]
    
    async def get_response(
        self,
        message: str,
        session_id: str,
        system_prompt: str,
        conversation_history: Optional[List[Dict]] = None,
        model: str = "gpt-4o",
        temperature: float = 0.7
    ) -> Dict[str, Any]:
        """
        Get AI response with tool calling support
        
        Args:
            message: User's message
            session_id: Session ID for context
            system_prompt: System prompt to use
            conversation_history: Previous messages
            model: OpenAI model to use
            temperature: Response temperature
        
        Returns:
            Dict with 'reply' and optionally 'endConversation'
        """
        try:
            # 1. Check if session is in Handoff state (AI bypass)
            lead = await self.db.get_lead(session_id)
            handoff_status = lead.get("handoff_status", "none") if lead else "none"
            
            if handoff_status in ["waiting", "connected"]:
                thread_id = lead.get("discord_thread_id")
                print(f"[ChatResponder] Session {session_id} is in HANDOFF ({handoff_status}). Forwarding to Discord.")
                
                # Forward user message to Discord so the human sees it
                if thread_id:
                    from discord_service import DiscordService
                    ds = DiscordService()
                    await ds.send_to_discord(thread_id, f"**User:** {message}")
                
                # Save user message to DB so it persists for history polling
                await self.db.save_chat_message(session_id, "user", message)
                
                return {
                    "reply": None, # Silent response: the frontend polls for human replies
                    "handoff_status": handoff_status,
                    "endConversation": False
                }

            # Build messages array
            messages = [{"role": "system", "content": system_prompt}]
            
            # Add chat history from database
            db_history = await self.db.get_chat_history(session_id, limit=10)
            for msg in db_history:
                role = msg.get("role", "user")
                if role == 'bot':
                    role = 'assistant'
                messages.append({
                    "role": role,
                    "content": msg.get("content", "")
                })
            
            # Add conversation history from request (may have more recent messages)
            if conversation_history:
                for msg in conversation_history[-5:]:  # Last 5 messages
                    role = msg.get("role", "user")
                    if role == 'bot':
                        role = 'assistant'
                    messages.append({
                        "role": role,
                        "content": msg.get("content", "")
                    })
            
            # Add current message
            messages.append({"role": "user", "content": message})
            
            # Call OpenAI in a loop to handle multiple sequential tool calls
            max_iterations = 5
            iterations = 0
            
            while iterations < max_iterations:
                print(f"[ChatResponder] Iteration {iterations} for session {session_id}")
                
                # Prepare tools - always provide but model decides
                response = await self.client.chat.completions.create(
                    model=model,
                    messages=messages,
                    tools=self.tools,
                    tool_choice="auto",
                    temperature=temperature,
                    max_tokens=1000
                )
                
                assistant_message = response.choices[0].message
                
                # Add to message history correctly
                messages.append(assistant_message)
                
                # Check for tool calls
                if assistant_message.tool_calls:
                    tool_results = await self._handle_tool_calls(
                        assistant_message.tool_calls,
                        session_id
                    )
                    
                    # Add tool results to messages
                    for tool_msg in tool_results.get("tool_messages", []):
                        messages.append(tool_msg)
                    
                    # If end_conversation was called
                    if tool_results.get("endConversation"):
                        # We use the reply from the end_conversation tool if available,
                        # otherwise continue to get a natural summary from the AI.
                        if tool_results.get("reply"):
                            # If the tool provided a specific closing reply, use it
                            final_reply = tool_results.get("reply")
                            await self.db.save_chat_message(session_id, "user", message)
                            await self.db.save_chat_message(session_id, "assistant", final_reply)
                            return {
                                "reply": final_reply,
                                "endConversation": True
                            }
                    
                    # Continue loop to get response after tool
                    iterations += 1
                else:
                    # Final assistant message content
                    reply = assistant_message.content or "I've processed your request. Is there anything else I can help with?"
                    break
            
            # Save messages to database
            await self.db.save_chat_message(session_id, "user", message)
            await self.db.save_chat_message(session_id, "assistant", reply)

            # -------------------------------------------------------------
            # SAFETY NET: Detect if AI said it's handing off but didn't call the tool
            # -------------------------------------------------------------
            current_lead = await self.db.get_lead(session_id)
            current_status = current_lead.get("handoff_status", "none") if current_lead else "none"
            
            if current_status == "none":
                handoff_keywords = [
                    "alerted a human", "notified a human", "handoff", "human agent", 
                    "human specialist", "transferring you", "connecting you to a person",
                    "speak to a representative", "hold on while I get a human"
                ]
                if any(kw in reply.lower() for kw in handoff_keywords):
                    print(f"🚨 [ChatResponder] Handoff intent detected in text but tool NOT called. FORCING handoff for {session_id}")
                    # Force the escalation tool logic
                    await self._call_escalation({
                        "reason": "Keyword Handoff Fallback",
                        "summary": f"User mentioned human-related keywords and AI confirmed handoff in text: '{reply[:100]}...'"
                    }, session_id)
                    current_status = "waiting"

            # Check for conversation end indicators
            end_conversation = self._check_end_indicators(reply)
            
            return {
                "reply": reply,
                "endConversation": end_conversation,
                "handoff_status": current_status
            }
            
        except Exception as e:
            import traceback
            traceback.print_exc()
            print(f"[ChatResponder] Error: {e}")
            return {
                "reply": "I'm sorry, I had trouble processing that. Could you please try again?",
                "endConversation": False
            }
    
    async def _handle_tool_calls(
        self,
        tool_calls: List,
        session_id: str
    ) -> Dict[str, Any]:
        """Handle tool calls from the AI"""
        tool_messages = []
        end_conversation = False
        reply = None
        
        for tool_call in tool_calls:
            function_name = tool_call.function.name
            arguments = json.loads(tool_call.function.arguments)
            
            print(f"[ChatResponder] Tool call: {function_name} with {arguments}")
            
            if function_name == "book_meeting":
                result = await self._call_booking(arguments, session_id)
                tool_messages.append({
                    "role": "tool",
                    "tool_call_id": tool_call.id,
                    "content": json.dumps(result)
                })
                
            elif function_name == "reschedule_meeting":
                result = await self._call_reschedule(arguments, session_id)
                tool_messages.append({
                    "role": "tool",
                    "tool_call_id": tool_call.id,
                    "content": json.dumps(result)
                })
            elif function_name == "end_conversation":
                end_conversation = True
                summary = arguments.get("summary", "Conversation completed")
                reply = f"Thank you for chatting with us today! {summary}. Have a great day!"
                tool_messages.append({
                    "role": "tool",
                    "tool_call_id": tool_call.id,
                    "content": json.dumps({"success": True, "message": "Conversation ended"})
                })
                
            elif function_name == "escalate_to_human":
                result = await self._call_escalation(arguments, session_id)
                
                # Simple reply, no tag needed - frontend checks status endpoint
                reply = "I've alerted a human specialist to your request. They have been notified and will join this chat shortly. Thank you for your patience!"
                
                tool_messages.append({
                    "role": "tool",
                    "tool_call_id": tool_call.id,
                    "content": json.dumps(result)
                })
        
        return {
            "tool_messages": tool_messages,
            "endConversation": end_conversation,
            "reply": reply
        }
    
    async def _call_booking(self, arguments: Dict, session_id: str) -> Dict:
        """Call the booking handler"""
        from booking_handler import BookingHandler
        
        handler = BookingHandler()
        arguments["sessionId"] = session_id
        return await handler.handle(arguments)
    
    async def _call_reschedule(self, arguments: Dict, session_id: str) -> Dict:
        """Call the reschedule handler"""
        from reschedule_handler import RescheduleHandler
        
        handler = RescheduleHandler()
        arguments["session_id"] = session_id
        return await handler.handle(arguments)

    async def _call_escalation(self, arguments: Dict, session_id: str) -> Dict:
        """Call the Discord escalation service"""
        from discord_service import DiscordService
        
        service = DiscordService()
        reason = arguments.get("reason", "User requested")
        summary = arguments.get("summary", "No details")
        
        # Try to get user email from DB for context
        lead = await self.db.get_lead(session_id)
        user_email = lead.get("email") if lead else None
        
        # Create dedicated thread
        thread_id = await service.create_handoff_thread(
            session_id=session_id,
            reason=reason,
            summary=summary,
            user_email=user_email
        )
        
        if thread_id:
            # Set status to 'waiting' - will change to 'connected' when agent replies
            await self.db.set_handoff_status(session_id, "waiting", thread_id)
            
            # Notify Rovodev
            ws = WebhookService()
            await ws.notify_handoff_requested(session_id, lead)
        
        return {
            "success": thread_id is not None,
            "thread_id": thread_id,
            "message": "Human agent alerted via dedicated thread"
        }
    
    def _check_end_indicators(self, reply: str) -> bool:
        """Check if the reply contains conversation end indicators"""
        end_indicators = [
            'have a great day',
            'feel free to reach out',
            'conversation is ended',
            'conversation is over',
            'goodbye',
            'bye for now',
            'thank you for chatting'
        ]
        reply_lower = reply.lower()
        return any(indicator in reply_lower for indicator in end_indicators)
    
    async def get_embedding(self, text: str) -> Optional[List[float]]:
        """
        Get embedding vector for text using OpenAI
        
        Args:
            text: Text to embed
        
        Returns:
            List of floats (embedding vector)
        """
        try:
            response = await self.client.embeddings.create(
                model="text-embedding-ada-002",
                input=text
            )
            return response.data[0].embedding
        except Exception as e:
            print(f"[ChatResponder] Embedding error: {e}")
            return None
