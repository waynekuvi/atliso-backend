import type { Message } from '@/types';
import { MessageItem } from './MessageItem';

interface MessageListProps {
  messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
  if (messages.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center px-8 pb-12">
      </div>
    );
  }

  return (
    <div className="flex flex-col pb-2">
      {/* Header Label */}
      <div className="flex justify-center py-4">
        <span style={{ marginBottom: '8px' }} className="text-[11px] font-regular text-gray-500 text-center px-4">
          Ask us anything, or share your feedback.
        </span>
      </div>

      {/* Date Separator */}
      <div className="flex justify-center py-6">
        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide bg-gray-50 px-2 rounded">
          Today
        </span>
      </div>

      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </div>
  );
}
