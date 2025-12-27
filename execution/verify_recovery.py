
import asyncio
import os
from datetime import datetime, timedelta
from dotenv import load_dotenv

# Load env vars
load_dotenv()

from db_helper import DatabaseHelper
from lead_recovery_service import LeadRecoveryService

async def verify():
    print("🧪 Verifying Lead Recovery...")
    db = DatabaseHelper()
    
    # 1. Setup test lead
    session_id = "test-abandoned-session"
    email = "abandoned@test.com"
    
    print(f"Creating test lead: {email}")
    async with db.connection() as conn:
        # Delete existing
        await conn.execute("DELETE FROM leads WHERE session_id = $1", session_id)
        
        # Insert abandoned lead (2 hours ago)
        await conn.execute(
            """
            INSERT INTO leads (session_id, email, name, is_booked, recovery_email_sent, last_active_at, status)
            VALUES ($1, $2, 'Abandoned User', false, false, NOW() - INTERVAL '2 hours', 'NEW')
            """,
            session_id, email
        )
    
    # 2. Run check
    print("Running recovery check...")
    service = LeadRecoveryService()
    await service.process_abandoned_leads()
    
    # 3. Verify
    lead = await db.get_lead(session_id)
    if lead and lead.get('recovery_email_sent'):
        print("✅ SUCCESS: Recovery email marked as sent!")
    else:
        print("❌ FAILURE: Recovery email NOT marked as sent.")
        print(f"Lead state: {lead}")

if __name__ == "__main__":
    asyncio.run(verify())
