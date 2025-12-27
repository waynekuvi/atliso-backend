"""
Prospect Analyzer - Weapon 1 of the Alpha Strike Engine
Scrapes prospect websites and uses AI to generate personalized "Value Bombs".
"""

import os
import asyncio
import httpx
from bs4 import BeautifulSoup
from typing import Dict, List, Any
from openai import AsyncOpenAI
from dotenv import load_dotenv
from pathlib import Path

# Load env from parent dir
load_dotenv(Path(__file__).parent.parent / ".env")

class ProspectAnalyzer:
    def __init__(self):
        self.client = AsyncOpenAI(api_key=os.getenv("OPENAI_API_KEY"))
        self.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
        }

    async def analyze_website(self, url: str) -> Dict[str, str]:
        """
        A-Z Analysis of a prospect website
        """
        print(f"🔍 Analyzing: {url}")
        
        # 1. Scrape content
        scrape_data = await self._scrape_website(url)
        if not scrape_data:
            return {"error": "Could not reach website"}

        content = scrape_data["text"]
        existing = scrape_data["existing_widgets"]

        # 2. AI Brain Surgery (Finding the Pain Points)
        analysis = await self._generate_ai_personalization(url, content, existing)
        
        return analysis

    async def _scrape_website(self, url: str) -> str:
        """Fetch and clean website text"""
        try:
            if not url.startswith("http"):
                url = "https://" + url
                
            async with httpx.AsyncClient(follow_redirects=True, timeout=15.0) as client:
                response = await client.get(url, headers=self.headers)
                if response.status_code != 200:
                    return ""
                
                soup = BeautifulSoup(response.text, 'html.parser')
                
                # Check for existing widgets
                scripts = soup.find_all("script", src=True)
                existing_widgets = []
                widget_signatures = {
                    "intercom": "Intercom",
                    "drift.com": "Drift",
                    "zendesk.com": "Zendesk",
                    "hubspot.com": "HubSpot",
                    "tidio.com": "Tidio",
                    "liveperson": "LivePerson"
                }
                
                for script in scripts:
                    src = script["src"].lower()
                    for sig, name in widget_signatures.items():
                        if sig in src:
                            existing_widgets.append(name)
                
                # Remove script and style elements for cleaner text extraction
                for script in soup(["script", "style"]):
                    script.extract()
                
                # Get text and clean it
                text = soup.get_text(separator=' ')
                lines = (line.strip() for line in text.splitlines())
                chunks = (phrase.strip() for line in lines for phrase in line.split("  "))
                text = '\n'.join(chunk for chunk in chunks if chunk)
                
                return {
                    "text": text[:4000],
                    "existing_widgets": list(set(existing_widgets))
                }
        except Exception as e:
            print(f"❌ Scraping error for {url}: {e}")
            return None

    async def _generate_ai_personalization(self, url: str, content: str, existing_widgets: List[str]) -> Dict[str, str]:
        """Use GPT-4o-mini to find the value-bomb"""
        try:
            widget_context = f"They already use: {', '.join(existing_widgets)}" if existing_widgets else "They have NO chat widget."
            
            prompt = f"""
            Identify a specific business value play for this company based on their website content.
            URL: {url}
            {widget_context}
            CONTENT: {content}
            
            TASKS:
            1. COMPLIMENT: Find one specific thing they do well or a unique service they offer.
            2. PAIN_POINT: If they have no widget, use 'Manual lead capture'. If they have a widget (like Zendesk/Intercom), use 'Static Chat Bot' (AI handles it better).
            3. OPENING_LINE: Write a 1-sentence opening for a cold email that feels 100% manual. Mention their [Unique Service].
            4. VALUE_BOMB: Write a 1-sentence hook explaining how an AI agent fixes their specific PAIN_POINT. 
            If they already have a widget, explain why GPT-based 'Deterministic AI' is better than their current static one.

            Output in JSON format:
            {{
                "compliment": "...",
                "pain_point": "...",
                "opening_line": "...",
                "value_bomb": "...",
                "has_competitor": {str(len(existing_widgets) > 0).lower()}
            }}
            """
            
            response = await self.client.chat.completions.create(
                model="gpt-4o-mini",
                temperature=0.7,
                response_format={"type": "json_object"},
                messages=[
                    {"role": "system", "content": "You are a world-class sales engineer for an AI Automation Agency. You find specific 'money-making' gaps in businesses."},
                    {"role": "user", "content": prompt}
                ]
            )
            
            import json
            return json.loads(response.choices[0].message.content)
        except Exception as e:
            print(f"❌ AI Analysis error: {e}")
            return {"error": str(e)}

async def test_analyzer():
    analyzer = ProspectAnalyzer()
    # Test with a few sample URLs
    urls = ["https://www.apple.com", "https://www.tesla.com"]
    for url in urls:
        result = await analyzer.analyze_website(url)
        print(f"\n--- Result for {url} ---")
        print(result)

if __name__ == "__main__":
    asyncio.run(test_analyzer())
