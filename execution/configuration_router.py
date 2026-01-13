import os
import io
import json
import uuid
from typing import Optional, Dict, List, Any
from fastapi import APIRouter, HTTPException, BackgroundTasks, UploadFile, File, Header, Depends, Security
from pydantic import BaseModel
from openai import AsyncOpenAI
import PyPDF2

from .db_helper import DatabaseHelper

router = APIRouter()
db = DatabaseHelper()
client = AsyncOpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Authentication dependency
async def verify_secret(x_atliso_secret: str = Header(None)):
    shared_secret = os.getenv("SHARED_SECRET")
    if not shared_secret:
        print("⚠️ WARNING: SHARED_SECRET not set in environment. Authentication is wide open.")
        return
    if x_atliso_secret != shared_secret:
        raise HTTPException(status_code=401, detail="Unauthorized: Invalid secret")

class BotConfigUpdate(BaseModel):
    bot_name: Optional[str] = None
    welcome_message: Optional[str] = None
    business_context: Optional[str] = None
    personality: Optional[str] = None
    tone_keywords: Optional[str] = None
    model: Optional[str] = None
    temperature: Optional[float] = None
    max_tokens: Optional[int] = None
    widget_settings: Optional[Dict[str, Any]] = None

# ==========================================
# Knowledge Base Endpoints (Specific routes first)
# ==========================================

@router.get("/api/v1/config/{org_id}/knowledge")
async def list_knowledge(org_id: str):
    """List knowledge base documents for an organization. Returns [] if none."""
    docs = await db.get_knowledge_docs(org_id)
    return docs or []

@router.delete("/api/v1/config/{org_id}/knowledge/{doc_id}")
async def delete_knowledge(org_id: str, doc_id: str, _ = Depends(verify_secret)):
    """Delete a knowledge base document"""
    success = await db.delete_knowledge_doc(doc_id, org_id)
    if not success:
        raise HTTPException(status_code=500, detail="Failed to delete document")
    return {"status": "success", "doc_id": doc_id}

@router.post("/api/v1/config/{org_id}/knowledge")
async def upload_knowledge(
    org_id: str, 
    background_tasks: BackgroundTasks,
    file: UploadFile = File(...),
    _ = Depends(verify_secret)
):
    """Upload and process a knowledge base document"""
    if not file.filename.lower().endswith('.pdf'):
        raise HTTPException(status_code=400, detail="Only PDF files are supported")
    
    doc_id = str(uuid.uuid4())
    content = await file.read()
    file_size = len(content)
    
    # Create initial record
    await db.upsert_knowledge_doc({
        "id": doc_id,
        "org_id": org_id,
        "filename": file.filename,
        "file_size": file_size,
        "status": "processing"
    })
    
    # Offload processing to background
    background_tasks.add_task(process_pdf_background, doc_id, org_id, file.filename, content)
    
    return {
        "status": "processing",
        "doc_id": doc_id,
        "filename": file.filename
    }

# ==========================================
# Bot Configuration Endpoints
# ==========================================

@router.get("/api/v1/config/{org_id}")
@router.get("/api/widget/config/{org_id}")
async def get_config(org_id: str):
    """Get bot configuration for an organization. Auto-creates default if missing."""
    config = await db.get_bot_config(org_id)
    
    if not config:
        # Auto-create default record
        default_settings = {
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
        await db.upsert_bot_config(org_id, default_settings)
        # Fetch it back to return full structure
        config = await db.get_bot_config(org_id)
    
    # Process widget_settings
    widget_settings = config.get('widget_settings', {})
    if isinstance(widget_settings, str):
        widget_settings = json.loads(widget_settings)
    
    # Flatten the response for the widget
    # Support both snake_case (DB/Legacy) and camelCase (New API)
    response = {
        **config,
        "botName": config.get('bot_name'),
        "homepageHeading": config.get('homepage_heading') or "How can we help you?",
        "welcomeMessage": config.get('welcome_message'),
        "primaryColor": widget_settings.get('primaryColor') or widget_settings.get('primary_color') or '#000000',
        "logoUrl": widget_settings.get('logoUrl') or widget_settings.get('logo'),
        "supportLogoUrl": widget_settings.get('supportLogoUrl') or widget_settings.get('supportLogo'),
        "avatarUrl": (widget_settings.get('avatars') or widget_settings.get('avatarUrl'))[0] if (widget_settings.get('avatars') or widget_settings.get('avatarUrl')) else None,
        "launcherText": widget_settings.get('launcherText') or widget_settings.get('launcher_text') or 'Chat with us',
        "position": widget_settings.get('position') or 'bottom-right',
        "tagline": widget_settings.get('tagline') or widget_settings.get('tagline'),
        "showBranding": widget_settings.get('showBranding') if 'showBranding' in widget_settings else True,
    }
    
    # Remove raw db fields that aren't needed in flattened response
    response.pop('widget_settings', None)
    
    return response

@router.patch("/api/v1/config/{org_id}")
async def update_config(org_id: str, config: BotConfigUpdate, _ = Depends(verify_secret)):
    """Update bot configuration"""
    config_data = config.model_dump(exclude_unset=True)
    widget_data = config_data.pop('widget_settings', None)
    
    if config_data:
        success = await db.upsert_bot_config(org_id, config_data)
        if not success:
            raise HTTPException(status_code=500, detail="Failed to update configuration")
            
    if widget_data:
        success = await db.update_bot_config_widget_settings(org_id, widget_data)
        if not success:
            raise HTTPException(status_code=500, detail="Failed to update widget settings")
        
    return {"status": "success", "org_id": org_id}

# ==========================================
# Background Processing
# ==========================================

async def process_pdf_background(doc_id: str, org_id: str, filename: str, content: bytes):
    """Background task to parse, chunk, embed, and store PDF content"""
    try:
        # 1. Parse PDF
        pdf_file = io.BytesIO(content)
        reader = PyPDF2.PdfReader(pdf_file)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        
        if not text.strip():
            raise Exception("PDF is empty or could not be parsed")
            
        # 2. Chunking (Simple)
        chunk_size = 1000
        overlap = 200
        chunks = []
        for i in range(0, len(text), chunk_size - overlap):
            chunks.append(text[i:i + chunk_size])
            if i + chunk_size >= len(text):
                break
        
        # 3. Embedding & Storage
        for i, chunk in enumerate(chunks):
            # Get embedding
            response = await client.embeddings.create(
                input=chunk,
                model="text-embedding-3-small"
            )
            embedding = response.data[0].embedding
            
            # Store in vector DB
            await db.insert_knowledge_vector(
                org_id=org_id,
                doc_id=doc_id,
                content=chunk,
                embedding=embedding,
                metadata={"filename": filename, "chunk_index": i}
            )
        
        # 4. Update status to ready
        await db.upsert_knowledge_doc({
            "id": doc_id,
            "org_id": org_id,
            "filename": filename,
            "status": "ready",
            "chunk_count": len(chunks)
        })
        print(f"✅ Knowledge Doc {filename} processed successfully. {len(chunks)} chunks.")
        
    except Exception as e:
        print(f"❌ Failed to process knowledge doc {filename}: {e}")
        await db.upsert_knowledge_doc({
            "id": doc_id,
            "org_id": org_id,
            "filename": filename,
            "status": "failed"
        })
