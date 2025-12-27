"""
Booking Handler - Calendar + Email integration
Replaces N8N BOOKING workflow
"""

import os
import json
from typing import Dict, Optional
from datetime import datetime, timedelta
from dateutil import parser as date_parser

from .db_helper import DatabaseHelper
from .calendar_service import CalendarService
from .email_service import EmailService
from .webhook_service import WebhookService


class BookingHandler:
    """
    Handles appointment booking with:
    - Conflict detection
    - Google Calendar event creation
    - Email confirmations
    - Database updates
    """
    
    def __init__(self):
        self.db = DatabaseHelper()
        self.calendar = CalendarService()
        self.email = EmailService()
    
    async def handle(self, payload: Dict) -> Dict:
        """
        Main booking handler
        
        Args:
            payload: Dict with name, email, preferredDateTime, timezone, phone, sessionId
        
        Returns:
            Dict with success, message, bookingUrl, meetingUrl
        """
        try:
            # 1. Parse and validate input
            booking_data = self._parse_input(payload)
            
            # 2. Check for conflicts
            conflicts = await self._check_conflicts(
                booking_data["start_dt"],
                booking_data["end_dt"]
            )
            
            if conflicts:
                return self._conflict_response(conflicts, booking_data)
            
            # 3. Create Google Calendar event
            event = await self.calendar.create_event(
                title=f"Meeting with {booking_data['name']}",
                description=self._build_description(booking_data),
                start=booking_data["start"],
                end=booking_data["end"],
                attendee_email=booking_data["email"],
                timezone=booking_data["timezone"]
            )
            
            # 4. Send confirmation emails
            await self._send_emails(booking_data, event)
            
            # 5. Update lead in database
            if booking_data.get("session_id"):
                print(f"[BookingHandler] Updating DB for session: {booking_data['session_id']}")
                success = await self.db.update_lead_booked(
                    session_id=booking_data["session_id"],
                    is_booked=True,
                    booking_url=event.get("htmlLink", ""),
                    meeting_url=event.get("hangoutLink", ""),
                    booked_at=booking_data["start_dt"],
                    google_event_id=event.get("id", "")
                )
                print(f"[BookingHandler] DB update result: {success}")
                
                # Notify Rovodev
                ws = WebhookService()
                await ws.notify_lead_booked({
                    "session_id": booking_data["session_id"],
                    "name": booking_data["name"],
                    "email": booking_data["email"],
                    "phone": booking_data.get("phone"),
                    "booked_at": booking_data["start_dt"].isoformat(),
                    "meeting_url": event.get("hangoutLink", "")
                })
            else:
                print("[BookingHandler] Warning: No session_id found for DB update")
            
            # 6. Return success
            return self._success_response(booking_data, event)
            
        except ValueError as e:
            return {"success": False, "message": str(e)}
        except Exception as e:
            print(f"[BookingHandler] Error: {e}")
            return {
                "success": False,
                "message": "An error occurred while booking. Please try again."
            }
    
    def _parse_input(self, payload: Dict) -> Dict:
        """Parse and validate booking input"""
        name = payload.get("name", "Guest")
        email = payload.get("email")
        preferred_datetime = payload.get("preferredDateTime")
        timezone = payload.get("timezone", "UTC")
        phone = payload.get("phone")
        session_id = payload.get("sessionId") or payload.get("session_id")
        
        if not email:
            raise ValueError("Email is required for booking")
        
        if not preferred_datetime:
            raise ValueError("Preferred date/time is required")
        
        # Parse datetime
        try:
            # Handle various formats
            if "T" not in preferred_datetime:
                preferred_datetime += "T12:00:00"
            if not preferred_datetime.endswith("Z") and "+" not in preferred_datetime:
                preferred_datetime += "Z"
            
            start_dt = date_parser.parse(preferred_datetime)
        except Exception as e:
            raise ValueError(f"Invalid date format: {preferred_datetime}")
        
        # Calculate end time (30 min meeting)
        end_dt = start_dt + timedelta(minutes=30)
        
        # Format dates
        start_iso = start_dt.isoformat()
        end_iso = end_dt.isoformat()
        
        # Human-readable format
        formatted_date = start_dt.strftime("%A, %B %d, %Y at %I:%M %p")
        
        return {
            "name": name,
            "email": email,
            "phone": phone,
            "timezone": timezone,
            "session_id": session_id,
            "start": start_iso,
            "end": end_iso,
            "start_dt": start_dt,
            "end_dt": end_dt,
            "formatted_date": formatted_date,
            "duration_minutes": 30
        }
    
    async def _check_conflicts(self, start: datetime, end: datetime) -> list:
        """Check for conflicting bookings"""
        return await self.db.get_conflicting_bookings(start, end)
    
    def _conflict_response(self, conflicts: list, booking_data: Dict) -> Dict:
        """Build conflict error response"""
        conflict_details = "\n".join([
            f"- {c.get('name', 'Busy')} at {c.get('booked_at', 'Unknown time')}"
            for c in conflicts[:3]
        ])
        
        return {
            "success": False,
            "message": f"❌ Sorry, that time slot is not available. There are conflicts:\n\n{conflict_details}\n\nPlease choose a different time.",
            "hasConflict": True
        }
    
    def _build_description(self, booking_data: Dict) -> str:
        """Build calendar event description"""
        return f"""Booking Details:

Name: {booking_data['name']}
Email: {booking_data['email']}
Phone: {booking_data.get('phone') or 'Not provided'}
Timezone: {booking_data['timezone']}

This meeting was automatically scheduled via chatbot."""
    
    async def _send_emails(self, booking_data: Dict, event: Dict):
        """Send confirmation emails"""
        meeting_url = event.get("hangoutLink") or ""
        event_url = event.get("htmlLink") or ""
        
        # Customer email
        customer_body = f"""Hi {booking_data['name']},

Thank you for booking a meeting with us!

📅 Date & Time: {booking_data['formatted_date']}
⏱ Duration: {booking_data['duration_minutes']} minutes
🌍 Timezone: {booking_data['timezone']}

"""
        if meeting_url:
            customer_body += f"🎥 Google Meet Link: {meeting_url}\n\n"
        
        customer_body += f"""📋 View in Calendar: {event_url}

📝 To reschedule or cancel, simply reply to this email or contact us.

You'll receive a reminder 24 hours before the meeting.

We're looking forward to speaking with you!

Best regards,
The Atliso Team
https://atliso.com"""

        await self.email.send(
            to=booking_data['email'],
            subject="Your Appointment is Confirmed! 🎉",
            body=customer_body
        )
        
        # Internal notification
        internal_body = f"""New appointment booked!

Name: {booking_data['name']}
Email: {booking_data['email']}
Phone: {booking_data.get('phone') or 'Not provided'}
Time: {booking_data['formatted_date']}
Timezone: {booking_data['timezone']}

Event ID: {event.get('id', 'N/A')}
Meet Link: {meeting_url or 'N/A'}

Check Google Calendar for details."""

        await self.email.send(
            to=os.getenv("SMTP_USER"),  # Send to self
            subject=f"New Booking: {booking_data['name']} - {booking_data['formatted_date']}",
            body=internal_body
        )
    
    def _success_response(self, booking_data: Dict, event: Dict) -> Dict:
        """Build success response"""
        meeting_url = event.get("hangoutLink") or ""
        event_url = event.get("htmlLink") or ""
        
        message = f"""✅ Meeting booked successfully!

📅 {booking_data['formatted_date']}
📧 Confirmation sent to {booking_data['email']}

"""
        if meeting_url:
            message += f"🎥 Google Meet: {meeting_url}\n\n"
        
        if event_url:
            message += f"📋 Calendar: {event_url}\n\n"
        
        message += "You'll receive a reminder 24 hours before the meeting. See you then!"
        
        return {
            "success": True,
            "message": message,
            "bookingUrl": event_url,
            "meetingUrl": meeting_url
        }
