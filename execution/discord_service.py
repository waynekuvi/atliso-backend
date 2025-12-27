
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
        self.webhook_url = os.getenv("DISCORD_WEBHOOK_URL")
        self.base_url = "https://discord.com/api/v10"
        
    async def create_handoff_thread(
        self,
        session_id: str,
        reason: str,
        summary: str,
        user_email: Optional[str] = None
    ) -> Optional[str]:
        """
        Create a new thread in Discord for the handoff.
        Falls back to Webhook if Bot Token fails.
        """
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S UTC")
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
            "footer": {"text": "Atliso Automation System"}
        }

        # Strategy 1: Attempt via Bot Token (Allows threading/interaction)
        if self.bot_token and self.channel_id:
            try:
                headers = {
                    "Authorization": f"Bot {self.bot_token}",
                    "Content-Type": "application/json"
                }
                async with aiohttp.ClientSession(headers=headers) as session:
                    # Send message to channel
                    msg_url = f"{self.base_url}/channels/{self.channel_id}/messages"
                    async with session.post(msg_url, json={"embeds": [embed]}) as resp:
                        if resp.status == 200:
                            msg_data = await resp.json()
                            message_id = msg_data["id"]
                            
                            # Start a thread from that message
                            thread_url = f"{self.base_url}/channels/{self.channel_id}/messages/{message_id}/threads"
                            thread_payload = {
                                "name": f"Chat with {user_email or session_id[:8]}",
                                "auto_archive_duration": 60
                            }
                            async with session.post(thread_url, json=thread_payload) as t_resp:
                                if t_resp.status == 201:
                                    thread_data = await t_resp.json()
                                    thread_id = thread_data["id"]
                                    print(f"✅ [DiscordService] Created thread {thread_id}")
                                    return thread_id
                                else:
                                    print(f"⚠️ [DiscordService] Failed to create thread (Status {t_resp.status})")
                        elif resp.status in [401, 403]:
                            print(f"❌ [DiscordService] Bot Token unauthorized (401/403). Falling back to Webhook...")
                        else:
                            err = await resp.text()
                            print(f"⚠️ [DiscordService] Send message failed ({resp.status}): {err}")
            except Exception as e:
                print(f"❌ [DiscordService] Bot execution error: {e}")

        # Strategy 2: Fallback to Webhook (Ensures alert is delivered even if bot is down)
        if self.webhook_url:
            print(f"📡 [DiscordService] Attempting alert via Webhook fallback...")
            try:
                async with aiohttp.ClientSession() as session:
                    async with session.post(self.webhook_url, json={"embeds": [embed]}) as resp:
                        if resp.status < 300:
                            print("✅ [DiscordService] Alert sent via Webhook fallback.")
                            # Note: We return None for thread_id because webhooks can't easily start threads
                            # but the user at least gets the notification.
                            return "webhook_fallback"
                        else:
                            print(f"❌ [DiscordService] Webhook fallback failed (Status {resp.status})")
            except Exception as e:
                print(f"❌ [DiscordService] Webhook error: {e}")

        return None

    async def send_to_discord(self, thread_id: str, content: str):
        """Send a message to a Discord thread/channel"""
        if not thread_id or thread_id == "webhook_fallback":
            return False
            
        headers = {
            "Authorization": f"Bot {self.bot_token}",
            "Content-Type": "application/json"
        }
        url = f"{self.base_url}/channels/{thread_id}/messages"
        try:
            async with aiohttp.ClientSession(headers=headers) as session:
                async with session.post(url, json={"content": content}) as resp:
                    return resp.status in [200, 204]
        except Exception:
            return False
