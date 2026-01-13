
import asyncio
import os
import json
from execution.db_helper import DatabaseHelper
from dotenv import load_dotenv

load_dotenv()

async def verify_timestamp_insert():
    db = DatabaseHelper()
    session_id = "test-timestamp-verification"
    role = "bot"
    content = "This is a timestamp verification message."
    
    print(f"Saving test message for session: {session_id}")
    await db.save_chat_message(session_id, role, content)
    print("Message saved.")
    
    print("Retrieving message immediately...")
    async with db.connection() as conn:
        row = await conn.fetchrow("""
             SELECT 
               id, 
               session_id, 
               message->>'type' as type, 
               message->>'content' as content, 
               message->>'timestamp' as timestamp 
             FROM n8n_chat_histories 
             WHERE session_id = $1 
             ORDER BY id DESC 
             LIMIT 1
        """, session_id)
        
        if row:
            print(f"Retrieved Row: id={row['id']}, timestamp={row['timestamp']}")
            if row['timestamp']:
                 print("✅ SUCCESS: Timestamp was saved successfully.")
            else:
                 print("❌ FAILURE: Timestamp is missing.")
        else:
            print("❌ FAILURE: Could not find the saved message.")

if __name__ == "__main__":
    asyncio.run(verify_timestamp_insert())
