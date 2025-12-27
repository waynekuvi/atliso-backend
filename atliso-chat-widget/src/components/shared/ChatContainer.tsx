import { useChatStore } from '@/stores/chatStore';
import { cn } from '@/utils/cn';
import { HomeView } from '../views/HomeView';
import { HelpView } from '../views/HelpView';
import { ChatView } from '../views/ChatView';
import { MessagesView } from '../views/MessagesView';
import { NewsView } from '../views/NewsView';
import { BottomNav } from './BottomNav';

interface ChatContainerProps {
  isInline?: boolean;
}

export function ChatContainer({ isInline = false }: ChatContainerProps) {
  const { currentView, isExpanded } = useChatStore();
  
  const isHomeView = currentView === 'home';

  return (
    <div
      className={cn(
        'bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-slide-up',
        isInline
          ? 'relative w-full h-full rounded-none'
          : isExpanded
          ? 'fixed inset-4 w-auto h-auto max-w-none max-h-none'
          : 'absolute bottom-20 right-0 w-[400px] h-[700px] max-h-[calc(100vh-100px)]'
      )}
    >
      {/* Scrollable Content */}
      <div
        className={cn(
          "flex-1 flex flex-col relative z-0 transition-colors duration-300",
          isHomeView ? "overflow-y-auto no-scrollbar" : "overflow-hidden"
        )}
        style={{ background: currentView === 'chat' ? '#fff' : '#fff' }}
      >
        {/* Views */}
        {currentView === 'home' && <div className="animate-fade-in"><HomeView /></div>}
        {currentView === 'help' && <div className="animate-fade-in"><HelpView /></div>}
        {currentView === 'chat' && <div className="animate-fade-in h-full"><ChatView /></div>}
        {currentView === 'messages' && <div className="animate-fade-in"><MessagesView /></div>}
        {currentView === 'news' && <div className="animate-fade-in"><NewsView /></div>}
      </div>
      
      {/* Bottom Navigation - Hidden when actively chatting */}
      {currentView !== 'chat' && <BottomNav />}
    </div>
  );
}





