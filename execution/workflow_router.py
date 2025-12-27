"""
Workflow Router - Main orchestration layer
Replaces N8N MAIN workflow logic

Handles:
1. Fetch bot config from database
2. Fetch template
3. Search knowledge base with embeddings
4. Build system prompt
5. Call OpenAI with tools
6. Save lead in background
7. Return response
"""

import os
import json
import asyncio
from typing import Dict, List, Any, Optional
from datetime import datetime

from .db_helper import DatabaseHelper
from .chat_responder import ChatResponder
from .lead_capture import LeadCapture


class WorkflowRouter:
    """
    Main workflow router - orchestrates all chat operations
    """
    
    def __init__(self):
        self.db = DatabaseHelper()
        self.chat = ChatResponder()
        self.lead_capture = LeadCapture()
        
        # Default org ID
        self.default_org_id = "cmiryx9510001wx0bzs3wo78b"
    
    async def handle_message(
        self,
        message: str,
        session_id: str,
        org_id: Optional[str] = None,
        customer_name: Optional[str] = None,
        customer_email: Optional[str] = None,
        conversation_history: Optional[List[Dict]] = None
    ) -> Dict[str, Any]:
        """
        Main entry point - processes a chat message and returns response
        
        Args:
            message: User's message text
            session_id: Unique session identifier
            org_id: Organization ID for config lookup
            customer_name: Customer's name if known
            customer_email: Customer's email if known
            conversation_history: Previous messages in thread
        
        Returns:
            Dict with 'reply' and optionally 'endConversation'
        """
        org_id = org_id or self.default_org_id
        conversation_history = conversation_history or []
        
        try:
            # 1. Fetch bot configuration
            bot_config = await self.db.get_bot_config(org_id)
            if not bot_config:
                bot_config = self._default_bot_config()
            
            # 2. Fetch bot template
            template_id = bot_config.get('template_id')
            bot_template = await self.db.get_bot_template(template_id) if template_id else {}
            if not bot_template:
                bot_template = self._default_template()
            
            # 3. Ensure lead exists in DB before processing (so tools can update it)
            # This is important because tools like booking_handler use UPDATE, not UPSERT
            await self.lead_capture.capture(
                session_id=session_id,
                org_id=org_id,
                chat_query=f"Incoming message: {message}"
            )
            
            # 4. Search knowledge base for relevant context
            knowledge_context = await self._search_knowledge_base(message, org_id)
            
            # 5. Build system prompt
            system_prompt = self._build_system_prompt(
                bot_config=bot_config,
                bot_template=bot_template,
                knowledge_context=knowledge_context
            )
            
            # 6. Get AI response with tools
            response = await self.chat.get_response(
                message=message,
                session_id=session_id,
                system_prompt=system_prompt,
                conversation_history=conversation_history,
                model=bot_config.get('model', 'gpt-4o'),
                temperature=float(bot_config.get('temperature', 0.7))
            )
            
            # 6. Save lead in background (don't wait)
            asyncio.create_task(
                self._save_lead_async(
                    session_id=session_id,
                    org_id=org_id,
                    message=message,
                    response=response.get('reply', '')
                )
            )
            
            return response
            
        except Exception as e:
            import traceback
            print(f"[WorkflowRouter] Error: {e}")
            print(f"[WorkflowRouter] Traceback: {traceback.format_exc()}")
            return {
                "reply": "I'm sorry, I encountered an issue processing your request. Please try again.",
                "endConversation": False
            }
    
    async def _search_knowledge_base(self, query: str, org_id: str) -> str:
        """
        Search knowledge base using vector similarity
        Returns formatted context string
        """
        try:
            # Get embedding for query
            embedding = await self.chat.get_embedding(query)
            if not embedding:
                return ""
            
            # Search vectors
            results = await self.db.search_knowledge_vectors(
                embedding=embedding,
                org_id=org_id,
                limit=3,
                min_similarity=0.5
            )
            
            if not results:
                return ""
            
            # Format results
            formatted = "\n\n".join([
                f"[{i+1}] {r['content']}"
                for i, r in enumerate(results)
            ])
            
            return f"""

RELEVANT KNOWLEDGE BASE CONTEXT:
Use the following information to help answer the user's question. If the information is relevant, incorporate it naturally into your response.

{formatted}

---"""
            
        except Exception as e:
            print(f"[WorkflowRouter] Knowledge search error: {e}")
            return ""
    
    def _build_system_prompt(
        self,
        bot_config: Dict,
        bot_template: Dict,
        knowledge_context: str
    ) -> str:
        """
        Build the system prompt with placeholders replaced
        """
        # Get base prompt from template
        base_prompt = bot_template.get('base_system_prompt', self._default_template()['base_system_prompt'])
        
        # Replace placeholders
        prompt = base_prompt
        prompt = prompt.replace('{{BOT_NAME}}', bot_config.get('bot_name', 'AI Assistant'))
        prompt = prompt.replace('{{BUSINESS_CONTEXT}}', bot_config.get('business_context', ''))
        prompt = prompt.replace('{{PERSONALITY}}', bot_config.get('personality', 'professional'))
        prompt = prompt.replace('{{TONE_KEYWORDS}}', bot_config.get('tone_keywords', 'helpful, concise'))
        prompt = prompt.replace('{{KNOWLEDGE_CONTEXT}}', knowledge_context)
        
        # Add locked rules
        locked_rules = bot_template.get('locked_rules', 'Be helpful, concise, and professional.')
        prompt += f"\n\n{locked_rules}"
        
        # Add knowledge context if not already included
        if knowledge_context and 'KNOWLEDGE BASE CONTEXT' not in prompt:
            prompt += knowledge_context
            
        # Add current date and time for context
        current_time = datetime.now().strftime("%A, %B %d, %Y %H:%M:%S")
        prompt += f"\n\nCURRENT DATE AND TIME: {current_time}"
        
        return prompt
    
    async def _save_lead_async(
        self,
        session_id: str,
        org_id: str,
        message: str,
        response: str
    ):
        """
        Save lead data in background
        """
        try:
            chat_query = f"{message} | AI Response: {response}"
            await self.lead_capture.capture(
                session_id=session_id,
                org_id=org_id,
                chat_query=chat_query
            )
        except Exception as e:
            print(f"[WorkflowRouter] Lead save error: {e}")
    
    def _default_bot_config(self) -> Dict:
        """Default bot configuration"""
        return {
            'bot_name': 'AI Assistant',
            'business_context': '',
            'personality': 'professional',
            'tone_keywords': 'helpful, concise',
            'model': 'gpt-4o',
            'temperature': 0.7,
            'max_tokens': 1000,
            'welcome_message': 'Hi! How can I help you today?'
        }
    
    def _default_template(self) -> Dict:
        """Default bot template"""
        return {
            'base_system_prompt': """You are {{BOT_NAME}}, a helpful assistant for {{BUSINESS_CONTEXT}}.
Your communication style is {{PERSONALITY}} with these qualities: {{TONE_KEYWORDS}}.

You can help users:
- Answer questions about our services
- Book appointments (ask for name, email, and preferred date/time)
- Reschedule or cancel existing appointments
- Provide general assistance

CRITICAL HANDOFF RULE:
If the user mentions "human", "agent", "specialist", "real person", "representative", or "support" OR if they are clearly frustrated/angry:
1.  You ARE NOT allowed to continue the conversation.
2.  You MUST immediately call the "escalate_to_human" tool.
3.  You MUST NOT just say "I've alerted a human" without calling the tool. Calling the tool is what triggers the notification.
4.  Reason: "Human Requested" or "User Frustrated".
5.  Summary: Provide a brief context of why the user is moving away from the AI.

CRITICAL BOOKING CONSTRAINTS:
1. DO NOT call the "book_meeting" tool immediately after receiving the details. 
2. You MUST first output a text response summarizing the details and asking: "Is this correct?"
3. You may ONLY call "book_meeting" after the user replies "Yes" to your summary.

IMPORTANT: Before calling any booking tool, you MUST summarize the details (Name, Email, Time) and explicitly ask the user to confirm with "Yes".
- User: "Book for tomorrow at 2pm" -> You: "I have [Name], [Email] for [Time]. Please confirm if this is correct?"
- O N L Y after the user says "Yes" should you call the booking tool.

When performing a task like booking or searching, you MUST wait for the tool result before providing a final confirmation to the user.
- NEVER say "I've booked that for you" until the tool confirms success.
- If a tool reports a conflict or error, inform the user immediately.
- Provide a single, concise response that incorporates the final result of your actions.""",
            'locked_rules': 'Be helpful, concise, and professional. Never make up information.'
        }
