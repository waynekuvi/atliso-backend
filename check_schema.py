
import asyncio
import os
from execution.db_helper import DatabaseHelper
from dotenv import load_dotenv

load_dotenv()

async def check_schema():
    db = DatabaseHelper()
    print("Checking schema for n8n_chat_histories...")
    
    async with db.connection() as conn:
        rows = await conn.fetch("""
            SELECT column_name, data_type
            FROM information_schema.columns
            WHERE table_name = 'n8n_chat_histories';
        """)
        
        print("\nColumns found:")
        for row in rows:
            print(f"- {row['column_name']}: {row['data_type']}")

if __name__ == "__main__":
    asyncio.run(check_schema())
