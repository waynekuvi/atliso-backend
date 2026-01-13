import asyncio
from dotenv import load_dotenv
load_dotenv()
from execution.db_helper import DatabaseHelper

async def main():
    db = DatabaseHelper()
    try:
        pool = await db._get_pool()
        async with pool.acquire() as conn:
            # Check if table exists
            exists = await conn.fetchval("""
                SELECT EXISTS (
                    SELECT FROM information_schema.tables 
                    WHERE table_schema = 'public' 
                    AND table_name = 'bot_configs'
                );
            """)
            print(f"Table 'bot_configs' exists: {exists}")
            
            if exists:
                columns = await conn.fetch("""
                    SELECT column_name, data_type 
                    FROM information_schema.columns 
                    WHERE table_name = 'bot_configs'
                """)
                print("Columns:")
                for col in columns:
                    print(f"- {col['column_name']}: {col['data_type']}")
            else:
                print("Creating table bot_configs...")
                await conn.execute("""
                    CREATE TABLE IF NOT EXISTS bot_configs (
                        org_id TEXT PRIMARY KEY,
                        bot_name TEXT,
                        welcome_message TEXT,
                        model TEXT,
                        temperature FLOAT DEFAULT 0.7,
                        max_tokens INTEGER DEFAULT 500,
                        system_prompt TEXT,
                        branding_json JSONB DEFAULT '{}',
                        updated_at TIMESTAMPTZ DEFAULT NOW()
                    );
                """)
                print("Table created.")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    asyncio.run(main())
