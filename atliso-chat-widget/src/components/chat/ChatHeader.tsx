import { useChatStore } from '@/stores/chatStore';
import { ChevronLeft, X } from 'lucide-react';
import { ChatHeaderDropdown } from './ChatHeaderDropdown';

export function ChatHeader() {
  const { customization, setCurrentView, setIsOpen, toggleExpanded, getActiveThread, isExpanded } = useChatStore();
  const supportLogo = customization?.supportLogo;

  const handleBack = () => {
    setCurrentView('messages');
  };

  const handleDownloadTranscript = () => {
    const thread = getActiveThread();
    if (!thread || thread.messages.length === 0) return;

    // Create transcript content
    const transcript = thread.messages
      .map(msg => {
        const timestamp = new Date(msg.timestamp).toLocaleString();
        return `[${timestamp}] ${msg.role.toUpperCase()}: ${msg.content}`;
      })
      .join('\n\n');

    // Create and download file
    const blob = new Blob([transcript], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chat-transcript-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleExpandView = () => {
    toggleExpanded();
  };

  return (
    <div className="min-h-[50px] px-5 py-4 bg-white border-b border-gray-100 shrink-0 flex items-center justify-between z-10">
      <div className="flex items-center gap-3 overflow-hidden">
        {/* Back Button */}
        <button
          style={{ marginLeft: '8px', marginRight: '8px' }}
          onClick={handleBack}
          className="flex ml-2 p-2 hover:bg-gray-100 active:bg-gray-200 rounded-full transition-all duration-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-label="Go back"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center justify-center shrink-0 overflow-hidden">
          {supportLogo ? (
            <img src={supportLogo} alt="Support" className="w-6 h-6 object-contain" />
          ) : (
            <svg viewBox="0 0 24 24" className="w-7 h-7 text-white fill-current" fill="none"><path d="M12 2L2 22H22L12 2Z" /></svg>
          )}
        </div>

        {/* Title & Subtitle */}
        <div className="min-w-0">
          <h3 className="text-[14px] font-semibold text-gray-900 truncate leading-tight">
            {customization?.botName || 'Support AI Assistant'}
          </h3>
          <p className="text-[11px] text-gray-400 truncate mt-0.5">
            {customization?.tagline || 'The team can also help'}
          </p>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-1 shrink-0" style={{ marginRight: '8px' }}>
        <ChatHeaderDropdown
          onDownloadTranscript={handleDownloadTranscript}
          onExpandView={handleExpandView}
          isExpanded={isExpanded}
        />

        <button
          style={{ marginRight: '8px' }}
          onClick={() => setIsOpen(false)}
          className="p-2 hover:bg-gray-100 active:bg-gray-200 rounded-full transition-all duration-200 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
