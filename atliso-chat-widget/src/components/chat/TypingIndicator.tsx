export function TypingIndicator() {
  return (
    <div className="flex gap-3 animate-fade-in mb-4">
      <div style={{padding: '8px'}} className="bg-gray-50 px-5 py-4 rounded-[20px] border border-gray-200 shadow-sm">
        <div className="flex gap-1.5 items-center h-5">
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-typing" />
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-typing-delay-1" />
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-typing-delay-2" />
        </div>
      </div>
    </div>
  );
}


