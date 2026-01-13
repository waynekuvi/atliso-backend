import { useChatStore } from '@/stores/chatStore';
import { formatRelativeTime } from '@/utils/time';
import { ChevronRight, X } from 'lucide-react';

export function MessagesView() {
  const { customization, threads, setActiveThread, startNewConversation, setIsOpen } = useChatStore();
  const supportLogo = customization?.supportLogo;
  const brandLogo = customization?.logo;
  const convoLogo = supportLogo || brandLogo;

  // Find the first thread that hasn't been ended
  const activeThread = threads.find(t => !t.ended);

  const handleSendUsMessage = () => {
    if (activeThread) {
      setActiveThread(activeThread.id);
    } else {
      startNewConversation();
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="min-h-[50px] px-4 py-3 bg-white border-b border-gray-100 flex items-center justify-center relative shrink-0">
        <h2 className="text-[15px] font-semibold text-gray-900">Messages</h2>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-gray-100 text-gray-400 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Conversation List - Takes remaining space */}
      <div className="flex-1 overflow-y-auto bg-white px-4 pb-4 atliso-scrollbar" style={{ minHeight: 0 }}>
        {threads.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-8 text-center text-gray-400">
            <p className="text-sm">No messages yet.</p>
          </div>
        ) : (
          <div className="pt-2">
            <div className="divide-y divide-gray-50">
              {threads.map((thread) => {
                const lastMessage = thread.messages[thread.messages.length - 1];
                return (
                  <button
                    key={thread.id}
                    onClick={() => setActiveThread(thread.id)}
                    className="w-full py-4 flex items-center gap-4 text-left hover:bg-gray-50 active:bg-gray-100 transition-all rounded-xl px-2 -mx-2 mb-1"
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-gray-50 border border-gray-100 overflow-hidden">
                      {convoLogo ? (
                        <img src={convoLogo} alt="Support" className="w-full h-full object-contain" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-black">
                          <svg viewBox="0 0 24 24" className="w-4 h-4 text-white fill-current"><path d="M12 2L2 22H22L12 2Z" /></svg>
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className={`text-[13px] font-semibold text-gray-900 truncate ${thread.unread ? 'font-bold' : ''}`}>
                          {lastMessage ? lastMessage.content : 'New conversation'}
                        </p>
                        {thread.unread && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                        )}
                      </div>
                      <p className="text-[11px] text-gray-500 mt-0.5 truncate uppercase tracking-tight opacity-70">
                        Agent • {lastMessage ? formatRelativeTime(lastMessage.timestamp) : 'Just now'}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Action - Fixed to bottom */}
      <div className="px-6 py-6 bg-white border-t border-gray-100 flex items-center justify-center shrink-0">
        <button
          onClick={handleSendUsMessage}
          className="w-full max-w-[250px] h-12 text-sm px-8 py-3.5 bg-black text-white font-medium rounded-[10px] flex items-center justify-center gap-2 transition-all hover:bg-gray-800 active:scale-95 shadow-md hover:shadow-lg"
        >
          <p>Send us a message</p>
          <ChevronRight className="w-5 h-5 ml-0.5" strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}
