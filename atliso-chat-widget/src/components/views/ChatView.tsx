import { useEffect, useRef, useMemo } from 'react';
import { useChatStore } from '@/stores/chatStore';
import { ChatHeader } from '../chat/ChatHeader';
import { MessageList } from '../chat/MessageList';
import { InputArea } from '../chat/InputArea';
import { TypingIndicator } from '../chat/TypingIndicator';
import { FeedbackRating } from '../chat/FeedbackRating';

export function ChatView() {
  const { getActiveThread, isTyping, submitFeedback } = useChatStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const thread = getActiveThread();
  const messages = useMemo(() => thread?.messages || [], [thread?.messages]);

  // Get handoff status from state
  const handoffStatus = thread?.handoff_status || 'none';
  const isConversationEnded = thread?.ended || handoffStatus === 'ended';
  const feedbackRating = thread?.feedbackRating;

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleRatingChange = (rating: number) => {
    submitFeedback(rating);
  };

  // Determine status indicator text and color
  const getStatusIndicator = () => {
    switch (handoffStatus) {
      case 'waiting':
        return { color: 'yellow', text: 'Human Agent is joining...' };
      case 'connected':
        return { color: 'green', text: 'Live Agent Connected' };
      default:
        return null;
    }
  };

  const statusIndicator = getStatusIndicator();

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header - Fixed at top */}
      <div className="shrink-0 flex-none">
        <ChatHeader />
      </div>

      {/* Messages - scrollable area that takes remaining space */}
      <div className="flex-1 overflow-y-auto px-5 py-5 atliso-scrollbar min-h-0">
        <MessageList messages={messages} />
        {isTyping && handoffStatus === 'none' && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Conversation Ended Indicator */}
      {isConversationEnded && (
        <div className="px-5 py-3 bg-gray-100 border-t border-gray-200 shrink-0 flex-none">
          <div className="text-center">
            <p className="text-sm text-gray-600 font-medium">
              Conversation ended
            </p>

            {/* Feedback Rating */}
            <div className="mt-4">
              <FeedbackRating
                rating={feedbackRating}
                onRatingChange={handleRatingChange}
                disabled={!!feedbackRating}
              />
            </div>

            <button
              onClick={() => useChatStore.getState().startNewConversation()}
              className="mt-6 w-full py-3 bg-black text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              Start new conversation
            </button>

            <p className="text-[11px] text-gray-400 mt-3">
              Your feedback helps us improve
            </p>
          </div>
        </div>
      )}

      {/* Input - fixed at bottom, doesn't shrink */}
      {!isConversationEnded && (
        <div className="shrink-0 flex-none">
          {/* Handoff Status Indicator (Bottom) */}
          {statusIndicator && (
            <div className="px-5 py-2 flex items-center gap-2 animate-in fade-in slide-in-from-bottom duration-500">
              <div className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-${statusIndicator.color}-400 opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 bg-${statusIndicator.color}-500`}></span>
              </div>
              <p className={`text-[11px] text-${statusIndicator.color}-700 font-semibold tracking-tight uppercase`}>
                {statusIndicator.text}
              </p>
            </div>
          )}
          <InputArea />
        </div>
      )}
    </div>
  );
}

