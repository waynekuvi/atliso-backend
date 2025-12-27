"""
Atliso Chatbot Execution Layer - FastAPI Server
Replaces N8N webhook at POST /webhook/chatbot

Usage:
    cd /Users/macuser/chabot-test
    pip install -r execution/requirements.txt
    python execution/server.py
"""

import os
import sys
from pathlib import Path

# Add execution directory to path
sys.path.insert(0, str(Path(__file__).parent))

from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List, Dict, Any
from dotenv import load_dotenv
import uvicorn

# Load environment variables
load_dotenv(Path(__file__).parent.parent / ".env")

# Import workflow handlers
from contextlib import asynccontextmanager
from workflow_router import WorkflowRouter
from webhook_service import WebhookService
from lead_recovery_service import LeadRecoveryService

# Global services
services = {}

@asynccontextmanager
async def lifespan(app: FastAPI):
    """Lifespan events - startup and shutdown"""
    # Startup
    print("🚀 Starting background services...")
    recovery_service = LeadRecoveryService()
    await recovery_service.start()
    services["recovery"] = recovery_service
    
    yield
    
    # Shutdown
    print("🛑 Stopping background services...")
    if services.get("recovery"):
        await services["recovery"].stop()

app = FastAPI(
    title="Atliso Chatbot API",
    description="Deterministic execution layer replacing N8N workflows",
    version="1.0.0",
    lifespan=lifespan
)
    
# CORS for chat widget
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize router
router = WorkflowRouter()


class ChatMessage(BaseModel):
    """Incoming chat message from widget"""
    message: str
    messageType: Optional[str] = "text"
    sessionId: str
    sessionKey: Optional[str] = None
    conversationHistory: Optional[List[Dict[str, Any]]] = []
    customerName: Optional[str] = "Anonymous Guest"
    customerEmail: Optional[str] = None
    org_id: Optional[str] = "cmiryx9510001wx0bzs3wo78b"
    timestamp: Optional[str] = None
    attachment: Optional[Dict] = None
    gif: Optional[Dict] = None
    audio: Optional[Dict] = None


class ChatResponse(BaseModel):
    """Response to chat widget"""
    output: str
    endConversation: Optional[bool] = False


@app.get("/")
async def root():
    """Health check"""
    return {"status": "ok", "service": "atliso-chatbot-api"}


@app.get("/health")
async def health():
    """Health check endpoint"""
    return {"status": "healthy"}


@app.post("/webhook/chatbot", response_model=ChatResponse)
async def chat_webhook(payload: ChatMessage):
    """
    Main chat webhook - replaces N8N workflow
    """
    try:
        result = await router.handle_message(
            message=payload.message,
            session_id=payload.sessionId,
            org_id=payload.org_id,
            customer_name=payload.customerName,
            customer_email=payload.customerEmail,
            conversation_history=payload.conversationHistory or []
        )
        
        # Check if we are in handoff waiting state
        handoff_status = result.get("handoff_status", "none")
        if handoff_status in ["waiting", "connected"] and not result.get("reply"):
            # Return empty output when in handoff
            return ChatResponse(
                output="",
                endConversation=False
            )
            
        return ChatResponse(
            output=result.get("reply", ""),
            endConversation=result.get("endConversation", False)
        )
    except Exception as e:
        print(f"[ChatWebhook] Error: {e}")
        return ChatResponse(
            output="I'm having trouble processing your request. Please try again.",
            endConversation=False
        )


@app.post("/webhook/discord")
async def discord_webhook(request: Request):
    """
    Incoming webhook for Discord Bot events
    Handles human replies from threads
    """
    from .db_helper import DatabaseHelper
    db = DatabaseHelper()
    
    try:
        payload = await request.json()
        print(f"[DiscordWebhook] Received event: {payload.get('type')}")
        
        # Discord validation or event handling
        # Note: In a real bot, we'd use discord.py or similar, 
        # but here we'll process the raw webhook if using a cloud function/proxy
        
        # For this implementation, we assume the user's bot sends a POST 
        # to this endpoint when a message is seen in a thread.
        # Format: {"thread_id": "...", "content": "...", "author": "..."}
        
        thread_id = payload.get("thread_id")
        content = payload.get("content")
        
        if not thread_id or not content:
            return {"status": "ignored"}
            
        session_id = await db.get_session_by_thread(thread_id)
        if session_id:
            # Check for end command - more robust check
            clean_content = content.strip().lower()
            is_end_cmd = (clean_content in ["-end-", "-end", "end"]) or \
                         clean_content.startswith("-end-") or \
                         clean_content.startswith("-end") or \
                         clean_content.endswith("-end-")
            
            if is_end_cmd:
                print(f"[DiscordWebhook] Agent ended conversation for session {session_id}")
                await db.save_chat_message(session_id, "assistant", farewell)
                
                # Notify Rovodev
                ws = WebhookService()
                await ws.notify_conversation_ended(session_id)
                
                return {"status": "ended"}

            # Agent replied, update status to connected
            current_status = await db.get_handoff_status(session_id)
            if current_status == "waiting":
                print(f"[DiscordWebhook] First agent reply, setting status to 'connected'")
                await db.set_handoff_status(session_id, "connected")
                
            print(f"[DiscordWebhook] Syncing Discord reply to session {session_id}")
            await db.save_chat_message(session_id, "human", content)
            return {"status": "synced"}
            
        return {"status": "session_not_found"}
    except Exception as e:
        print(f"[DiscordWebhook] Error: {e}")
        return {"status": "error", "message": str(e)}


@app.get("/api/v1/sessions/{session_id}/status")
async def get_session_status(session_id: str):
    """Get handoff status for a specific session"""
    from .db_helper import DatabaseHelper
    db = DatabaseHelper()
    try:
        handoff_status = await db.get_handoff_status(session_id)
        return {
            "session_id": session_id,
            "handoff_status": handoff_status
        }
    except Exception as e:
        print(f"[StatusEndpoint] Error: {e}")
        return {"handoff_status": "none"}


@app.get("/api/v1/sessions/{session_id}/history")
async def get_session_history(session_id: str):
    """Get chat history for a specific session"""
    from .db_helper import DatabaseHelper
    db = DatabaseHelper()
    try:
        return await db.get_chat_history(session_id)
    except Exception as e:
        print(f"[HistoryEndpoint] Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/v1/sessions/{session_id}/reset")
async def reset_session(session_id: str):
    """Reset session handoff state to normal AI mode"""
    from .db_helper import DatabaseHelper
    db = DatabaseHelper()
    try:
        print(f"[ResetSession] Resetting session {session_id} to AI mode")
        await db.set_handoff_status(session_id, "none")
        return {"status": "ok", "message": "Session reset to AI mode"}
    except Exception as e:
        print(f"[ResetSession] Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/v1/workflows/booking")
async def booking_endpoint(request: Request):
    """
    Booking workflow endpoint
    Called by N8N or directly for appointment booking
    """
    from booking_handler import BookingHandler
    
    try:
        payload = await request.json()
        handler = BookingHandler()
        result = await handler.handle(payload)
        return result
    except Exception as e:
        print(f"[BookingEndpoint] Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/v1/workflows/reschedule")
async def reschedule_endpoint(request: Request):
    """
    Reschedule/Cancel workflow endpoint
    """
    from reschedule_handler import RescheduleHandler
    
    try:
        payload = await request.json()
        handler = RescheduleHandler()
        result = await handler.handle(payload)
        return result
    except Exception as e:
        print(f"[RescheduleEndpoint] Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/v1/workflows/embed-pdf")
async def embed_pdf_endpoint(request: Request):
    """
    Knowledge base PDF embedding endpoint
    """
    from knowledge_base import KnowledgeBaseHandler
    
    try:
        payload = await request.json()
        handler = KnowledgeBaseHandler()
        result = await handler.process_pdf(payload)
        return result
    except Exception as e:
        print(f"[EmbedPDFEndpoint] Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))


# ==========================================
# Analytics Endpoints
# ==========================================

@app.get("/api/v1/analytics/summary")
async def get_analytics_summary(org_id: str):
    """Get high-level analytics summary for an organization"""
    from .db_helper import DatabaseHelper
    db = DatabaseHelper()
    try:
        return await db.get_analytics_summary(org_id=org_id)
    except Exception as e:
        print(f"[AnalyticsSummary] Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/v1/analytics/daily")
async def get_daily_stats(org_id: str, days: int = 30):
    """Get daily lead and booking stats for an organization"""
    from .db_helper import DatabaseHelper
    db = DatabaseHelper()
    try:
        return await db.get_daily_stats(org_id=org_id, days=days)
    except Exception as e:
        print(f"[AnalyticsDaily] Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/v1/analytics/leads")
async def get_top_leads(org_id: str, limit: int = 20):
    """Get recent leads for an organization"""
    from .db_helper import DatabaseHelper
    db = DatabaseHelper()
    try:
        return await db.get_top_leads(org_id=org_id, limit=limit)
    except Exception as e:
        print(f"[AnalyticsLeads] Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/v1/analytics/handoffs")
async def get_handoff_metrics(org_id: str):
    """Get human handoff performance metrics for an organization"""
    from .db_helper import DatabaseHelper
    db = DatabaseHelper()
    try:
        return await db.get_handoff_metrics(org_id=org_id)
    except Exception as e:
        print(f"[AnalyticsHandoffs] Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/v1/analytics/conversion")
async def get_conversion_metrics(org_id: str):
    """Get conversion rate metrics for an organization"""
    from .db_helper import DatabaseHelper
    db = DatabaseHelper()
    try:
        return await db.get_conversion_metrics(org_id=org_id)
    except Exception as e:
        print(f"[AnalyticsConversion] Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    port = int(os.getenv("API_PORT", 8000))
    host = os.getenv("API_HOST", "0.0.0.0")
    
    print(f"🚀 Starting Atliso Chatbot API on {host}:{port}")
    print(f"📝 Swagger docs at http://localhost:{port}/docs")
    
    uvicorn.run(app, host=host, port=port)
