
import asyncio
import os
from datetime import datetime
from typing import Dict
from .db_helper import DatabaseHelper
from email_service import EmailService

class LeadRecoveryService:
    """
    Service to recover abandoned leads
    Detects users who engaged but didn't book, and sends a follow-up email.
    """
    
    def __init__(self):
        self.db = DatabaseHelper()
        self.email = EmailService()
        self.running = False
        
    async def start(self):
        """Start the background recovery task"""
        self.running = True
        print("🚀 Lead Recovery Service started")
        ensure_future = asyncio.create_task(self._run_loop())
        
    async def stop(self):
        """Stop the background task"""
        self.running = False
        print("🛑 Lead Recovery Service stopped")
        
    async def _run_loop(self):
        """Main check loop"""
        while self.running:
            try:
                await self.process_abandoned_leads()
            except Exception as e:
                print(f"[LeadRecovery] Error in loop: {e}")
            
            # Check every 5 minutes
            await asyncio.sleep(300) 
            
    async def process_abandoned_leads(self):
        """Check for and email abandoned leads"""
        # For testing, we might want a shorter threshold, but default to 60 mins
        # User requested 1 hour.
        leads = await self.db.get_abandoned_leads(inactivity_minutes=60)
        
        if not leads:
            return

        print(f"[LeadRecovery] Found {len(leads)} abandoned leads")
        
        for lead in leads:
            await self._send_recovery_email(lead)
            
    async def _send_recovery_email(self, lead: Dict):
        """Send specific recovery email"""
        try:
            name = lead.get('name') or "there"
            email = lead.get('email')
            session_id = lead.get('session_id')
            
            if not email:
                return

            print(f"[LeadRecovery] Sending recovery email to {email}")
            
            subject = "Did you still want to book that slot?"
            body = f"""Hi {name},

I noticed you were looking to book a meeting but didn't quite finish.

Did you still want to secure a time?

You can reply to this email or jump back into the chat to complete your booking.

Best regards,
The Atliso Team"""
            
            # Send email
            await self.email.send(to=email, subject=subject, body=body)
            
            # Mark as sent
            await self.db.mark_recovery_email_sent(session_id)
            
            print(f"[LeadRecovery] ✅ Recovered email sent to {email}")
            
        except Exception as e:
            print(f"[LeadRecovery] Failed to send to {email}: {e}")
