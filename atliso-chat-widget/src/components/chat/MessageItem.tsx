import type { Message } from '@/types';
import { cn } from '@/utils/cn';
import { formatRelativeTime } from '@/utils/time';
import { formatFileSize } from '@/utils/audio';
import { Download, FileText, Mic } from 'lucide-react';

interface MessageItemProps {
  message: Message;
}

export function MessageItem({ message }: MessageItemProps) {
  const isUser = message.role === 'user';

  return (
    <div
      className={cn(
        'flex gap-3 animate-fade-in mb-5',
        isUser ? 'flex-row-reverse' : 'flex-row'
      )}
    >
      {/* Content */}
      <div className={cn('max-w-[85%] flex flex-col', isUser ? 'items-end' : 'items-start')}>
        {/* Bubble */}
        <div
          style={{
            fontSize: '14px',
            padding: '0.5rem 1rem',
            margin: isUser ? '0 0.5rem 0 auto' : '0 auto 0 0.5rem',
            width: 'fit-content'
          }}
          className={cn(
            'px-4 py-3 text-[15px] leading-relaxed transition-all duration-200 overflow-hidden overflow-x-auto max-h-[500px] overflow-y-auto custom-scrollbar',
            isUser
              ? 'bg-black text-white rounded-[20px] shadow-md hover:shadow-lg'
              : 'bg-gray-50 text-gray-800 border border-gray-200 rounded-[20px] shadow-sm hover:shadow-md hover:border-gray-300'
          )}
        >
          {/* Attachment */}
          {message.type === 'attachment' && message.attachment && (
            <div className="mb-2">
              {message.attachment.type === 'image' ? (
                <img
                  src={message.attachment.dataUrl}
                  alt={message.attachment.name}
                  className="rounded-xl max-w-full mb-2 cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => {
                    // Open image in new tab
                    const link = document.createElement('a');
                    link.href = message.attachment!.dataUrl;
                    link.target = '_blank';
                    link.click();
                  }}
                />
              ) : (
                <div className="flex items-center gap-3 bg-white/10 rounded-lg p-2">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-current" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{message.attachment.name}</p>
                    <p className="text-xs opacity-70">{formatFileSize(message.attachment.size)}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* GIF */}
          {message.type === 'gif' && message.gif && (
            <img
              src={message.gif.url}
              alt={message.gif.title || 'GIF'}
              className="rounded-xl max-w-full mb-2"
            />
          )}

          {/* Voice */}
          {message.type === 'voice' && message.audio && (
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-current rounded-full flex items-center justify-center opacity-20">
                <Mic className="w-4 h-4" />
              </div>
              <audio controls className="max-w-[200px] h-8" src={message.audio.dataUrl} />
            </div>
          )}

          {/* Text content */}
          {message.content && (
            <p className="whitespace-pre-wrap break-words overflow-wrap-anywhere">{message.content}</p>
          )}

          {/* Download link for attachments */}
          {message.type === 'attachment' && message.attachment?.dataUrl && (
            <a
              href={message.attachment.dataUrl}
              download={message.attachment.name}
              className={cn(
                'mt-2 inline-flex items-center gap-2 text-xs font-medium opacity-90 hover:opacity-100 cursor-pointer'
              )}
            >
              <Download className="w-3 h-3" />
              Download
            </a>
          )}
        </div>

        {/* Timestamp */}
        <p
          style={{
            marginLeft: '12px',
            marginRight: '12px',
            marginBottom: '8px',
            maxWidth: 'calc(100% - 24px)'
          }}
          className={cn(
            'text-[11px] text-gray-400 mt-1 px-1',
            isUser ? 'text-right' : 'text-left'
          )}
        >
          {!isUser && (message.role === 'human' ? 'Human Assistant • ' : 'Support AI Assistant • ')} {formatRelativeTime(message.timestamp)}
        </p>
      </div>
    </div>
  );
}
