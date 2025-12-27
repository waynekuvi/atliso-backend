import { useEffect, useState } from 'react';
import { X, Bot } from 'lucide-react';
import { cn } from '@/utils/cn';

interface ChatToastProps {
  message: string;
  isVisible: boolean;
  onDismiss: () => void;
  onOpen?: () => void;
}

export function ChatToast({ message, isVisible, onDismiss, onOpen }: ChatToastProps) {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      setIsAnimatingOut(true);
      const timer = setTimeout(() => setIsAnimatingOut(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!isVisible && !isAnimatingOut) return null;

  // Truncate message to reasonable length
  const truncatedMessage = message.length > 80 ? message.substring(0, 80) + '...' : message;

  return (
    <div
      className={cn(
        'absolute bottom-20 right-0 transition-all duration-300 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
      )}
      style={{ right: '80px' }} // Offset to the left of the chat button
    >
      <div className="bg-white rounded-[20px] shadow-2xl border border-gray-100 p-5 pr-10 w-[320px] relative animate-slide-up">
        {/* Close button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDismiss();
          }}
          className="absolute top-4 right-4 p-1.5 hover:bg-gray-100 rounded-full transition-all duration-200 active:scale-90 focus:outline-none"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4 text-gray-400" />
        </button>

        {/* Content - clickable to open chat */}
        <button
          onClick={onOpen}
          className="text-left w-full group pr-2"
        >
          <div className="flex items-start gap-3">
            {/* Icon */}
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-200">
              <Bot className="w-5 h-5 text-white" />
            </div>
            
            {/* Text content */}
            <div className="flex-1 min-w-0">
              <p className="text-[14px] text-gray-800 leading-relaxed group-hover:text-gray-900 transition-colors font-medium mb-1.5">
                {truncatedMessage}
              </p>
              <p className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors font-medium flex items-center gap-1">
                Click to reply
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
