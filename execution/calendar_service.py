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
        
    def _authenticate(self):
        """Authenticate with Google Calendar API"""
        SCOPES = ['https://www.googleapis.com/auth/calendar']
        creds = None
        
        # 1. Try Base64 encoded JSON from env var (Render friendly)
        encoded_creds = os.getenv("GOOGLE_CREDENTIALS_BASE64")
        if encoded_creds:
            import base64
            try:
                decoded_json = base64.b64decode(encoded_creds).decode('utf-8')
                creds_info = json.loads(decoded_json)
                creds = service_account.Credentials.from_service_account_info(creds_info, scopes=SCOPES)
                print("✅ Authenticated via GOOGLE_CREDENTIALS_BASE64")
            except Exception as e:
                print(f"⚠️ Failed to load base64 credentials: {e}")

        # 2. Try JSON string from env var
        if not creds:
            json_creds = os.getenv("GOOGLE_CREDENTIALS_JSON")
            if json_creds:
                 try:
                    creds_info = json.loads(json_creds)
                    creds = service_account.Credentials.from_service_account_info(creds_info, scopes=SCOPES)
                    print("✅ Authenticated via GOOGLE_CREDENTIALS_JSON")
                 except Exception as e:
                    print(f"⚠️ Failed to load json string credentials: {e}")

        # 3. Try File path
        if not creds:
            service_account_file = os.getenv("GOOGLE_SERVICE_ACCOUNT_FILE", "execution/google_service_account.json")
            if os.path.exists(service_account_file):
                creds = service_account.Credentials.from_service_account_file(
                    service_account_file, scopes=SCOPES
                )
                print(f"✅ Authenticated via file: {service_account_file}")
            else:
                print(f"⚠️ Service account file not found at: {service_account_file}")
        
        if creds:
            self._service = build('calendar', 'v3', credentials=creds)
        else:
             print("❌ No valid Google Calendar credentials found.")
    
    def _get_service(self):
        """Get or create Calendar API service"""
        if self._service is None:
            self._authenticate() # Call the new authentication method
            if self._service is None: # If authentication failed to set service
                raise ValueError("Google Calendar service could not be initialized.")
        
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
