import { useChatStore } from '@/stores/chatStore';
import { cn } from '@/utils/cn';

export function ChatButton() {
  const { isOpen, toggleOpen, getTotalUnreadCount, customization } = useChatStore();
  const unreadCount = getTotalUnreadCount();

  // Get position-based button placement
  const position = customization?.position || 'bottom-right';
  const getButtonPosition = () => {
    switch (position) {
      case 'bottom-left':
        return 'bottom-5 left-5';
      case 'top-right':
        return 'top-5 right-5';
      case 'top-left':
        return 'top-5 left-5';
      case 'bottom-right':
      default:
        return 'bottom-5 right-5';
    }
  };

  // Use primary color if available, otherwise default to black
  const buttonColor = customization?.primaryColor || '#000000';

  return (
    <button
      onClick={toggleOpen}
      className={cn(
        'w-14 h-14 rounded-full border-none cursor-pointer',
        'flex items-center justify-center',
        'transition-all duration-300 ease-out',
        'hover:scale-105 hover:shadow-xl active:scale-95',
        'focus:outline-none focus:ring-4 focus:ring-black/20',
        // keep button anchored within host based on position
        'shadow-lg absolute z-50',
        getButtonPosition()
      )}
      style={{ backgroundColor: buttonColor }}
      aria-label={isOpen ? 'Close chat' : 'Open chat'}
    >
      {isOpen ? (
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      ) : (
        <img
          src="https://res.cloudinary.com/dwjvtgiid/image/upload/v1766321945/image_42_s2rakp.png"
          alt="Chat"
          style={{ width: '42px', height: '42px' }}
        />
      )}

      {/* Unread Badge */}
      {!isOpen && unreadCount > 0 && (
        <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-xs font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1 border-2 border-white shadow-md">
          {unreadCount > 99 ? '99+' : unreadCount}
        </span>
      )}
    </button>
  );
}
