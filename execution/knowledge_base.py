"""
Knowledge Base Handler - PDF embedding and vector storage
Replaces N8N KNOWLEDGE-BASE workflow
"""

import os
import json
from typing import Dict, List, Optional
from io import BytesIO

import httpx
from openai import AsyncOpenAI

from db_helper import DatabaseHelper


class KnowledgeBaseHandler:
    """
    Handles PDF processing and embedding for knowledge base
    """
    
    def __init__(self):
        self.client = AsyncOpenAI(api_key=os.getenv("OPENAI_API_KEY"))
        self.db = DatabaseHelper()
        
        # Chunking config
        self.chunk_size = 1000  # characters
        self.chunk_overlap = 200
    
    async def process_pdf(self, payload: Dict) -> Dict:
        """
        Process a PDF and create embeddings
        
        Args:
            payload: Dict with org_id, file_url, filename, doc_id
        
        Returns:
            Dict with success, chunks count
        """
        org_id = payload.get("org_id")
        file_url = payload.get("file_url")
        filename = payload.get("filename", "document.pdf")
        doc_id = payload.get("doc_id")
        
        if not org_id or not file_url:
            return {"success": False, "error": "org_id and file_url are required"}
        
        try:
            # 1. Download PDF
            pdf_content = await self._download_pdf(file_url)
            
            # 2. Extract text
            text = self._extract_text(pdf_content)
            
            if not text or len(text) < 50:
                return {"success": False, "error": "No extractable text found in PDF"}
            
            # 3. Chunk text
            chunks = self._chunk_text(text, filename, doc_id)
            
            if not chunks:
                return {"success": False, "error": "No chunks created"}
            
            # 4. Create embeddings and store
            stored = 0
            for chunk in chunks:
                embedding = await self._create_embedding(chunk["content"])
                if embedding:
                    await self.db.insert_knowledge_vector(
                        org_id=org_id,
                        doc_id=doc_id,
                        content=chunk["content"],
                        embedding=embedding,
                        metadata=chunk["metadata"]
                    )
                    stored += 1
            
            return {
                "success": True,
                "message": "PDF processed successfully",
                "chunks": len(chunks),
                "stored": stored,
                "doc_id": doc_id
            }
            
        except Exception as e:
            print(f"[KnowledgeBaseHandler] Error: {e}")
            return {"success": False, "error": str(e)}
    
    async def _download_pdf(self, url: str) -> bytes:
        """Download PDF from URL"""
        async with httpx.AsyncClient() as client:
            response = await client.get(url, follow_redirects=True)
            response.raise_for_status()
            return response.content
    
    def _extract_text(self, pdf_content: bytes) -> str:
        """Extract text from PDF bytes"""
        try:
            from PyPDF2 import PdfReader
            
            reader = PdfReader(BytesIO(pdf_content))
            text_parts = []
            
            for page in reader.pages:
                page_text = page.extract_text()
                if page_text:
                    text_parts.append(page_text)
            
            full_text = "\n\n".join(text_parts)
            
            # Clean up
            full_text = full_text.replace("\r\n", "\n")
            full_text = full_text.replace("\r", "\n")
            
            # Remove excessive whitespace
            import re
            full_text = re.sub(r"\n{3,}", "\n\n", full_text)
            full_text = re.sub(r" +", " ", full_text)
            
            return full_text.strip()
            
        except Exception as e:
            print(f"[KnowledgeBaseHandler] PDF extraction error: {e}")
            return ""
    
    def _chunk_text(
        self,
        text: str,
        filename: str,
        doc_id: str
    ) -> List[Dict]:
        """
        Split text into overlapping chunks
        
        Returns:
            List of dicts with content and metadata
        """
        chunks = []
        start_index = 0
        chunk_index = 0
        
        while start_index < len(text):
            # Calculate end (try to break at sentence boundary)
            end_index = start_index + self.chunk_size
            
            if end_index < len(text):
                # Look for a good break point
                last_period = text.rfind(".", start_index, end_index)
                last_newline = text.rfind("\n", start_index, end_index)
                break_point = max(last_period, last_newline)
                
                # Only use break point if it's past halfway
                if break_point > start_index + self.chunk_size * 0.5:
                    end_index = break_point + 1
            
            chunk_text = text[start_index:end_index].strip()
            
            # Only keep meaningful chunks
            if len(chunk_text) > 50:
                chunks.append({
                    "content": chunk_text,
                    "metadata": {
                        "filename": filename,
                        "doc_id": doc_id,
                        "chunk_index": chunk_index,
                        "char_start": start_index,
                        "char_end": end_index
                    }
                })
                chunk_index += 1
            
            # Move forward with overlap
            start_index = end_index - self.chunk_overlap
            
            # Prevent infinite loop
            if start_index >= len(text) - 50:
                break
        
        return chunks
    
    async def _create_embedding(self, text: str) -> Optional[List[float]]:
        """Create embedding using OpenAI"""
        try:
            response = await self.client.embeddings.create(
                model="text-embedding-ada-002",
                input=text
            )
            return response.data[0].embedding
        except Exception as e:
            print(f"[KnowledgeBaseHandler] Embedding error: {e}")
            return None
