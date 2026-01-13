import { create } from 'zustand';
import type { Thread, Message, ViewType, Customization } from '@/types';
import {
  loadThreads,
  saveThreads,
  loadActiveThreadId,
  saveActiveThreadId,
  createEmptyThread,
  createMessage,
  getSessionId,
} from '@/utils/storage';
import { sendMessageToWebhook } from '@/utils/api';
import { playNotificationSound } from '@/utils/audio';

interface ChatState {
  // Widget state
  isOpen: boolean;
  isExpanded: boolean;
  currentView: ViewType;

  // Threads and messages
  threads: Thread[];
  activeThreadId: string | null;
  sessionId: string;

  // UI state
  isTyping: boolean;
  unreadCount: number;
  hasInteracted: boolean;
  showToast: boolean;
  toastMessage: string;

  // Customization
  customization: Customization | null;
  webhookUrl: string;
  // pollingInterval stays global as it's a timer reference
  pollingInterval: number | null;

  // Actions
  setIsOpen: (open: boolean) => void;
  toggleOpen: () => void;
  setIsExpanded: (expanded: boolean) => void;
  toggleExpanded: () => void;
  setCurrentView: (view: ViewType) => void;
  setShowToast: (show: boolean) => void;
  setToastMessage: (message: string) => void;
  markAsInteracted: () => void;

  // Thread actions
  setActiveThread: (threadId: string) => void;
  startNewConversation: () => void;
  submitFeedback: (rating: number) => void;

  // Message actions
  addMessage: (role: 'user' | 'bot', content: string, options?: Partial<Message>) => void;
  sendMessage: (content: string, extras?: {
    type?: Message['type'];
    attachment?: Message['attachment'];
    gif?: Message['gif'];
    audio?: Message['audio'];
    quickReplies?: Message['quickReplies'];
  }) => Promise<void>;

  setCustomization: (customization: Customization | null) => void;
  setWebhookUrl: (url: string) => void;
  setHandoffStatus: (status: 'none' | 'waiting' | 'connected' | 'ended') => void;
  syncHistory: () => Promise<void>;
  startPolling: () => void;
  stopPolling: () => void;

  // Computed
  getActiveThread: () => Thread | null;
  getTotalUnreadCount: () => number;

  // Initialize
  initialize: () => void;
}

export const useChatStore = create<ChatState>((set, get) => ({
  // Initial state
  isOpen: false,
  isExpanded: false,
  currentView: 'home',
  threads: [],
  activeThreadId: null,
  sessionId: '',
  isTyping: false,
  unreadCount: 0,
  hasInteracted: false,
  showToast: false,
  toastMessage: '',
  customization: {
    logo: 'https://res.cloudinary.com/dwjvtgiid/image/upload/v1764419595/Group_48_tm326o.png',
    supportLogo: 'https://res.cloudinary.com/dwjvtgiid/image/upload/v1764419666/logo-white_x64htk.svg',
    avatars: [],
    gradient: {
      color1: '#0B5FFF',
      color2: '#2F4BFF',
      color3: '#6D28D9',
      color4: '#7C3AED',
    },
  },
  webhookUrl: '',
  pollingInterval: null,

  // Widget actions
  setIsOpen: (open) => {
    set({ isOpen: open });
    if (open) {
      // Mark as interacted and dismiss toast when opening
      set({ hasInteracted: true, showToast: false });
      localStorage.setItem('atliso_has_interacted', 'true');

      // Clear unread when opening
      const { threads, activeThreadId } = get();
      if (activeThreadId) {
        const updatedThreads = threads.map(t =>
          t.id === activeThreadId ? { ...t, unread: false, unreadCount: 0 } : t
        );
        set({ threads: updatedThreads });
        saveThreads(updatedThreads);
      }
    }
  },

  toggleOpen: () => {
    const { isOpen, setIsOpen } = get();
    setIsOpen(!isOpen);
  },

  setIsExpanded: (expanded) => set({ isExpanded: expanded }),

  toggleExpanded: () => set((state) => ({ isExpanded: !state.isExpanded })),

  setCurrentView: (view) => {
    // If navigating away from chat view, collapse the expanded view
    if (view !== 'chat') {
      set({ currentView: view, isExpanded: false });
    } else {
      set({ currentView: view });
    }
  },

  setShowToast: (show) => set({ showToast: show }),

  setToastMessage: (message) => set({ toastMessage: message }),

  markAsInteracted: () => {
    set({ hasInteracted: true });
    localStorage.setItem('atliso_has_interacted', 'true');
  },

  // Thread actions
  setActiveThread: (threadId) => {
    const { threads } = get();
    const thread = threads.find(t => t.id === threadId);
    if (thread) {
      // Clear unread for this thread
      const updatedThreads = threads.map(t =>
        t.id === threadId ? { ...t, unread: false, unreadCount: 0 } : t
      );
      set({ activeThreadId: threadId, threads: updatedThreads, currentView: 'chat' });
      saveActiveThreadId(threadId);
      saveThreads(updatedThreads);
    }
  },

  startNewConversation: () => {
    const { threads, customization } = get();

    // Generate NEW session ID for the new chat to ensure fresh backend state
    const newSessionId = getSessionId(true);

    const newThread = createEmptyThread();
    const updatedThreads = [newThread, ...threads];

    // Reset local state
    set({
      sessionId: newSessionId, // Update session ID in store
      threads: updatedThreads,
      activeThreadId: newThread.id,
      currentView: 'chat',
    });
    saveThreads(updatedThreads);
    saveActiveThreadId(newThread.id);

    // Stop mapping handoff status polling
    get().stopPolling();

    // Add welcome message (use customization or default)
    const welcomeMessage = customization?.welcomeMessage || 'Hello! How can I help you today?';
    get().addMessage('bot', welcomeMessage);
  },

  submitFeedback: (rating) => {
    const { threads, activeThreadId, addMessage } = get();
    if (!activeThreadId) return;

    // Update thread with feedback rating
    const updatedThreads = threads.map(thread =>
      thread.id === activeThreadId ? { ...thread, feedbackRating: rating } : thread
    );

    set({ threads: updatedThreads });
    saveThreads(updatedThreads);

    // Add confirmation message
    addMessage('bot', `Thank you for your feedback! You rated this conversation ${rating} star${rating !== 1 ? 's' : ''}.`);

    // Automatically return to home view after a brief delay
    setTimeout(() => {
      set({ currentView: 'home' });
    }, 3000);
  },

  // Message actions
  addMessage: (role, content, options = {}) => {
    const { threads, activeThreadId, isOpen, currentView } = get();
    if (!activeThreadId) return;

    const message = createMessage(role, content, options.type || 'text', options);
    const now = new Date().toISOString();

    set((state) => {
      const { threads, activeThreadId, isOpen, currentView } = state;
      if (!activeThreadId) return state;

      const updatedThreads = threads.map(thread => {
        if (thread.id !== activeThreadId) return thread;

        const isViewing = isOpen && currentView === 'chat';
        const newUnreadCount = role === 'bot' && !isViewing
          ? thread.unreadCount + 1
          : thread.unreadCount;

        return {
          ...thread,
          messages: [...thread.messages, message],
          updatedAt: now,
          unread: newUnreadCount > 0,
          unreadCount: newUnreadCount,
        };
      });

      // Sort threads by updatedAt
      updatedThreads.sort((a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      );

      saveThreads(updatedThreads);
      return { threads: updatedThreads };
    });

    // Play sound and show toast for bot messages when chat is closed
    if (role === 'bot') {
      playNotificationSound();

      // Show toast if chat is closed
      if (!isOpen) {
        const preview = content.length > 60 ? content.substring(0, 60) + '...' : content;
        set({ showToast: true, toastMessage: preview });
      }
    }
  },

  setHandoffStatus: (status) => {
    const { threads, activeThreadId } = get();
    if (!activeThreadId) return;

    const updatedThreads = threads.map(t => {
      if (t.id !== activeThreadId) return t;

      const isEnded = status === 'ended' || status === 'none_archived';
      return {
        ...t,
        handoff_status: status,
        ended: isEnded ? true : t.ended
      };
    });
    set({ threads: updatedThreads });
    saveThreads(updatedThreads);

    if (status === 'waiting' || status === 'connected') {
      get().startPolling();
    } else {
      // Stop polling if no threads are in active handoff
      const anyActive = updatedThreads.some(t =>
        t.handoff_status === 'waiting' || t.handoff_status === 'connected'
      );
      if (!anyActive) {
        get().stopPolling();
      }
    }
  },

  sendMessage: async (content, extras = {}) => {
    const { webhookUrl, sessionId, addMessage, getActiveThread } = get();

    // Add user message
    addMessage('user', content, {
      type: extras.type || 'text',
      attachment: extras.attachment,
      gif: extras.gif,
      audio: extras.audio,
      quickReplies: extras.quickReplies,
    });

    // Show typing indicator (only if AI mode)
    const thread = getActiveThread();
    const isHuman = thread?.is_human_mode || false;

    if (!isHuman) {
      set({ isTyping: true });
    }

    try {
      const thread = getActiveThread();
      const history = thread?.messages || [];

      // Destructure the new robust response object
      const { reply, handoffStatus, endConversation } = await sendMessageToWebhook(
        webhookUrl,
        content,
        sessionId,
        history,
        {
          messageType: extras.type || 'text',
          attachment: extras.attachment,
          gif: extras.gif,
          audio: extras.audio,
        }
      );

      // Sync handoff status immediately if it changed
      if (handoffStatus && thread && thread.handoff_status !== handoffStatus) {
        console.log(`[ChatStore] Instant sync handoff_status: ${handoffStatus}`);
        get().setHandoffStatus(handoffStatus);
      }

      // If reply is empty (silent mode), don't add a bot message
      if (reply && reply.trim()) {
        addMessage('bot', reply);
      }

      // Check for explicit endConversation flag from backend
      if (endConversation) {
        console.log('[ChatStore] Conversation marked as ended by backend');
        get().setHandoffStatus('none');
        // You might want to trigger a 'New Conversation' button here
      }

    } catch (error) {
      console.error('[ChatStore] Send message error:', error);
      addMessage('bot', "I'm sorry, I'm having trouble connecting to the server. Please try again later.");
    } finally {
      set({ isTyping: false });
    }
  },

  syncHistory: async () => {
    const { webhookUrl, sessionId, activeThreadId, threads } = get();
    if (!activeThreadId) {
      console.log('[ChatStore] syncHistory: No active thread, skipping');
      return;
    }
    if (!webhookUrl) {
      console.log('[ChatStore] syncHistory: No webhook URL, skipping');
      return;
    }

    console.log(`[ChatStore] syncHistory running for session ${sessionId}`);

    try {
      const baseUrl = webhookUrl.split('/webhook/')[0];
      console.log(`[ChatStore] syncHistory: Fetching status from ${baseUrl}/api/v1/sessions/${sessionId}/status`);

      // 1. Sync handoff status from backend
      const statusResponse = await fetch(`${baseUrl}/api/v1/sessions/${sessionId}/status`);
      if (statusResponse.ok) {
        const statusData = await statusResponse.json();
        const backendStatus = statusData.handoff_status || 'none';
        const thread = threads.find(t => t.id === activeThreadId);
        console.log(`[ChatStore] syncHistory: Backend status = ${backendStatus}, Local = ${thread?.handoff_status}`);
        if (thread) {
          // If backend says 'none_archived' (ended) and we aren't yet ended, trigger update
          if (backendStatus === 'none_archived' && thread.handoff_status !== 'none_archived' && !thread.ended) {
            console.log(`[ChatStore] Conversation ended remotely. Triggering feedback.`);
            get().setHandoffStatus('none_archived');
          } else if (backendStatus !== 'none_archived' && thread.handoff_status !== backendStatus) {
            console.log(`[ChatStore] Polling: status changed ${thread.handoff_status} -> ${backendStatus}`);
            get().setHandoffStatus(backendStatus);
          }
        }
      } else {
        console.warn(`[ChatStore] syncHistory: Status fetch failed with ${statusResponse.status}`);
      }

      // 2. Sync message history
      const historyUrl = `${baseUrl}/api/v1/sessions/${sessionId}/history`;
      const response = await fetch(historyUrl);
      if (response.ok) {
        const historyData = await response.json();

        // CRITICAL: Fetch LATEST threads from state to avoid overwriting status changes
        const { threads: latestThreads } = get();
        const thread = latestThreads.find(t => t.id === activeThreadId);
        if (!thread) return;

        // Compound key deduplication
        const existingKeys = new Set(thread.messages.map(m => `${m.role}:${m.content.trim()}`));
        const newMessagesData = historyData.filter((m: any) => {
          let role: MessageRole = m.role === 'assistant' ? 'bot' : (m.role === 'human' ? 'human' : 'user');
          // Filter out system tags like [CONVERSATION_ENDED]
          if (m.content?.includes('[CONVERSATION_ENDED]')) return false;
          return !existingKeys.has(`${role}:${m.content.trim()}`);
        });

        if (newMessagesData.length > 0) {
          console.log(`[ChatStore] Syncing ${newMessagesData.length} new messages.`);

          const newMessages = newMessagesData.map((m: any) => {
            const role: MessageRole = m.role === 'assistant' ? 'bot' : (m.role === 'human' ? 'human' : 'user');
            return createMessage(role, m.content);
          });

          // CRITICAL: Use latestThreads here
          const updatedThreads = latestThreads.map(t =>
            t.id === activeThreadId ? {
              ...t,
              messages: [...t.messages, ...newMessages],
              updatedAt: new Date().toISOString(),
              unread: get().isOpen ? false : true,
              unreadCount: get().isOpen ? 0 : t.unreadCount + newMessages.length
            } : t
          );

          set({ threads: updatedThreads });
          saveThreads(updatedThreads);

          if (!get().isOpen) {
            const lastMsg = newMessages[newMessages.length - 1];
            set({ showToast: true, toastMessage: lastMsg.content });
          }
        }
      }
    } catch (e) {
      console.warn('[ChatStore] Failed to sync history:', e);
    }
  },

  startPolling: () => {
    const { pollingInterval } = get();
    if (pollingInterval) return;

    console.log('[ChatStore] Starting human mode polling...');
    const interval = window.setInterval(() => {
      get().syncHistory();
    }, 5000) as unknown as number;

    set({ pollingInterval: interval });
  },

  stopPolling: () => {
    const { pollingInterval } = get();
    if (pollingInterval) {
      clearInterval(pollingInterval);
      set({ pollingInterval: null });
    }
  },

  // Customization
  setCustomization: (customization) => set({ customization }),
  setWebhookUrl: (url) => set({ webhookUrl: url }),

  // Computed
  getActiveThread: () => {
    const { threads, activeThreadId } = get();
    return threads.find(t => t.id === activeThreadId) || null;
  },

  getTotalUnreadCount: () => {
    const { threads } = get();
    return threads.reduce((sum, t) => sum + t.unreadCount, 0);
  },

  // Initialize
  initialize: () => {
    const sessionId = getSessionId();
    let threads = loadThreads();

    // Check if user has interacted before
    const hasInteracted = localStorage.getItem('atliso_has_interacted') === 'true';

    // Create initial thread if none exist
    if (threads.length === 0) {
      const newThread = createEmptyThread();
      threads = [newThread];
      saveThreads(threads);
    }

    // Add welcome message to the initial thread if it's empty
    const initialThread = threads[0];
    if (initialThread && initialThread.messages.length === 0) {
      const { customization } = get();
      const welcomeText = customization?.welcomeMessage || 'Hello! How can I help you today?';
      const welcomeMessage = createMessage('bot', welcomeText);
      initialThread.messages = [welcomeMessage];
      initialThread.updatedAt = welcomeMessage.timestamp;
      saveThreads(threads);
    }

    // Get active thread ID
    let activeThreadId = loadActiveThreadId();
    if (!activeThreadId || !threads.some(t => t.id === activeThreadId)) {
      activeThreadId = threads[0].id;
      saveActiveThreadId(activeThreadId);
    }

    set({
      sessionId,
      threads,
      activeThreadId,
      hasInteracted,
    });

    // Check if session is in Human Mode on initialization
    const verifyStatus = async () => {
      const { webhookUrl, sessionId } = get();
      if (!webhookUrl || !sessionId) return;

      try {
        const baseUrl = webhookUrl.split('/webhook/')[0];
        const statusResponse = await fetch(`${baseUrl}/api/v1/sessions/${sessionId}/status`);
        if (statusResponse.ok) {
          const status = await statusResponse.json();
          if (status.is_human_mode) {
            console.log(`[ChatStore] Session ${sessionId} is in Human Mode. Resuming polling.`);
            // Update the specific thread or ensure global polling starts if any thread is human
            const { threads, activeThreadId } = get();
            if (activeThreadId) {
              const updatedThreads = threads.map(t =>
                t.id === activeThreadId ? { ...t, is_human_mode: true } : t
              );
              set({ threads: updatedThreads });
              get().startPolling();
            }
          }
        }
      } catch (e) {
        console.warn('[ChatStore] Failed to check session status:', e);
      }
    };

    verifyStatus();

    // Show welcome toast if user hasn't interacted
    if (!hasInteracted) {
      setTimeout(() => {
        set({
          showToast: true,
          toastMessage: "👋 Hey there! Need help? We're here for you."
        });
      }, 2000); // Show after 2 seconds of page load
    }
  },
}));

