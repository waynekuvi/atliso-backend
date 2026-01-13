import { useRef, useEffect, useState } from 'react';
import { Download, Maximize2, Minimize2, MoreHorizontal } from 'lucide-react';
import { cn } from '@/utils/cn';

interface DropdownMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadTranscript: () => void;
  onExpandView: () => void;
  isExpanded: boolean;
}

export function DropdownMenu({ isOpen, onClose, onDownloadTranscript, onExpandView, isExpanded }: DropdownMenuProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{ padding: '8px' }}
      ref={dropdownRef}
      className="absolute right-2 top-14 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 min-w-[180px]"
    >
      <button
        onClick={onDownloadTranscript}
        className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors cursor-pointer"
      >
        <Download className="w-4 h-4" />
        Download transcript
      </button>
      <button
        onClick={onExpandView}
        className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors cursor-pointer"
      >
        {isExpanded ? (
          <>
            <Minimize2 className="w-4 h-4" />
            Minimize view
          </>
        ) : (
          <>
            <Maximize2 className="w-4 h-4" />
            Expand view
          </>
        )}
      </button>
    </div>
  );
}

interface ChatHeaderDropdownProps {
  onDownloadTranscript: () => void;
  onExpandView: () => void;
  isExpanded: boolean;
}

export function ChatHeaderDropdown({ onDownloadTranscript, onExpandView, isExpanded }: ChatHeaderDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        style={{ marginTop: '5px' }}
        className={cn(
          "p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600 cursor-pointer",
          isDropdownOpen && "bg-gray-100 text-gray-600"
        )}
        aria-label="More options"
        aria-expanded={isDropdownOpen}
        aria-haspopup="true"
      >
        <MoreHorizontal className="w-5 h-5" />
      </button>

      <DropdownMenu
        isOpen={isDropdownOpen}
        onClose={closeDropdown}
        onDownloadTranscript={() => {
          onDownloadTranscript();
          closeDropdown();
        }}
        onExpandView={() => {
          onExpandView();
          closeDropdown();
        }}
        isExpanded={isExpanded}
      />
    </div>
  );
}
