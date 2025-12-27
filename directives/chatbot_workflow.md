# Chatbot Workflow Directive

## Goal
Handle incoming chat messages from the Atliso Chat Widget and return appropriate AI-generated responses.

## Inputs

The widget sends a POST request with this payload:

```typescript
{
  message: string;              // User's text message
  messageType: 'text' | 'audio' | 'gif' | 'attachment';
  sessionId: string;            // Unique session identifier
  sessionKey: string;           // Same as sessionId
  conversationHistory: Array<{
    id: string;
    role: 'user' | 'bot';
    content: string;
    timestamp: string;
    type: 'text' | 'audio' | 'gif' | 'attachment';
  }>;
  attachment?: object;
  gif?: object;
  audio?: object;
  timestamp: string;            // ISO timestamp
}
```

## Outputs

Return JSON with these fields:

```typescript
{
  reply: string;                // Required: The bot's response text
  endConversation?: boolean;    // Optional: Triggers feedback prompt
}
```

Alternative response keys (widget extracts in this order):
`reply`, `response`, `result`, `output`, `text`, `answer`, `agentOutput`, `agent_output`, `aiReply`, `ai_reply`, `message`, `content`, `body`

## Execution Scripts

| Script | Purpose |
|--------|---------|
| `execution/workflow_router.py` | Main entry point, routes to appropriate handler |
| `execution/ai_responder.py` | Generates AI responses using LLM |
| `execution/booking_handler.py` | Handles appointment booking intents |
| `execution/lead_qualifier.py` | Scores and qualifies leads |

## Edge Cases

1. **Empty message** — Return prompt asking user to type something
2. **Session not found** — Create new session, return welcome message
3. **AI API errors** — Return fallback message, log error
4. **Booking conflicts** — Return alternative time suggestions
5. **Rate limiting** — Queue message, return "processing" status

## Environment Variables

```
OPENAI_API_KEY=           # For AI responses
SUPABASE_URL=             # Database connection
SUPABASE_KEY=             # Database auth
GOOGLE_CALENDAR_ID=       # For booking integration
GOOGLE_SERVICE_ACCOUNT=   # Calendar auth (JSON)
SMTP_HOST=                # Email notifications
SMTP_USER=
SMTP_PASSWORD=
```

## Integration Point

**Current:** Widget calls N8N at `POST /webhook/chatbot`  
**Target:** Widget calls API at `POST /api/v1/chat` → routes to execution scripts
