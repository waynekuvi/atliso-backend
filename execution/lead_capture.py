"""
Lead Capture - Intelligent lead scoring and extraction
Replaces N8N LEAD-CAPTURE workflow
"""

import os
import json
import re
from typing import Dict, Optional
from openai import AsyncOpenAI

from db_helper import DatabaseHelper


class LeadCapture:
    """
    Lead capture with AI-powered extraction and intelligent scoring
    """
    
    def __init__(self):
        self.client = AsyncOpenAI(api_key=os.getenv("OPENAI_API_KEY"))
        self.db = DatabaseHelper()
    
    async def capture(
        self,
        session_id: str,
        org_id: str,
        chat_query: str
    ) -> Dict:
        """
        Capture and score lead from chat conversation
        
        Args:
            session_id: Session identifier
            org_id: Organization ID
            chat_query: Chat message + AI response
        
        Returns:
            Dict with captured lead data
        """
        try:
            # 1. Extract lead info using AI
            extracted = await self._extract_lead_info(chat_query)
            
            # 2. Get existing lead data
            existing = await self.db.get_lead(session_id) or {}
            
            # 3. Merge extracted with existing
            merged = self._merge_lead_data(extracted, existing)
            
            # 4. Calculate intelligent score
            score, status = self._calculate_score(merged, extracted)
            
            # 5. Prepare final lead data
            lead_data = {
                "session_id": session_id,
                "org_id": org_id,
                "name": merged.get("name"),
                "email": merged.get("email"),
                "phone": merged.get("phone"),
                "company": merged.get("company"),
                "score": score,
                "status": status,
                "is_booked": merged.get("is_booked", False),
                "booked_at": merged.get("booked_at"),
                "google_event_id": merged.get("google_event_id"),
                "booking_url": merged.get("booking_url"),
                "meeting_url": merged.get("meeting_url")
            }
            
            # 6. Upsert to database
            await self.db.upsert_lead(lead_data)
            
            return {"success": True, "lead": lead_data}
            
        except Exception as e:
            print(f"[LeadCapture] Error: {e}")
            return {"success": False, "error": str(e)}
    
    async def _extract_lead_info(self, chat_query: str) -> Dict:
        """
        Use GPT to extract lead information from chat
        """
        try:
            response = await self.client.chat.completions.create(
                model="gpt-4o",
                temperature=0,
                messages=[
                    {
                        "role": "system",
                        "content": "Extract lead info to RAW JSON: name, email, phone, company, lead_score, is_booked. Use null for missing. No markdown. Always respond with valid JSON only."
                    },
                    {
                        "role": "user",
                        "content": chat_query
                    }
                ]
            )
            
            output = response.choices[0].message.content or "{}"
            
            # Clean and parse JSON
            cleaned = output.replace("```json", "").replace("```", "").strip()
            return json.loads(cleaned)
            
        except json.JSONDecodeError:
            return {}
        except Exception as e:
            print(f"[LeadCapture] Extraction error: {e}")
            return {}
    
    def _merge_lead_data(self, extracted: Dict, existing: Dict) -> Dict:
        """
        Merge extracted data with existing - extracted takes priority
        """
        def get_value(new_val, existing_val, default=None):
            if new_val and new_val != "null" and str(new_val).strip():
                return new_val
            if existing_val and str(existing_val).strip():
                return existing_val
            return default
        
        return {
            "name": get_value(extracted.get("name"), existing.get("name")),
            "email": get_value(extracted.get("email"), existing.get("email")),
            "phone": get_value(extracted.get("phone"), existing.get("phone")),
            "company": get_value(extracted.get("company"), existing.get("company")),
            "is_booked": extracted.get("is_booked", existing.get("is_booked", False))
        }
    
    def _calculate_score(self, merged: Dict, extracted: Dict) -> tuple:
        """
        Calculate intelligent lead score (0-100) based on data completeness
        
        Scoring breakdown:
        - Name (25 points): Full name = 25, First only = 15
        - Email (35 points): Valid = 25, Business email bonus = +10
        - Phone (25 points): Valid = 25, Partial = 15
        - Company (15 points): Provided = 15
        - Engagement (15 points): Booked = 15, Detailed = 10
        
        Returns:
            Tuple of (score, status)
        """
        score = 0
        
        # 1. Name scoring (0-25)
        name = merged.get("name")
        if name:
            name_parts = name.strip().split()
            if len(name_parts) >= 2:
                score += 25  # Full name
            elif len(name_parts) == 1 and len(name_parts[0]) >= 2:
                score += 15  # First name only
        
        # 2. Email scoring (0-35)
        email = merged.get("email")
        if email:
            email_regex = r"^[^\s@]+@[^\s@]+\.[^\s@]+$"
            if re.match(email_regex, email):
                score += 25  # Valid email
                
                # Business email bonus
                free_providers = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com", "aol.com"]
                domain = email.split("@")[1].lower() if "@" in email else ""
                if domain and domain not in free_providers:
                    score += 10  # Business email bonus
        
        # 3. Phone scoring (0-25)
        phone = merged.get("phone")
        if phone:
            clean_phone = re.sub(r"\D", "", phone)
            if len(clean_phone) >= 10:
                score += 25  # Valid phone
            elif len(clean_phone) >= 7:
                score += 15  # Partial phone
        
        # 4. Company scoring (0-15)
        company = merged.get("company")
        if company and len(company) >= 2:
            score += 15
        
        # 5. Engagement scoring (0-15)
        if extracted.get("is_booked") is True or merged.get("is_booked") is True:
            score += 15
        
        # Cap at 100
        score = min(score, 100)
        
        # Determine status
        if merged.get("is_booked") or extracted.get("is_booked"):
            status = "BOOKED"
        elif score > 65:
            status = "QUALIFIED"
        elif score > 30:
            status = "COLD"
        else:
            status = "NEW"
        
        return score, status
