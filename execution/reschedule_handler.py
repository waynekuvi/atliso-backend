"""
Reschedule Handler - Cancel and reschedule bookings
Replaces N8N RESCHEDULE workflow
"""

import os
from typing import Dict, Optional
from datetime import datetime, timedelta
from dateutil import parser as date_parser

from db_helper import DatabaseHelper
from calendar_service import CalendarService
from email_service import EmailService


class RescheduleHandler:
    """
    Handles reschedule and cancel operations
    """
    
    def __init__(self):
        self.db = DatabaseHelper()
        self.calendar = CalendarService()
        self.email = EmailService()
    
    async def handle(self, payload: Dict) -> Dict:
        """
        Main handler for reschedule/cancel operations
        
        Args:
            payload: Dict with action, session_id, newDateTime (for reschedule), reason
        
        Returns:
            Dict with success and message
        """
        try:
            with open("debug_reschedule.txt", "a") as f:
                f.write(f"Payload: {payload}\n")

            action = payload.get("action", "cancel")
            session_id = payload.get("session_id") or payload.get("sessionId")
            
            if not session_id:
                return {"success": False, "message": "Session ID is required"}
            
            # Get lead details
            lead = await self.db.get_lead(session_id)
            with open("debug_reschedule.txt", "a") as f:
                f.write(f"Lead lookup by session_id: {lead}\n")
            
            # If no lead or no event found for this session, try looking up by email
            if (not lead or not lead.get("google_event_id")) and payload.get("email"):
                email_lead = await self.db.get_lead_by_email(payload.get("email"))
                if email_lead and email_lead.get("google_event_id"):
                    print(f"[RescheduleHandler] Found booking via email: {payload.get('email')}")
                    with open("debug_reschedule.txt", "a") as f:
                        f.write(f"Lead lookup by email: {email_lead}\n")
                    lead = email_lead
            
            if not lead:
                return {"success": False, "message": "No booking found for this session. Please provide the email used for booking."}
            
            if not lead.get("google_event_id"):
                return {"success": False, "message": "No calendar event found for this booking. Please provide the email used for booking."}
            
            if action == "cancel":
                return await self._handle_cancel(lead, payload)
            elif action == "reschedule":
                return await self._handle_reschedule(lead, payload)
            else:
                return {"success": False, "message": f"Unknown action: {action}"}
                
        except Exception as e:
            with open("debug_reschedule.txt", "a") as f:
                f.write(f"Error: {e}\n")
            print(f"[RescheduleHandler] Error: {e}")
            return {
                "success": False,
                "message": "An error occurred. Please try again."
            }
    
    async def _handle_cancel(self, lead: Dict, payload: Dict) -> Dict:
        """Handle cancellation"""
        reason = payload.get("reason", "User requested")
        session_id = lead["session_id"]
        event_id = lead["google_event_id"]
        
        # 1. Delete calendar event
        await self.calendar.delete_event(event_id)
        
        # 2. Send cancellation email
        email_body = f"""Hi {lead.get('name', 'there')},

Your meeting has been cancelled as requested.

Reason: {reason}

If you'd like to reschedule, simply reply to this email or book a new time through our chatbot.

Best regards,
The Atliso Team"""

        await self.email.send(
            to=lead.get("email"),
            subject="❌ Meeting Cancelled",
            body=email_body
        )
        
        # 3. Update lead status
        await self.db.upsert_lead({
            "session_id": session_id,
            "is_booked": False,
            "status": "LOST",
            "booking_url": None,
            "meeting_url": None
        })
        
        # 4. Log to history
        await self.db.log_booking_action(
            session_id=session_id,
            event_id=event_id,
            action="cancelled",
            old_datetime=lead.get("booked_at"),
            changed_by="user",
            notes=reason
        )
        
        return {
            "success": True,
            "message": "✅ Your meeting has been cancelled. A confirmation email has been sent."
        }
    
    async def _handle_reschedule(self, lead: Dict, payload: Dict) -> Dict:
        """Handle rescheduling"""
        new_datetime = payload.get("newDateTime")
        timezone = payload.get("timezone", "UTC")
        reason = payload.get("reason", "User requested")
        session_id = lead["session_id"]
        event_id = lead["google_event_id"]
        
        if not new_datetime:
            return {"success": False, "message": "New date/time is required for rescheduling"}
        
        # Parse new datetime
        try:
            if "T" not in new_datetime:
                new_datetime += "T12:00:00"
            if not new_datetime.endswith("Z") and "+" not in new_datetime:
                new_datetime += "Z"
            
            new_start = date_parser.parse(new_datetime)
            new_end = new_start + timedelta(minutes=30)
        except Exception as e:
            return {"success": False, "message": f"Invalid date format: {new_datetime}"}
        
        # 1. Update calendar event
        event = await self.calendar.update_event(
            event_id=event_id,
            start=new_start.isoformat(),
            end=new_end.isoformat(),
            timezone=timezone
        )
        
        # Format dates for email
        formatted_date = new_start.strftime("%A, %B %d, %Y at %I:%M %p")
        meeting_url = event.get("hangoutLink", "")
        event_url = event.get("htmlLink", "")
        
        # 2. Send reschedule email
        email_body = f"""Hi {lead.get('name', 'there')},

Your meeting has been rescheduled!

📅 New Time: {formatted_date}
"""
        if meeting_url:
            email_body += f"🎥 Google Meet: {meeting_url}\n"
        if event_url:
            email_body += f"📋 Calendar: {event_url}\n"
        
        email_body += """
A calendar update has been sent.

Best regards,
The Atliso Team"""

        await self.email.send(
            to=lead.get("email"),
            subject="✅ Meeting Rescheduled",
            body=email_body
        )
        
        # 3. Update lead
        await self.db.upsert_lead({
            "session_id": session_id,
            "booked_at": new_start.isoformat()
        })
        
        # 4. Log to history
        await self.db.log_booking_action(
            session_id=session_id,
            event_id=event_id,
            action="rescheduled",
            old_datetime=lead.get("booked_at"),
            new_datetime=new_start,  # Pass datetime object, not string
            changed_by="user",
            notes=reason
        )
        
        return {
            "success": True,
            "message": f"✅ Your meeting has been rescheduled to {formatted_date}. A confirmation email has been sent."
        }
