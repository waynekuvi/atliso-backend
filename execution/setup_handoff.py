
import asyncio
import os
import sys
from pathlib import Path

# Add execution directory to path
sys.path.insert(0, str(Path(__file__).parent))

from .db_helper import DatabaseHelper
from dotenv import load_dotenv

load_dotenv(Path(__file__).parent.parent / ".env")

async def setup():
    db = DatabaseHelper()
    print("🛠️ Adding human handoff columns to 'leads' table...")
    
    async with db.connection() as conn:
        # Add columns if they don't exist
        await conn.execute("""
            ALTER TABLE leads 
            ADD COLUMN IF NOT EXISTS is_human_mode BOOLEAN DEFAULT false,
            ADD COLUMN IF NOT EXISTS discord_thread_id TEXT;
        """)
        
        print("✅ Columns added successfully.")

if __name__ == "__main__":
    asyncio.run(setup())
