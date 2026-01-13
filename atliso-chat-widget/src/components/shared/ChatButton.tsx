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
  const launcherText = customization?.launcherText;
  const hasText = launcherText && !isOpen;

  return (
    <button
      onClick={toggleOpen}
      className={cn(
        'rounded-full border-none cursor-pointer',
        'flex items-center justify-center gap-2',
        'transition-all duration-300 ease-out',
        'hover:scale-105 hover:shadow-xl active:scale-95',
        'focus:outline-none focus:ring-4 focus:ring-black/20',
        // keep button anchored within host based on position
        'shadow-lg absolute z-50',
        getButtonPosition(),
        hasText ? 'h-14 px-5' : 'w-14 h-14'
      )}
      style={{ backgroundColor: buttonColor }}
      aria-label={isOpen ? 'Close chat' : 'Open chat'}
    >
      {isOpen ? (
        <span
          className="material-symbols-outlined text-white"
          style={{ fontSize: '28px', lineHeight: 1 }}
        >
          expand_more
        </span>
      ) : (
        <>
          <img
            src="https://res.cloudinary.com/dwjvtgiid/image/upload/v1766321945/image_42_s2rakp.png"
            alt="Chat"
            style={{ width: '32px', height: '32px' }}
          />
          {hasText && (
            <span className="text-white font-semibold text-sm whitespace-nowrap">
              {launcherText}
            </span>
          )}
        </>
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
