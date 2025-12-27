import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { ChatWidget } from './ChatWidget';

export const ProspectDemo: React.FC = () => {
    const { search } = useLocation();
    const query = useMemo(() => new URLSearchParams(search), [search]);
    const targetUrl = query.get('url') || 'https://www.google.com';
    const videoUrl = query.get('video') || ''; // Allow passing a master video URL

    // Ensure URL is valid for iframe
    const formattedUrl = useMemo(() => {
        if (!targetUrl.startsWith('http')) {
            return `https://${targetUrl}`;
        }
        return targetUrl;
    }, [targetUrl]);

    const demoOptions = {
        webhookUrl: 'https://atliso-backend.onrender.com/webhook/chatbot',
        customization: {
            gradient: {
                color1: '#0D1321',
                color2: '#2D3142',
                color3: '#4A5568',
                color4: '#7C8595',
            },
            logo: 'https://res.cloudinary.com/dwjvtgiid/image/upload/v1766321945/image_42_s2rakp.png',
            supportLogo: 'https://res.cloudinary.com/dwjvtgiid/image/upload/v1764419666/logo-white_x64htk.svg',
        },
    };

    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden bg-gray-900">
            {/* Top Banner for "WOW" effect */}
            <div className="absolute top-0 left-0 right-0 h-14 bg-indigo-600 flex items-center justify-between px-6 z-50 shadow-lg border-b border-indigo-500">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-1.5 shadow-sm">
                        <img
                            src="https://res.cloudinary.com/dwjvtgiid/image/upload/v1766321945/image_42_s2rakp.png"
                            alt="Atliso"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <span className="text-white font-bold tracking-tight text-lg">Atliso Personal Preview</span>
                </div>
                <div className="hidden md:block text-indigo-100 text-sm font-medium">
                    Previewing AI Assistant on <span className="text-white bg-indigo-700 px-2 py-1 rounded mx-1">{new URL(formattedUrl).hostname}</span>
                </div>
                <div className="flex space-x-2">
                    <button className="bg-white text-indigo-600 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm hover:bg-indigo-50 transition-colors">
                        Book Strategy Session
                    </button>
                </div>
            </div>

            {/* Prospect Site Iframe */}
            <div className="pt-14 w-full h-full">
                <iframe
                    src={formattedUrl}
                    className="w-full h-full border-none"
                    title="Prospect Site"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                />
            </div>

            {/* Floating Face Frame (Bottom Left) */}
            <div className="absolute bottom-6 left-6 w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-white shadow-2xl overflow-hidden z-[100]">
                {videoUrl ? (
                    <video
                        src={videoUrl}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center p-4">
                        <div className="text-white text-[10px] md:text-sm text-center font-medium opacity-60">
                            [ Floating Face Video ]
                        </div>
                    </div>
                )}
                {/* Pulsing indicator */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-sm" />
            </div>

            {/* Dark tint to make the widget pop if the site is too bright */}
            <div className="absolute inset-0 pt-14 pointer-events-none bg-black/5" />

            {/* The Rocket Fuel */}
            <ChatWidget options={demoOptions} />
        </div>
    );
};
