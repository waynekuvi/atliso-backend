
import asyncio
import os
import sys
from pathlib import Path

# Add the directory containing db_helper to path
sys.path.append(str(Path(__file__).parent))

from db_helper import DatabaseHelper
from dotenv import load_dotenv

load_dotenv(Path(__file__).parent.parent / ".env")

async def check():
    db = DatabaseHelper()
    async with db.connection() as conn:
        rows = await conn.fetch("SELECT session_id, is_human_mode FROM leads WHERE is_human_mode = true")
        print(f"Total sessions in human mode: {len(rows)}")
        for row in rows:
            print(f"- {row['session_id']}")

if __name__ == "__main__":
    asyncio.run(check())
