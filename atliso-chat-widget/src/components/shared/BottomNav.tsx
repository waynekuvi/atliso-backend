import { useChatStore } from '@/stores/chatStore';
import { cn } from '@/utils/cn';
import type { ViewType } from '@/types';
import { Home, MessagesSquare, Sparkles, LifeBuoy } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const navItems: { view: ViewType; icon: LucideIcon; label: string }[] = [
  { view: 'home', icon: Home, label: 'Home' },
  { view: 'messages', icon: MessagesSquare, label: 'Messages' },
  { view: 'news', icon: Sparkles, label: 'News' },
  { view: 'help', icon: LifeBuoy, label: 'Help' },
];

export function BottomNav() {
  const { currentView, setCurrentView, getTotalUnreadCount } = useChatStore();
  const unreadCount = getTotalUnreadCount();

  return (
    <nav className="min-h-[90px] flex items-center justify-around bg-white border-t border-gray-100 pt-4 pb-5 px-6 shrink-0 rounded-b-3xl">
      {navItems.map(({ view, icon: Icon, label }) => {
        const isActive = currentView === view;
        return (
          <button
            key={view}
            onClick={() => setCurrentView(view)}
            className={cn(
              'flex flex-col items-center gap-1.5 px-6 py-1 bg-transparent border-none cursor-pointer transition-all duration-200',
              'focus:outline-none active:scale-95',
              isActive ? 'text-black-600' : 'text-gray-400 hover:text-gray-600'
            )}
          >
            <div className="relative">
              <Icon 
                size={24} 
                strokeWidth={1.5}
                className={cn(isActive ? 'text-black-600' : 'text-gray-400')} 
              />
              {view === 'messages' && unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full min-w-[16px] h-4 flex items-center justify-center px-0.5 border-2 border-white shadow-sm">
                  {unreadCount > 99 ? '99+' : unreadCount}
                </span>
              )}
            </div>
            <span style={{ marginTop: '-8px' }} className={cn("text-[11px] font-regular", isActive ? "text-black-600" : "text-gray-500")}>
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}