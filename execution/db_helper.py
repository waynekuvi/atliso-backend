"""
Database Helper - Postgres/Supabase operations
Handles all database queries for the execution layer
"""

import os
import json
from typing import Dict, List, Any, Optional
import asyncpg
from datetime import datetime
from contextlib import asynccontextmanager


class DatabaseHelper:
    """
    Database helper for Postgres operations
    Uses asyncpg for async queries
    """
    
    _pool = None

    def __init__(self):
        self.database_url = os.getenv("DATABASE_URL")
    
    async def _get_pool(self):
        """Get or create singleton connection pool with retry logic"""
        if DatabaseHelper._pool is None:
            import ssl
            import asyncio
            
            db_url = self.database_url
            print(f"💎 Initializing Global Database Pool...")
            
            # Create proper SSL context for Supabase
            ssl_context = ssl.create_default_context(ssl.Purpose.SERVER_AUTH)
            ssl_context.check_hostname = False
            ssl_context.verify_mode = ssl.CERT_NONE
            
            # Retry logic
            max_retries = 3
            retry_delay = 2
            last_error = None
            
            for attempt in range(max_retries):
                try:
                    # Close existing pool if it exists but is broken
                    if DatabaseHelper._pool:
                        try:
                            await DatabaseHelper._pool.close()
                        except:
                            pass
                            
                    DatabaseHelper._pool = await asyncpg.create_pool(
                        db_url,
                        min_size=1,
                        max_size=5, # Reduced max size for safety
                        ssl=ssl_context,
                        command_timeout=30,
                        timeout=30
                    )
                    print("✅ Database pool connected successfully!")
                    last_error = None
                    break
                except Exception as e:
                    last_error = e
                    print(f"⚠️ DB attempt {attempt + 1}/{max_retries} failed: {e}")
                    if attempt < max_retries - 1:
                        await asyncio.sleep(retry_delay)
            
            if last_error:
                print(f"❌ All persistent database connection attempts failed.")
                raise last_error
                
        return DatabaseHelper._pool
    
    @asynccontextmanager
    async def connection(self):
        """Context manager for database connections"""
        pool = await self._get_pool()
        async with pool.acquire() as conn:
            yield conn
    
    # ==========================================
    # Bot Configuration
    # ==========================================
    
    async def get_bot_config(self, org_id: str) -> Optional[Dict]:
        """
        Fetch bot configuration for an organization
        
        Returns:
            Dict with bot_name, personality, model, etc.
        """
        async with self.connection() as conn:
            row = await conn.fetchrow(
                """
                SELECT * FROM bot_configs
                WHERE org_id = $1
                LIMIT 1
                """,
                org_id
            )
            return dict(row) if row else None
            
    async def upsert_bot_config(self, org_id: str, config_data: Dict) -> bool:
        """
        Upsert bot configuration
        """
        async with self.connection() as conn:
            # We construct the query dynamically or just hardcode specific fields
            await conn.execute(
                """
                INSERT INTO bot_configs (
                    org_id, bot_name, welcome_message, business_context,
                    personality, tone_keywords, model, temperature, max_tokens,
                    widget_settings
                )
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
                ON CONFLICT (org_id) DO UPDATE SET
                    bot_name = COALESCE(EXCLUDED.bot_name, bot_configs.bot_name),
                    welcome_message = COALESCE(EXCLUDED.welcome_message, bot_configs.welcome_message),
                    business_context = COALESCE(EXCLUDED.business_context, bot_configs.business_context),
                    personality = COALESCE(EXCLUDED.personality, bot_configs.personality),
                    tone_keywords = COALESCE(EXCLUDED.tone_keywords, bot_configs.tone_keywords),
                    model = COALESCE(EXCLUDED.model, bot_configs.model),
                    temperature = COALESCE(EXCLUDED.temperature, bot_configs.temperature),
                    max_tokens = COALESCE(EXCLUDED.max_tokens, bot_configs.max_tokens),
                    widget_settings = COALESCE(EXCLUDED.widget_settings, bot_configs.widget_settings),
                    updated_at = NOW()
                """,
                org_id,
                config_data.get('bot_name'),
                config_data.get('welcome_message'),
                config_data.get('business_context'),
                config_data.get('personality'),
                config_data.get('tone_keywords'),
                config_data.get('model'),
                config_data.get('temperature'),
                config_data.get('max_tokens'),
                json.dumps(config_data.get('widget_settings', {}))
            )
            return True
    
    async def get_bot_template(self, template_id: str) -> Optional[Dict]:
        """
        Fetch bot template by ID
        
        Returns:
            Dict with base_system_prompt, locked_rules
        """
        if not template_id:
            return None
            
        async with self.connection() as conn:
            row = await conn.fetchrow(
                """
                SELECT * FROM bot_templates
                WHERE id = $1
                LIMIT 1
                """,
                template_id
            )
            return dict(row) if row else None
    
    # ==========================================
    # Knowledge Base / Vectors
    # ==========================================
    
    async def search_knowledge_vectors(
        self,
        embedding: List[float],
        org_id: str,
        limit: int = 3,
        min_similarity: float = 0.5
    ) -> List[Dict]:
        """
        Search knowledge vectors using cosine similarity
        
        Args:
            embedding: Query embedding vector
            org_id: Organization ID to filter by
            limit: Max results to return
            min_similarity: Minimum similarity threshold
        
        Returns:
            List of dicts with content and similarity
        """
        embedding_str = f"[{','.join(map(str, embedding))}]"
        
        async with self.connection() as conn:
            rows = await conn.fetch(
                f"""
                SELECT 
                    content,
                    1 - (embedding <=> $1::vector) as similarity
                FROM knowledge_vectors
                WHERE org_id = $2
                ORDER BY embedding <=> $1::vector
                LIMIT $3
                """,
                embedding_str,
                org_id,
                limit
            )
            
            # Filter by minimum similarity
            results = [
                {"content": row["content"], "similarity": row["similarity"]}
                for row in rows
                if row["similarity"] >= min_similarity
            ]
            return results
    
    async def insert_knowledge_vector(
        self,
        org_id: str,
        doc_id: str,
        content: str,
        embedding: List[float],
        metadata: Optional[Dict] = None
    ) -> bool:
        """Insert a knowledge vector"""
        embedding_str = f"[{','.join(map(str, embedding))}]"
        metadata_json = json.dumps(metadata or {})
        
        async with self.connection() as conn:
            await conn.execute(
                """
                INSERT INTO knowledge_vectors (org_id, doc_id, content, embedding, metadata)
                VALUES ($1, $2, $3, $4::vector, $5)
                """,
                org_id,
                doc_id,
                content,
                embedding_str,
                metadata_json
            )
            return True
    
    # ==========================================
    # Leads
    # ==========================================
    
    async def get_lead(self, session_id: str) -> Optional[Dict]:
        """Get lead by session ID"""
        async with self.connection() as conn:
            row = await conn.fetchrow(
                """
                SELECT * FROM leads
                WHERE session_id = $1
                """,
                session_id
            )
            return dict(row) if row else None

    async def get_lead_by_email(self, email: str) -> Optional[Dict]:
        """Get latest booked lead by email"""
        async with self.connection() as conn:
            row = await conn.fetchrow(
                """
                SELECT * FROM leads
                WHERE email = $1 AND is_booked = true
                ORDER BY booked_at DESC
                LIMIT 1
                """,
                email
            )
            return dict(row) if row else None
    
    async def upsert_lead(self, lead_data: Dict) -> bool:
        """
        Upsert lead data (insert or update on conflict)
        
        Args:
            lead_data: Dict with session_id, name, email, etc.
        """
        session_id = lead_data.get('session_id')
        if not session_id:
            return False
        
        async with self.connection() as conn:
            await conn.execute(
                """
                INSERT INTO leads (
                    session_id, org_id, name, email, phone, company, 
                    score, status, is_booked, booking_url, meeting_url, 
                    booked_at, google_event_id
                )
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
                ON CONFLICT (session_id) DO UPDATE SET
                    name = COALESCE(EXCLUDED.name, leads.name),
                    email = COALESCE(EXCLUDED.email, leads.email),
                    phone = COALESCE(EXCLUDED.phone, leads.phone),
                    company = COALESCE(EXCLUDED.company, leads.company),
                    score = GREATEST(EXCLUDED.score, leads.score),
                    status = EXCLUDED.status,
                    is_booked = leads.is_booked OR EXCLUDED.is_booked,
                    booking_url = COALESCE(EXCLUDED.booking_url, leads.booking_url),
                    meeting_url = COALESCE(EXCLUDED.meeting_url, leads.meeting_url),
                    booked_at = COALESCE(EXCLUDED.booked_at, leads.booked_at),
                    google_event_id = COALESCE(EXCLUDED.google_event_id, leads.google_event_id),
                    last_active_at = NOW()
                """,
                session_id,
                lead_data.get('org_id'),
                lead_data.get('name'),
                lead_data.get('email'),
                lead_data.get('phone'),
                lead_data.get('company'),
                lead_data.get('score', 0),
                lead_data.get('status', 'NEW'),
                lead_data.get('is_booked', False),
                lead_data.get('booking_url'),
                lead_data.get('meeting_url'),
                lead_data.get('booked_at'),
                lead_data.get('google_event_id')
            )
            return True
    
    async def update_lead_booked(
        self,
        session_id: str,
        is_booked: bool,
        booking_url: str,
        meeting_url: str,
        booked_at: datetime,
        google_event_id: str
    ) -> bool:
        """Update lead after successful booking"""
        async with self.connection() as conn:
            result = await conn.execute(
                """
                UPDATE leads SET
                    is_booked = $2,
                    booking_url = $3,
                    meeting_url = $4,
                    booked_at = $5,
                    google_event_id = $6,
                    status = 'BOOKED'
                WHERE session_id = $1
                """,
                session_id,
                is_booked,
                booking_url,
                meeting_url,
                booked_at,
                google_event_id
            )
            print(f"[DatabaseHelper] update_lead_booked result: {result} for {session_id}")
            return True
    
    async def get_conflicting_bookings(
        self,
        start_time: str,
        end_time: str
    ) -> List[Dict]:
        """Check for conflicting bookings in the time range"""
        async with self.connection() as conn:
            rows = await conn.fetch(
                """
                SELECT session_id, name, email, booked_at
                FROM leads
                WHERE is_booked = true
                  AND google_event_id IS NOT NULL
                  AND booked_at >= $1::timestamptz - interval '30 minutes'
                  AND booked_at <= $2::timestamptz + interval '30 minutes'
                """,
                start_time,
                end_time
            )
            return [dict(row) for row in rows]
            
    async def get_abandoned_leads(self, inactivity_minutes: int = 60) -> List[Dict]:
        """Get leads that have abandoned the booking process"""
        async with self.connection() as conn:
            rows = await conn.fetch(
                f"""
                SELECT * FROM leads
                WHERE email IS NOT NULL 
                  AND is_booked = false 
                  AND recovery_email_sent = false
                  AND last_active_at < NOW() - INTERVAL '{inactivity_minutes} minutes'
                  AND last_active_at > NOW() - INTERVAL '24 hours' -- Don't go back too far
                """
            )
            return [dict(row) for row in rows]

    async def mark_recovery_email_sent(self, session_id: str) -> bool:
        """Mark lead as having received recovery email"""
        async with self.connection() as conn:
            await conn.execute(
                """
                UPDATE leads 
                SET recovery_email_sent = true 
                WHERE session_id = $1
                """,
                session_id
            )
            return True

    # ==========================================
    # Human Handoff / Takeover (State Machine)
    # ==========================================
    # Status values: 'none', 'waiting', 'connected', 'ended'

    async def set_handoff_status(self, session_id: str, status: str, thread_id: str = None) -> bool:
        """Set handoff status for a session"""
        async with self.connection() as conn:
            if thread_id:
                await conn.execute(
                    """
                    UPDATE leads 
                    SET handoff_status = $2, 
                        discord_thread_id = $3
                    WHERE session_id = $1
                    """,
                    session_id,
                    status,
                    thread_id
                )
            else:
                await conn.execute(
                    """
                    UPDATE leads 
                    SET handoff_status = $2
                    WHERE session_id = $1
                    """,
                    session_id,
                    status
                )
            return True

    async def get_handoff_status(self, session_id: str) -> str:
        """Get handoff status for a session"""
        async with self.connection() as conn:
            row = await conn.fetchrow(
                """
                SELECT handoff_status FROM leads 
                WHERE session_id = $1
                """,
                session_id
            )
            return row["handoff_status"] if row and row["handoff_status"] else "none"

    async def get_session_by_thread(self, thread_id: str) -> Optional[str]:
        """Find user session ID associated with a Discord Thread"""
        async with self.connection() as conn:
            row = await conn.fetchrow(
                """
                SELECT session_id FROM leads 
                WHERE discord_thread_id = $1
                """,
                thread_id
            )
            return row["session_id"] if row else None


    # ==========================================
    # Analytics
    # ==========================================

    async def get_analytics_summary(self, org_id: str) -> Dict:
        """Get high-level analytics summary for an organization"""
        async with self.connection() as conn:
            row = await conn.fetchrow(
                """
                SELECT 
                    COUNT(*) as total_leads,
                    COUNT(*) FILTER (WHERE is_booked = true) as booked_leads,
                    COUNT(*) FILTER (WHERE recovery_email_sent = true) as recovery_emails_sent,
                    COUNT(*) FILTER (WHERE is_booked = true AND recovery_email_sent = true) as recovered_bookings
                FROM leads
                WHERE org_id = $1
                """,
                org_id
            )
            return dict(row)

    async def get_handoff_metrics(self, org_id: str) -> Dict:
        """Get human handoff performance metrics for an organization"""
        async with self.connection() as conn:
            row = await conn.fetchrow(
                """
                SELECT 
                    COUNT(*) FILTER (WHERE handoff_status != 'none') as total_handoff_requests,
                    COUNT(*) FILTER (WHERE handoff_status = 'connected') as active_connections,
                    COUNT(*) FILTER (WHERE handoff_status = 'ended') as completed_sessions
                FROM leads
                WHERE org_id = $1
                """,
                org_id
            )
            return dict(row)

    async def get_conversion_metrics(self, org_id: str) -> Dict:
        """Get conversion rate metrics for an organization"""
        async with self.connection() as conn:
            row = await conn.fetchrow(
                """
                SELECT 
                    COUNT(*) as total_leads,
                    COUNT(*) FILTER (WHERE is_booked = true) as total_bookings,
                    CASE 
                        WHEN COUNT(*) > 0 THEN (COUNT(*) FILTER (WHERE is_booked = true)::float / COUNT(*)::float) * 100
                        ELSE 0 
                    END as conversion_rate
                FROM leads
                WHERE org_id = $1
                """,
                org_id
            )
            return dict(row)

    async def get_daily_stats(self, org_id: str, days: int = 30) -> List[Dict]:
        """Get daily booking and lead stats for an organization"""
        async with self.connection() as conn:
            rows = await conn.fetch(
                f"""
                WITH date_series AS (
                    SELECT generate_series(
                        CURRENT_DATE - INTERVAL '{days-1} days',
                        CURRENT_DATE,
                        '1 day'::interval
                    )::date as date
                )
                SELECT 
                    ds.date,
                    COUNT(l.session_id) as leads,
                    COUNT(l.session_id) FILTER (WHERE l.is_booked = true) as bookings
                FROM date_series ds
                LEFT JOIN leads l ON ds.date = l.last_active_at::date AND l.org_id = $1
                GROUP BY ds.date
                ORDER BY ds.date ASC
                """,
                org_id
            )
            return [dict(row) for row in rows]

    async def get_top_leads(self, org_id: str, limit: int = 20) -> List[Dict]:
        """Get most recent leads for an organization"""
        async with self.connection() as conn:
            rows = await conn.fetch(
                """
                SELECT name, email, score, status, is_booked, last_active_at
                FROM leads
                WHERE org_id = $1
                ORDER BY last_active_at DESC
                LIMIT $2
                """,
                org_id,
                limit
            )
            return [dict(row) for row in rows]
    
    # ==========================================
    # Chat History
    # ==========================================
    
    async def get_chat_history(self, session_id: str, limit: int = 20) -> List[Dict]:
        """Get chat history for a session"""
        async with self.connection() as conn:
            rows = await conn.fetch(
                """
                SELECT id, message, session_id
                FROM n8n_chat_histories
                WHERE session_id = $1
                ORDER BY id DESC
                LIMIT $2
                """,
                session_id,
                limit
            )
            # Parse messages and return in chronological order
            # n8n stores messages as JSON objects
            result = []
            for row in reversed(rows):
                msg = row.get('message', {})
                if isinstance(msg, dict):
                    role = msg.get('type', 'user')
                    # OpenAI expects 'assistant' instead of 'bot'
                    if role == 'bot':
                        role = 'assistant'
                    
                    result.append({
                        'role': role,
                        'content': msg.get('content', str(msg)),
                        'timestamp': msg.get('timestamp', '') # Return timestamp if present
                    })
                elif isinstance(msg, str):
                    # Try to parse JSON string if possible
                    try:
                        parsed = json.loads(msg)
                        if isinstance(parsed, dict):
                            role = parsed.get('type', 'user')
                            if role == 'bot': role = 'assistant'
                            result.append({
                                'role': role, 
                                'content': parsed.get('content', str(parsed)),
                                'timestamp': parsed.get('timestamp', '') # Return timestamp if present
                            })
                            continue
                    except:
                        pass
                    result.append({'role': 'user', 'content': msg, 'timestamp': ''})
            return result
    
    async def save_chat_message(
        self,
        session_id: str,
        role: str,
        content: str
    ) -> bool:
        """Save a chat message to history"""
        import json
        async with self.connection() as conn:
            # Store as JSON object matching n8n format
            # Added timestamp for frontend display
            message_data = {
                'type': role, 
                'content': content, 
                'timestamp': datetime.now().isoformat()
            }
            message = json.dumps(message_data)
            await conn.execute(
                """
                INSERT INTO n8n_chat_histories (session_id, message)
                VALUES ($1, $2)
                """,
                session_id,
                message
            )
            return True
    
    # ==========================================
    # Booking History
    # ==========================================
    
    async def log_booking_action(
        self,
        session_id: str,
        event_id: str,
        action: str,
        old_datetime: Optional[str] = None,
        new_datetime: Optional[str] = None,
        changed_by: str = "user",
        notes: Optional[str] = None
    ) -> bool:
        """Log a booking action (create, reschedule, cancel)"""
        async with self.connection() as conn:
            await conn.execute(
                """
                INSERT INTO booking_history 
                (session_id, event_id, action, old_datetime, new_datetime, changed_by, notes)
                VALUES ($1, $2, $3, $4, $5, $6, $7)
                """,
                session_id,
                event_id,
                action,
                old_datetime,
                new_datetime,
                changed_by,
                notes
            )
            return True
