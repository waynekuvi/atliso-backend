#!/usr/bin/env python3
"""
Test script to verify database connection works
"""
import asyncio
import os
import ssl
import socket
import re
from dotenv import load_dotenv
from pathlib import Path

# Load .env
load_dotenv(Path(__file__).parent / ".env")

async def test_connection():
    import asyncpg
    
    db_url = os.getenv("DATABASE_URL")
    print(f"Testing connection to: {db_url[:60]}...")
    
    # Test 1: DNS Resolution
    print("\n--- Test 1: DNS Resolution ---")
    match = re.search(r'@([^:/]+)', db_url)
    if match:
        hostname = match.group(1)
        try:
            ipv4_addr = socket.gethostbyname(hostname)
            print(f"✅ Resolved {hostname} to IPv4: {ipv4_addr}")
        except socket.gaierror as e:
            print(f"❌ DNS resolution failed: {e}")
            return
    
    # Test 2: Direct connection with SSL
    print("\n--- Test 2: Direct Connection with SSL ---")
    ssl_context = ssl.create_default_context(ssl.Purpose.SERVER_AUTH)
    ssl_context.check_hostname = False
    ssl_context.verify_mode = ssl.CERT_NONE
    
    try:
        conn = await asyncpg.connect(
            db_url,
            ssl=ssl_context,
            timeout=30
        )
        print("✅ Connected successfully!")
        
        # Test query
        result = await conn.fetchval("SELECT current_database()")
        print(f"✅ Database: {result}")
        
        result = await conn.fetchval("SELECT COUNT(*) FROM leads")
        print(f"✅ Leads count: {result}")
        
        await conn.close()
        print("✅ Connection closed cleanly")
        
    except Exception as e:
        print(f"❌ Connection failed: {type(e).__name__}: {e}")

if __name__ == "__main__":
    asyncio.run(test_connection())
