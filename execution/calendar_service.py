"""
Calendar Service - Google Calendar integration
Uses service account authentication
"""

import os
import json
from typing import Dict, Optional
from datetime import datetime

from google.oauth2 import service_account
from googleapiclient.discovery import build


class CalendarService:
    """
    Google Calendar service with create/update/delete operations
    """
    
    def __init__(self):
        self.calendar_id = os.getenv("GOOGLE_CALENDAR_ID", "primary")
        self._service = None
    
    def _get_service(self):
        """Get or create Calendar API service"""
        if self._service is None:
            # Load service account credentials
            creds_file = os.getenv("GOOGLE_SERVICE_ACCOUNT_FILE")
            if not creds_file:
                raise ValueError("GOOGLE_SERVICE_ACCOUNT_FILE not set")
            
            # Handle relative path
            if not os.path.isabs(creds_file):
                base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
                creds_file = os.path.join(base_dir, creds_file)
            
            credentials = service_account.Credentials.from_service_account_file(
                creds_file,
                scopes=["https://www.googleapis.com/auth/calendar"]
            )
            
            # Impersonate the calendar owner if needed
            # credentials = credentials.with_subject(self.calendar_id)
            
            self._service = build("calendar", "v3", credentials=credentials)
        
        return self._service
    
    async def create_event(
        self,
        title: str,
        description: str,
        start: str,
        end: str,
        attendee_email: str,
        timezone: str = "UTC"
    ) -> Dict:
        """
        Create a calendar event with Google Meet
        
        Args:
            title: Event title
            description: Event description
            start: Start time ISO format
            end: End time ISO format
            attendee_email: Guest email
            timezone: Timezone string
        
        Returns:
            Dict with event details including id, htmlLink, hangoutLink
        """
        service = self._get_service()
        
        event_body = {
            "summary": title,
            "description": description,
            "start": {
                "dateTime": start,
                "timeZone": timezone
            },
            "end": {
                "dateTime": end,
                "timeZone": timezone
            },
            # "conferenceData": {
            #     "createRequest": {
            #         "requestId": f"meet-{datetime.now().timestamp()}",
            #         "conferenceSolutionKey": {"type": "hangoutsMeet"}
            #     }
            # },
            "reminders": {
                "useDefault": False,
                "overrides": [
                    {"method": "email", "minutes": 24 * 60},  # 24 hours before
                    {"method": "email", "minutes": 60},       # 1 hour before
                    {"method": "popup", "minutes": 10}        # 10 minutes before
                ]
            }
        }
        
        event = service.events().insert(
            calendarId=self.calendar_id,
            body=event_body
            # conferenceDataVersion=1
        ).execute()
        
        return {
            "id": event.get("id"),
            "htmlLink": event.get("htmlLink"),
            "hangoutLink": event.get("hangoutLink"),
            "conferenceData": event.get("conferenceData")
        }
    
    async def update_event(
        self,
        event_id: str,
        start: str,
        end: str,
        timezone: str = "UTC"
    ) -> Dict:
        """
        Update an existing calendar event
        
        Args:
            event_id: Google Calendar event ID
            start: New start time
            end: New end time
            timezone: Timezone
        
        Returns:
            Dict with updated event details
        """
        service = self._get_service()
        
        # Get existing event
        event = service.events().get(
            calendarId=self.calendar_id,
            eventId=event_id
        ).execute()
        
        # Update times
        event["start"] = {"dateTime": start, "timeZone": timezone}
        event["end"] = {"dateTime": end, "timeZone": timezone}
        
        updated = service.events().update(
            calendarId=self.calendar_id,
            eventId=event_id,
            body=event
        ).execute()
        
        return {
            "id": updated.get("id"),
            "htmlLink": updated.get("htmlLink"),
            "hangoutLink": updated.get("hangoutLink")
        }
    
    async def delete_event(self, event_id: str) -> bool:
        """
        Delete a calendar event
        
        Args:
            event_id: Google Calendar event ID
        
        Returns:
            True if successful
        """
        service = self._get_service()
        
        service.events().delete(
            calendarId=self.calendar_id,
            eventId=event_id
        ).execute()
        
        return True
    
    async def get_event(self, event_id: str) -> Optional[Dict]:
        """Get an event by ID"""
        service = self._get_service()
        
        try:
            event = service.events().get(
                calendarId=self.calendar_id,
                eventId=event_id
            ).execute()
            return event
        except Exception:
            return None
