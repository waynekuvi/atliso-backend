from fastapi import APIRouter, HTTPException, BackgroundTasks, UploadFile, File
from pydantic import BaseModel
from typing import Optional, Dict, List, Any
from .db_helper import DatabaseHelper
import json

router = APIRouter()
db = DatabaseHelper()

class BotConfigUpdate(BaseModel):
    bot_name: Optional[str] = None
    welcome_message: Optional[str] = None
    business_context: Optional[str] = None
    personality: Optional[str] = None
    tone_keywords: Optional[str] = None
    model: Optional[str] = None
    temperature: Optional[float] = None
    max_tokens: Optional[int] = None
    widget_settings: Optional[Dict[str, Any]] = None # branding, logos, colors, avatars

@router.get("/api/v1/config/{org_id}")
async def get_config(org_id: str):
    """Get bot configuration for an organization"""
    config = await db.get_bot_config(org_id)
    if not config:
        # Return default config if none exists, but indicate it's a default
        return {
            "org_id": org_id,
            "bot_name": "Support Bot",
            "welcome_message": "Hello! How can I help you?",
            "model": "gpt-4o-mini",
            "temperature": 0.7,
            "max_tokens": 500,
            "widget_settings": {
                "logo": "",
                "supportLogo": "",
                "primaryColor": "#000000",
                "avatars": []
            }
        }
    
    # Parse JSON fields if they are strings (asyncpg might return dict for jsonb automatically, but safer to check)
    if isinstance(config.get('widget_settings'), str):
        config['widget_settings'] = json.loads(config['widget_settings'])
        
    return config

@router.patch("/api/v1/config/{org_id}")
async def update_config(org_id: str, config: BotConfigUpdate):
    """Update bot configuration"""
    # Convert Pydantic model to dict, excluding None values
    config_data = config.model_dump(exclude_unset=True)
    
    success = await db.upsert_bot_config(org_id, config_data)
    if not success:
        raise HTTPException(status_code=500, detail="Failed to update configuration")
        
    return {"status": "success", "org_id": org_id}

@router.post("/api/v1/config/{org_id}/knowledge")
async def upload_knowledge(org_id: str, file: UploadFile = File(...)):
    """
    Upload knowledge base document (PDF/Text)
    TODO: Implement PDF parsing and Vector Store insertion
    """
    # Just a stub for now
    return {
        "status": "received", 
        "filename": file.filename, 
        "message": "File received. Processing logic to be implemented."
    }
