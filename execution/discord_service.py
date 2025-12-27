
import os
import aiohttp
import json
from datetime import datetime
from typing import Optional, Dict

class DiscordService:
    """
    Service to interact with Discord API
    Supports Human Handoff via Threads
    """
    
    def __init__(self):
        self.bot_token = os.getenv("DISCORD_BOT_TOKEN")
        self.channel_id = os.getenv("DISCORD_CHANNEL_ID") # The channel where alerts go
        self.base_url = "https://discord.com/api/v10"
        
    async def create_handoff_thread(
        self,
        session_id: str,
        reason: str,
        summary: str,
        user_email: Optional[str] = None
    ) -> Optional[str]:
        """
        Create a new thread in Discord for the handoff
        
        Returns:
            thread_id if successful, None otherwise
        """
        if not self.bot_token or not self.channel_id:
            print("⚠️ [DiscordService] DISCORD_BOT_TOKEN or DISCORD_CHANNEL_ID not set.")
            return None
            
        headers = {
            "Authorization": f"Bot {self.bot_token}",
            "Content-Type": "application/json"
        }
        
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S UTC")
        
        # 1. Create the initial message with Embed
        embed = {
            "title": "🚨 Human Handoff Request",
            "color": 15158332,
            "fields": [
                {"name": "Reason", "value": reason, "inline": True},
                {"name": "Session ID", "value": f"`{session_id}`", "inline": True},
                {"name": "User Email", "value": user_email or "Unknown", "inline": False},
                {"name": "Context", "value": summary, "inline": False},
                {"name": "Time", "value": timestamp, "inline": False}
            ],
            "footer": {"text": "Atliso Automation System - Reply here to chat with user"}
        }
        
        async with aiohttp.ClientSession(headers=headers) as session:
            # Send message to channel
            msg_url = f"{self.base_url}/channels/{self.channel_id}/messages"
            async with session.post(msg_url, json={"embeds": [embed]}) as resp:
                if resp.status != 200:
                    err = await resp.text()
                    print(f"❌ [DiscordService] Failed to send alert: {err}")
                    return None
                
                msg_data = await resp.json()
                message_id = msg_data["id"]
                
                # 2. Start a thread from that message
                thread_url = f"{self.base_url}/channels/{self.channel_id}/messages/{message_id}/threads"
                thread_payload = {
                    "name": f"Chat with {user_email or session_id[:8]}",
                    "auto_archive_duration": 60
                }
                
                async with session.post(thread_url, json=thread_payload) as t_resp:
                    if t_resp.status != 201:
                        err = await t_resp.text()
                        print(f"❌ [DiscordService] Failed to create thread: {err}")
                        return None
                    
                    thread_data = await t_resp.json()
                    thread_id = thread_data["id"]
                    print(f"✅ [DiscordService] Created thread {thread_id} for session {session_id}")
                    return thread_id

    async def send_to_discord(self, thread_id: str, content: str):
        """Send a message to a Discord thread"""
        headers = {
            "Authorization": f"Bot {self.bot_token}",
            "Content-Type": "application/json"
        }
        url = f"{self.base_url}/channels/{thread_id}/messages"
        async with aiohttp.ClientSession(headers=headers) as session:
            async with session.post(url, json={"content": content}) as resp:
                return resp.status in [200, 204]
