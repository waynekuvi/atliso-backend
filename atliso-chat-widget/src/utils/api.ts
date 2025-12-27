import type { Customization, CustomizationResponse, Message } from '@/types';

const DEFAULT_CUSTOMIZATION: Customization = {
  gradient: {
    color1: '#0ea5e9',
    color2: '#14b8a6',
    color3: '#0d9488',
    color4: '#a7f3d0',
  },
  avatars: [],
  logo: null,
  supportLogo: null,
  webhookUrl: 'https://atliso-backend.onrender.com/webhook/chatbot',
};

/**
 * Fetch widget configuration from new API endpoint
 */
export async function fetchWidgetConfig(
  organizationId: string,
  apiBaseUrl: string
): Promise<Customization | null> {
  try {
    const baseUrl = apiBaseUrl.replace(/\/$/, '');
    const url = `${baseUrl}/api/widget/config/${organizationId}`;

    console.log('[AtlisoChatWidget] Fetching widget config from:', url);

    // Only add ngrok header if using ngrok URL
    const headers: Record<string, string> = {
      'Accept': 'application/json',
    };
    if (url.includes('ngrok')) {
      headers['ngrok-skip-browser-warning'] = 'true';
    }

    const response = await fetch(url, {
      method: 'GET',
      headers,
      mode: 'cors',
    });

    if (!response.ok) {
      if (response.status === 404) {
        console.warn(`[AtlisoChatWidget] Organization not found: ${organizationId}`);
      } else {
        console.warn(`[AtlisoChatWidget] API returned ${response.status}`);
      }
      return null;
    }

    const data = await response.json();
    console.log('[AtlisoChatWidget] Received widget config:', data);

    // Import and use the mapper
    const { mapConfigToCustomization } = await import('./configMapper');
    return mapConfigToCustomization(data, DEFAULT_CUSTOMIZATION.webhookUrl);
  } catch (error) {
    console.warn('[AtlisoChatWidget] Failed to fetch widget config:', error);
    return null;
  }
}

/**
 * Fetch customization from API (legacy - deprecated)
 * @deprecated Use fetchWidgetConfig instead
 */
export async function fetchCustomization(
  organizationId: string,
  apiBaseUrl: string
): Promise<Customization | null> {
  // Fallback to old endpoint for backward compatibility
  try {
    const baseUrl = apiBaseUrl.replace(/\/$/, '');
    const url = `${baseUrl}/api/chatbot/customization/${organizationId}`;

    console.log('[AtlisoChatWidget] Fetching customization from (legacy):', url);

    // Only add ngrok header if using ngrok URL
    const headers: Record<string, string> = {
      'Accept': 'application/json',
    };
    if (url.includes('ngrok')) {
      headers['ngrok-skip-browser-warning'] = 'true';
    }

    const response = await fetch(url, {
      method: 'GET',
      headers,
      mode: 'cors',
    });

    if (!response.ok) {
      if (response.status === 404) {
        console.warn(`[AtlisoChatWidget] Organization not found: ${organizationId}`);
      } else {
        console.warn(`[AtlisoChatWidget] API returned ${response.status}`);
      }
      return null;
    }

    const data: CustomizationResponse = await response.json();
    console.log('[AtlisoChatWidget] Received customization:', data);

    return {
      ...DEFAULT_CUSTOMIZATION,
      ...data,
      gradient: {
        ...DEFAULT_CUSTOMIZATION.gradient!,
        ...(data.gradient || {}),
      },
    };
  } catch (error) {
    console.warn('[AtlisoChatWidget] Failed to fetch customization:', error);
    return null;
  }
}

/**
 * Send message to webhook
 */
export async function sendMessageToWebhook(
  webhookUrl: string,
  message: string,
  sessionId: string,
  conversationHistory: Message[],
  extras?: {
    messageType?: string;
    attachment?: Message['attachment'];
    gif?: Message['gif'];
    audio?: Message['audio'];
  }
): Promise<string> {
  const payload = {
    message,
    messageType: extras?.messageType || 'text',
    sessionId,
    sessionKey: sessionId,
    conversationHistory,
    attachment: extras?.attachment,
    gif: extras?.gif,
    audio: extras?.audio,
    timestamp: new Date().toISOString(),
  };

  try {
    // Only add ngrok header if using ngrok URL
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (webhookUrl.includes('ngrok')) {
      headers['ngrok-skip-browser-warning'] = 'true';
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    });

    const contentType = response.headers.get('content-type') || '';
    const text = await response.text();

    let data: unknown = text;
    if (contentType.includes('application/json') && text.trim().length) {
      try {
        data = JSON.parse(text);
      } catch {
        console.warn('[AtlisoChatWidget] Failed to parse JSON response');
      }
    }

    if (!response.ok) {
      throw new Error(`Unexpected status ${response.status}`);
    }

    // Check for explicit silent output from backend (Human Mode)
    if (data && typeof data === 'object' && 'output' in (data as any) && (data as any).output === "") {
      return "";
    }

    // Extract reply from response
    const reply = extractReply(data);
    // Allow empty string for silent mode (human handoff)
    return reply !== null ? reply : "I received your message and will get back to you shortly!";
  } catch (error) {
    console.error('[AtlisoChatWidget] Error sending message:', error);
    throw error;
  }
}

/**
 * Extract reply text from various response formats
 */
function extractReply(data: unknown, visited = new Set<unknown>()): string | null {
  if (data == null) return null;
  if (typeof data === 'string') {
    const trimmed = data.trim();
    return trimmed.length ? trimmed : null;
  }
  if (typeof data === 'number') return data.toString();
  if (typeof data !== 'object' || visited.has(data)) return null;

  visited.add(data);
  const obj = data as Record<string, unknown>;

  const keys = [
    'reply', 'response', 'result', 'output', 'text', 'answer',
    'agentOutput', 'agent_output', 'aiReply', 'ai_reply',
    'message', 'content', 'body',
  ];

  for (const key of keys) {
    if (key in obj) {
      const result = extractReply(obj[key], visited);
      if (result) return result;
    }
  }

  if (Array.isArray(data)) {
    for (const item of data) {
      const result = extractReply(item, visited);
      if (result) return result;
    }
  } else {
    for (const value of Object.values(obj)) {
      const result = extractReply(value, visited);
      if (result) return result;
    }
  }

  return null;
}

export { DEFAULT_CUSTOMIZATION };

