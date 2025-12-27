
import asyncio
import os
from dotenv import load_dotenv

# Load env vars
load_dotenv()

from db_helper import DatabaseHelper

async def migrate():
    print("Starting schema migration for Lead Recovery...")
    db = DatabaseHelper()
    
    async with db.connection() as conn:
        # Add last_active_at column
        try:
            await conn.execute("""
                ALTER TABLE leads 
                ADD COLUMN IF NOT EXISTS last_active_at TIMESTAMPTZ DEFAULT NOW();
            """)
            print("✅ Added last_active_at column")
        except Exception as e:
            print(f"⚠️ Error adding last_active_at: {e}")

        # Add recovery_email_sent column
        try:
            await conn.execute("""
                ALTER TABLE leads 
                ADD COLUMN IF NOT EXISTS recovery_email_sent BOOLEAN DEFAULT FALSE;
            """)
            print("✅ Added recovery_email_sent column")
        except Exception as e:
            print(f"⚠️ Error adding recovery_email_sent: {e}")

    print("Migration complete.")

if __name__ == "__main__":
    asyncio.run(migrate())
