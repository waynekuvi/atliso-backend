
import os
import discord
import aiohttp
import asyncio
from dotenv import load_dotenv
from pathlib import Path

# Load env from parent dir
load_dotenv(Path(__file__).parent.parent / ".env")

TOKEN = os.getenv("DISCORD_BOT_TOKEN")
API_URL = "https://atliso-backend.onrender.com/webhook/discord"

class DiscordListener(discord.Client):
    async def on_ready(self):
        print(f"✅ Logged in as {self.user} (ID: {self.user.id})")
        print("🚀 Monitoring Discord for human replies...")

    async def on_message(self, message):
        # 1. Ignore messages from the bot itself
        if message.author == self.user:
            return

        # 2. Check if message is in a Thread
        if isinstance(message.channel, discord.Thread):
            thread_id = str(message.channel.id)
            content = message.content
            author = str(message.author)
            
            print(f"📩 Received message from {author} in thread {thread_id}: {content}")
            
            # 3. Forward to our local API
            async with aiohttp.ClientSession() as session:
                payload = {
                    "thread_id": thread_id,
                    "content": content,
                    "author": author,
                    "type": "message"
                }
                try:
                    async with session.post(API_URL, json=payload) as resp:
                        if resp.status == 200:
                            data = await resp.json()
                            if data.get("status") == "synced":
                                print(f"🔗 Successfully synced to chat widget.")
                            else:
                                print(f"⚠️ Discord message ignored: {data.get('status')}")
                        else:
                            print(f"❌ Error forwarding to API: {resp.status}")
                except Exception as e:
                    print(f"❌ Connection error to API: {e}")

async def main():
    if not TOKEN:
        print("❌ DISCORD_BOT_TOKEN not found in .env")
        return

    intents = discord.Intents.default()
    intents.message_content = True
    
    client = DiscordListener(intents=intents)
    await client.start(TOKEN)

if __name__ == "__main__":
    asyncio.run(main())
