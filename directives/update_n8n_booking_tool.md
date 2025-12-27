# Update N8N Book Appointment Tool

## Goal
Replace the N8N sub-workflow call with an HTTP request to the new TypeScript API.

## Option 1: Import Updated Workflow JSON

1. **Export** the updated `main-chatbot-workflow-WITH-RESCHEDULE.json` from Rovo Dev's workspace (client portal repo)
2. **Open N8N** → Workflows → Import from File
3. **Set environment variable** in N8N:
   ```
   API_BASE_URL=https://your-domain.com
   ```

## Option 2: Manual Update in N8N UI

1. Open the main chatbot workflow in N8N
2. **Delete** the "Book Appointment" node (the `toolWorkflow` type)
3. **Add** new node: "HTTP Request Tool"
4. Configure:

| Setting | Value |
|---------|-------|
| Method | `POST` |
| URL | `{{ $env.API_BASE_URL }}/api/v1/workflows/booking` |
| Body Content Type | `JSON` |

5. **Request Body Schema:**

```json
{
  "name": "string (required) - Customer's full name",
  "email": "string (required) - Customer's email address",
  "preferredDateTime": "string (required) - ISO 8601 datetime",
  "timezone": "string (optional) - Default: UTC",
  "phone": "string (optional) - Customer's phone number"
}
```

6. **Tool Description** (for AI):
```
Book an appointment for the customer. Extract name, email, and preferred date/time from the conversation. The system will check calendar availability and send a confirmation email.
```

## Environment Variables

Add to N8N Settings → Environment:
```
API_BASE_URL=https://your-production-domain.com
```

## Verification

After updating, test by:
1. Send a chat message: "I'd like to book a meeting tomorrow at 2pm"
2. Verify the AI extracts the details and calls the HTTP endpoint
3. Check that booking appears in Google Calendar
4. Confirm email is sent to customer
