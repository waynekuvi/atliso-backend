"""
Webhook Service - Data Push to Rovodev
Sends real-time updates for leads, bookings, and handoffs.
"""

import os
import httpx
import asyncio
from typing import Dict, Any, Optional

class WebhookService:
    def __init__(self):
        # The ROVODEV_WEBHOOK_URL should be added to .env
        self.webhook_url = os.getenv("ROVODEV_WEBHOOK_URL")
    
    async def send_event(self, event_type: str, data: Dict[str, Any]):
        """
        Send an event to the Rovodev portal
        
        Args:
            event_type: The type of event (e.g., 'lead_captured', 'lead_booked')
            data: The event payload
        """
        if not self.webhook_url:
            print(f"⚠️ ROVODEV_WEBHOOK_URL not set. Skipping event: {event_type}")
            return False
            
        payload = {
            "version": "1.0",
            "event": event_type,
            "data": data,
            "timestamp": asyncio.get_event_loop().time()
        }
        
        try:
            async with httpx.AsyncClient() as client:
                response = await client.post(
                    self.webhook_url,
                    json=payload,
                    timeout=10.0
                )
                if response.status_code < 300:
                    print(f"✅ Webhook sent: {event_type}")
                    return True
                else:
                    print(f"❌ Webhook failed: {event_type} (Status: {response.status_code})")
                    return False
        except Exception as e:
            print(f"❌ Webhook error: {event_type} - {e}")
            return False

    async def notify_lead_captured(self, lead_data: Dict[str, Any]):
        return await self.send_event("lead_captured", lead_data)

    async def notify_lead_booked(self, lead_data: Dict[str, Any]):
        return await self.send_event("lead_booked", lead_data)

    async def notify_handoff_requested(self, session_id: str, lead_data: Optional[Dict] = None):
        return await self.send_event("handoff_requested", {
            "session_id": session_id,
            "lead": lead_data
        })

    async def notify_conversation_ended(self, session_id: str):
        return await self.send_event("conversation_ended", {"session_id": session_id})
