import { useState } from 'react';
import { useChatStore } from '@/stores/chatStore';
import { getGreeting, formatRelativeTime } from '@/utils/time';
import { Search, ExternalLink, CheckCircle2, ChevronRight, X, Settings } from 'lucide-react';

const homeLinks = [
  { label: 'Getting started with Atliso platform', url: '#' },
  { label: 'Subscription plan changes and proration', url: '#' },
  { label: 'Setting up your Atliso account', url: '#' },
  { label: 'Understanding platform limits and usage', url: '#' },
];

export function HomeView() {
  const { customization, setCustomization, setCurrentView, setIsOpen, getActiveThread, startNewConversation } = useChatStore();
  const [isDevOpen, setIsDevOpen] = useState(false);
  const [devDraft, setDevDraft] = useState({
    logo: '',
    supportLogo: '',
    avatars: '',
    color1: '#0B5FFF',
    color2: '#2F4BFF',
    color3: '#6D28D9',
    color4: '#7C3AED',
  });

  const { text: greetingText, emoji: greetingEmoji } = getGreeting();
  const avatars = customization?.avatars || [];
  const logo = customization?.logo;
  const supportLogo = customization?.supportLogo;
  const activeThread = getActiveThread();
  const lastMessage = activeThread?.messages[activeThread.messages.length - 1];

  // Debug logging
  console.log('HomeView - Logo URL:', logo);
  console.log('HomeView - Customization:', customization);

  const gradient = customization?.gradient || {
    color1: '#0B5FFF',
    color2: '#2F4BFF',
    color3: '#6D28D9',
    color4: '#7C3AED',
  };

  const diagonalGradient = `linear-gradient(135deg, ${gradient.color1} 0%, ${gradient.color2} 30%, ${gradient.color3} 70%, ${gradient.color4} 100%)`;
  const fullBackground =
    `linear-gradient(180deg, rgba(243,244,246,0) 0px, rgba(243,244,246,0.92) 360px, #F3F4F6 520px, #ffffff 100%), ${diagonalGradient}`;

  const cardRadius = 16;
  const cardBorder = '1px solid rgba(15, 23, 42, 0.07)';
  const cardShadow = '0 12px 28px rgba(15, 23, 42, 0.09)';

  const openExternal = (url: string) => {
    if (!url || url === '#') return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const openDeveloper = () => {
    setDevDraft({
      logo: customization?.logo || '',
      supportLogo: customization?.supportLogo || '',
      avatars: (customization?.avatars || []).join('\n'),
      color1: gradient.color1,
      color2: gradient.color2,
      color3: gradient.color3,
      color4: gradient.color4,
    });
    setIsDevOpen(true);
  };

  const handleDeveloperAuth = () => {
    const entered = window.prompt('Developer access');
    if (entered !== 'ATLISODEV') return;
    openDeveloper();
  };

  const applyDeveloper = () => {
    const parsedAvatars = devDraft.avatars
      .split(/\n|,/g)
      .map((s) => s.trim())
      .filter(Boolean);

    setCustomization({
      ...(customization || {}),
      logo: devDraft.logo.trim() ? devDraft.logo.trim() : null,
      supportLogo: devDraft.supportLogo.trim() ? devDraft.supportLogo.trim() : null,
      avatars: parsedAvatars,
      gradient: {
        color1: devDraft.color1,
        color2: devDraft.color2,
        color3: devDraft.color3,
        color4: devDraft.color4,
      },
    });
    setIsDevOpen(false);
  };

  const handleSearchClick = () => {
    setCurrentView('help');
  };

  const handleRecentMessageClick = () => {
    setCurrentView('messages');
  };

  return (
    <div
      className="flex flex-col min-h-full atliso-scrollbar"
      style={{ backgroundImage: fullBackground, backgroundColor: '#F3F4F6', position: 'relative' }}
    >
      {/* Header Content */}
      <div
        className="relative text-white shrink-0"
        style={{
          paddingTop: '20px',
          paddingBottom: '48px',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        {/* Top Row - Logo & Avatars */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {logo ? (
              <img
                src={logo}
                alt="Logo"
                style={{ height: '24px', width: 'auto' }}
              />
            ) : (
              <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px', fill: 'white' }}>
                <path d="M12 2L2 22H22L12 2Z" />
              </svg>
            )}
            <span style={{ fontWeight: 600, fontSize: '16px', letterSpacing: '-0.01em' }}>
              {customization?.botName || "Atliso"}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Avatars */}
            {avatars.length > 0 && (
              <div style={{ display: 'flex' }}>
                {avatars.slice(0, 3).map((url, idx) => (
                  <img
                    key={idx}
                    src={url}
                    alt={`Agent ${idx + 1}`}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      border: '2px solid rgba(255,255,255,0.2)',
                      objectFit: 'cover',
                      marginLeft: idx > 0 ? '-8px' : '0',
                    }}
                  />
                ))}
              </div>
            )}

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                padding: '4px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <X style={{ width: '20px', height: '20px', color: 'rgba(255,255,255,0.8)' }} />
            </button>
          </div>
        </div>

        {/* Greeting */}
        <div style={{ marginTop: '4px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 500, opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {greetingText} {greetingEmoji}
          </h2>
          <h1 style={{ marginTop: '2px', fontSize: '18px', fontWeight: 600, lineHeight: 1.25 }}>
            {customization?.homepageHeading || "How can we help?"}
          </h1>
        </div>
      </div>

      {/* Cards Container - Overlapping Header */}
      <div
        style={{
          position: 'relative',
          marginTop: '-24px',
          padding: '0 16px 16px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        {/* Recent Message Card */}
        {lastMessage && (
          <button
            onClick={handleRecentMessageClick}
            style={{
              width: '100%',
              background: 'white',
              borderRadius: cardRadius,
              border: cardBorder,
              boxShadow: cardShadow,
              padding: '12px 14px',
              textAlign: 'left',
              outline: 'none',
              cursor: 'pointer',
            }}
          >
            <h3 style={{ fontWeight: 600, fontSize: '13px', color: '#0F172A', marginBottom: '8px', opacity: 0.6 }}>
              RECENT MESSAGE
            </h3>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {/* Bot Icon */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                overflow: 'hidden',
              }}>
                {supportLogo ? (
                  <img src={supportLogo} alt="Support" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                ) : (
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px', fill: 'white' }}><path d="M12 2L2 22H22L12 2Z" /></svg>
                  </div>
                )}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#0F172A',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>
                  {lastMessage.content}
                </p>
                <p style={{ fontSize: '11px', color: '#64748B', marginTop: '1px' }}>
                  Support AI • {formatRelativeTime(lastMessage.timestamp)}
                </p>
              </div>

              <ChevronRight style={{ width: '16px', height: '16px', color: '#000', opacity: 0.3, flexShrink: 0 }} />
            </div>
          </button>
        )}

        {/* Feature/News Card */}
        <button
          onClick={() => setCurrentView('news')}
          style={{
            width: '100%',
            background: 'white',
            borderRadius: cardRadius,
            border: cardBorder,
            boxShadow: cardShadow,
            padding: '12px 14px',
            textAlign: 'left',
            outline: 'none',
            cursor: 'pointer',
          }}
        >
          <div style={{ textAlign: 'left' }}>
            <h4 style={{
              fontSize: '13px',
              fontWeight: 600,
              color: '#0F172A',
              marginBottom: '4px'
            }}>
              Latest Updates
            </h4>
            <p style={{
              fontSize: '12px',
              color: '#64748B',
              lineHeight: 1.4,
              margin: 0
            }}>
              A new era of AI-powered Insights has arrived. Complete visibility into every conversation.
            </p>
          </div>
        </button>

        {/* Search & Help Card */}
        <div style={{
          background: 'white',
          borderRadius: cardRadius,
          border: cardBorder,
          boxShadow: cardShadow,
          overflow: 'hidden',
          padding: '4px 0',
        }}>
          {/* Search Bar */}
          <div style={{ padding: '8px 14px' }}>
            <button
              onClick={handleSearchClick}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#F1F5F9',
                borderRadius: '8px',
                padding: '8px 12px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <span style={{ color: '#64748B', fontWeight: 500, fontSize: '12px' }}>Search for help</span>
              <Search style={{ width: '14px', height: '14px', color: '#64748B' }} />
            </button>
          </div>

          {/* Links List */}
          <div>
            {homeLinks.slice(0, 3).map((link, idx) => (
              <button
                key={idx}
                onClick={handleSearchClick}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ color: '#334155', fontWeight: 500, fontSize: '12px', paddingRight: '12px' }}>
                  {link.label}
                </span>
                <ChevronRight style={{ width: '14px', height: '14px', color: '#000', opacity: 0.2, flexShrink: 0 }} />
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => startNewConversation()}
          style={{
            width: '100%',
            background: '#000',
            borderRadius: cardRadius,
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            cursor: 'pointer',
            border: 'none',
            color: '#FFF',
          }}
        >
          <span style={{ fontWeight: 600, fontSize: '13px' }}>Send us a message</span>
          <ChevronRight style={{ width: '16px', height: '16px' }} />
        </button>
      </div>

      {
        isDevOpen && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(15, 23, 42, 0.45)',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              padding: '18px',
              zIndex: 50,
            }}
            onClick={() => setIsDevOpen(false)}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '420px',
                background: 'white',
                borderRadius: cardRadius,
                border: cardBorder,
                boxShadow: cardShadow,
                overflow: 'hidden',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  padding: '14px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid #EEF2F6',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '10px',
                      background: '#F1F5F9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Settings style={{ width: '18px', height: '18px', color: '#2563EB' }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '14px', color: '#0F172A' }}>Developer</div>
                    <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>Edit widget branding</div>
                  </div>
                </div>

                <button
                  onClick={() => setIsDevOpen(false)}
                  style={{
                    padding: '6px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '10px',
                  }}
                  aria-label="Close"
                >
                  <X style={{ width: '18px', height: '18px', color: '#64748B' }} />
                </button>
              </div>

              <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>Brand logo URL</div>
                  <input
                    value={devDraft.logo}
                    onChange={(e) => setDevDraft((d) => ({ ...d, logo: e.target.value }))}
                    placeholder="https://..."
                    style={{
                      width: '100%',
                      background: '#F1F5F9',
                      border: '1px solid #E2E8F0',
                      borderRadius: '12px',
                      padding: '10px 12px',
                      fontSize: '13px',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>Support logo URL</div>
                  <input
                    value={devDraft.supportLogo}
                    onChange={(e) => setDevDraft((d) => ({ ...d, supportLogo: e.target.value }))}
                    placeholder="https://..."
                    style={{
                      width: '100%',
                      background: '#F1F5F9',
                      border: '1px solid #E2E8F0',
                      borderRadius: '12px',
                      padding: '10px 12px',
                      fontSize: '13px',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>Avatar URLs (one per line)</div>
                  <textarea
                    value={devDraft.avatars}
                    onChange={(e) => setDevDraft((d) => ({ ...d, avatars: e.target.value }))}
                    placeholder="https://..."
                    rows={3}
                    style={{
                      width: '100%',
                      background: '#F1F5F9',
                      border: '1px solid #E2E8F0',
                      borderRadius: '12px',
                      padding: '10px 12px',
                      fontSize: '13px',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>Gradient</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                    {(['color1', 'color2', 'color3', 'color4'] as const).map((key) => (
                      <input
                        key={key}
                        type="color"
                        value={devDraft[key]}
                        onChange={(e) => setDevDraft((d) => ({ ...d, [key]: e.target.value }))}
                        style={{
                          width: '100%',
                          height: '36px',
                          padding: 0,
                          border: '1px solid #E2E8F0',
                          borderRadius: '10px',
                          background: '#F8FAFC',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div
                style={{
                  padding: '14px 16px',
                  borderTop: '1px solid #EEF2F6',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '10px',
                }}
              >
                <button
                  onClick={() => setIsDevOpen(false)}
                  style={{
                    padding: '10px 12px',
                    borderRadius: '12px',
                    border: '1px solid #E2E8F0',
                    background: '#FFFFFF',
                    cursor: 'pointer',
                    fontWeight: 700,
                    fontSize: '13px',
                    color: '#0F172A',
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={applyDeveloper}
                  style={{
                    padding: '10px 12px',
                    borderRadius: '12px',
                    border: '1px solid rgba(37, 99, 235, 0.4)',
                    background: '#2563EB',
                    cursor: 'pointer',
                    fontWeight: 800,
                    fontSize: '13px',
                    color: '#FFFFFF',
                  }}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )
      }
    </div >
  );
}
