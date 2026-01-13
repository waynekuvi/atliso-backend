import { Calendar, User, Search, Zap } from 'lucide-react';
import { cn } from '@/utils/cn';

interface CommandMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (action: string) => void;
}

export function CommandMenu({ isOpen, onClose, onSelect }: CommandMenuProps) {
    if (!isOpen) return null;

    const commands = [
        {
            id: 'book_meeting',
            label: 'Book a meeting',
            icon: Calendar,
            description: 'Schedule a call with our team',
            action: 'I would like to book a meeting'
        },
        {
            id: 'human_handoff',
            label: 'Talk to a human',
            icon: User,
            description: 'Connect with a live support agent',
            action: 'I want to talk to a human'
        },
        {
            id: 'help',
            label: 'Search help',
            icon: Search,
            description: 'Find answers in our knowledge base',
            action: 'Help'
        }
    ];

    return (
        <>
            <div
                className="fixed inset-0 z-30 bg-transparent"
                onClick={onClose}
            />
            <div className="absolute bottom-full left-0 mb-2 w-full px-5 z-40 animate-slide-up">
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="px-4 py-3 border-b border-gray-50 flex items-center gap-2 bg-gray-50/50">
                        <Zap className="w-4 h-4 text-indigo-500 fill-current" />
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Quick Actions</span>
                    </div>
                    <div className="p-1">
                        {commands.map((cmd) => (
                            <button
                                key={cmd.id}
                                onClick={() => {
                                    onSelect(cmd.action);
                                    onClose();
                                }}
                                className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors group text-left"
                            >
                                <div className="w-8 h-8 rounded-lg bg-gray-50 group-hover:bg-white border border-gray-100 group-hover:border-gray-200 flex items-center justify-center transition-colors">
                                    <cmd.icon className="w-4 h-4 text-gray-500 group-hover:text-indigo-600 transition-colors" />
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-gray-900">{cmd.label}</div>
                                    <div className="text-xs text-gray-500">{cmd.description}</div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
