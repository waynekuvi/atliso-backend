import type { Thread, Message } from '@/types';

const THREADS_KEY = 'atlisoChatThreads';
const ACTIVE_THREAD_KEY = 'atlisoChatActiveThread';
const SESSION_KEY = 'atlisoChatSessionId';

/**
 * Generate a unique ID
 */
export function generateId(prefix = 'id'): string {
  try {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return `${prefix}-${crypto.randomUUID()}`;
    }
  } catch {
    // Fallback
  }
  return `${prefix}-${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
}

/**
 * Get or create session ID
 */
export function getSessionId(refresh = false): string {
  try {
    if (!refresh) {
      const existing = localStorage.getItem(SESSION_KEY);
      if (existing) return existing;
    }

    const newId = generateId('session');
    localStorage.setItem(SESSION_KEY, newId);
    return newId;
  } catch {
    return generateId('session');
  }
}

/**
 * Load threads from localStorage
 */
export function loadThreads(): Thread[] {
  try {
    const raw = localStorage.getItem(THREADS_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed.map((thread: Partial<Thread>) => ({
      id: thread.id || generateId('thread'),
      createdAt: thread.createdAt || new Date().toISOString(),
      updatedAt: thread.updatedAt || new Date().toISOString(),
      unread: thread.unread || false,
      unreadCount: thread.unreadCount || 0,
      ended: thread.ended || false,
      feedbackRating: thread.feedbackRating,
      handoff_status: thread.handoff_status || 'none',
      messages: Array.isArray(thread.messages) ? thread.messages : [],
    }));
  } catch (err) {
    console.warn('[AtlisoChatWidget] Failed to load threads:', err);
    return [];
  }
}

/**
 * Save threads to localStorage
 */
export function saveThreads(threads: Thread[]): void {
  try {
    localStorage.setItem(THREADS_KEY, JSON.stringify(threads));
  } catch (err) {
    console.warn('[AtlisoChatWidget] Failed to save threads:', err);
  }
}

/**
 * Load active thread ID
 */
export function loadActiveThreadId(): string | null {
  try {
    return localStorage.getItem(ACTIVE_THREAD_KEY);
  } catch {
    return null;
  }
}

/**
 * Save active thread ID
 */
export function saveActiveThreadId(id: string | null): void {
  try {
    if (id) {
      localStorage.setItem(ACTIVE_THREAD_KEY, id);
    } else {
      localStorage.removeItem(ACTIVE_THREAD_KEY);
    }
  } catch (err) {
    console.warn('[AtlisoChatWidget] Failed to save active thread ID:', err);
  }
}

/**
 * Create an empty thread
 */
export function createEmptyThread(): Thread {
  const now = new Date().toISOString();
  return {
    id: generateId('thread'),
    createdAt: now,
    updatedAt: now,
    unread: false,
    unreadCount: 0,
    ended: false,
    handoff_status: 'none',
    messages: [],
  };
}

/**
 * Create a message
 */
export function createMessage(
  role: 'user' | 'bot',
  content: string,
  type: 'text' | 'attachment' | 'gif' | 'voice' = 'text',
  extras?: Partial<Message>
): Message {
  return {
    id: generateId('msg'),
    role,
    content,
    timestamp: new Date().toISOString(),
    type,
    ...extras,
  };
}

