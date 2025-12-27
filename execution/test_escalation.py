
import asyncio
import os
import sys
from pathlib import Path

# Add execution directory to path
sys.path.insert(0, str(Path(__file__).parent))

from dotenv import load_dotenv
load_dotenv(Path(__file__).parent.parent / ".env")

from discord_service import DiscordService

async def test():
    print("🧪 Testing Discord Escalation logic...")
    
    try:
        service = DiscordService()
        success = await service.send_alert(
            session_id="test-session-debug",
            reason="Debug Test",
            summary="Testing direct call",
            user_email="debug@test.com"
        )
        print(f"✅ Result: {success}")
    except Exception as e:
        import traceback
        traceback.print_exc()
        print(f"❌ Error: {e}")

if __name__ == "__main__":
    asyncio.run(test())
