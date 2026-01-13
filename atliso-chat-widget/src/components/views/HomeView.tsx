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
      className="flex flex-col min-h-full"
      style={{ backgroundImage: fullBackground, backgroundColor: '#F3F4F6', position: 'relative' }}
    >
      {/* Header Content */}
      <div
        className="relative text-white shrink-0"
        style={{
          paddingTop: '16px',
          paddingBottom: '54px',
          paddingLeft: '20px',
          paddingRight: '20px',
        }}
      >
        {/* Top Row - Logo & Avatars */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {logo ? (
              <img
                src={logo}
                alt="Atliso Logo"
                style={{ height: '28px', width: 'auto' }}
                onError={(e) => {
                  console.error('Logo failed to load:', logo);
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
                onLoad={() => {
                  console.log('Logo loaded successfully:', logo);
                }}
              />
            ) : (
              <svg viewBox="0 0 24 24" style={{ width: '28px', height: '28px', fill: 'white' }}>
                <path d="M12 2L2 22H22L12 2Z" />
              </svg>
            )}
            <span style={{ fontWeight: 300, fontSize: '20px', letterSpacing: '-0.02em' }}>
              {customization?.botName || "Atliso"}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Avatars */}
            {avatars.length > 0 && (
              <div style={{ display: 'flex' }}>
                {avatars.slice(0, 3).map((url, idx) => (
                  <img
                    key={idx}
                    src={url}
                    alt={`Agent ${idx + 1}`}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      border: '2px solid rgba(255,255,255,0.28)',
                      objectFit: 'cover',
                      marginLeft: idx > 0 ? '-10px' : '0',
                    }}
                  />
                ))}
              </div>
            )}

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                padding: '6px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '50%',
              }}
            >
              <X style={{ width: '22px', height: '22px', color: 'rgba(255,255,255,0.9)' }} />
            </button>
          </div>
        </div>

        {/* Greeting */}
        <div>
          <h2 style={{ fontSize: '22px', fontWeight: 500, opacity: 0.6 }}>
            {greetingText} {greetingEmoji}
          </h2>
          <h1 style={{ marginTop: '-8px', fontSize: '28px', fontWeight: 500, lineHeight: 1.2 }}>
            {customization?.homepageHeading || "How can we help you?"}
          </h1>
        </div>
      </div>

      {/* Cards Container - Overlapping Header */}
      <div
        style={{
          position: 'relative',
          marginTop: '-28px',
          padding: '0 16px 16px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
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
              padding: '14px 16px',
              textAlign: 'left',
              outline: 'none',
              cursor: 'pointer',
            }}
          >
            <h3 style={{ fontWeight: 700, fontSize: '15px', color: '#0F172A', marginBottom: '12px' }}>
              Recent message
            </h3>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* Bot Icon */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                overflow: 'hidden',
              }}>
                {supportLogo ? (
                  <img src={supportLogo} alt="Support" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
                ) : (
                  <svg viewBox="0 0 24 24" style={{ width: '28px', height: '28px', fill: 'white' }}><path d="M12 2L2 22H22L12 2Z" /></svg>
                )}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#0F172A',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>
                  {lastMessage.content}
                </p>
                <p style={{ fontSize: '12px', color: '#64748B', marginTop: '3px' }}>
                  Support AI Assistant • {formatRelativeTime(lastMessage.timestamp)}
                </p>
              </div>

              <ChevronRight style={{ width: '18px', height: '18px', color: '#2563EB', flexShrink: 0 }} />
            </div>
          </button>
        )}

        {/* Recent News Container */}
        <button
          onClick={() => setCurrentView('news')}
          style={{
            width: '100%',
            background: 'white',
            borderRadius: cardRadius,
            border: cardBorder,
            boxShadow: cardShadow,
            padding: '14px 16px',
            textAlign: 'left',
            outline: 'none',
            cursor: 'pointer',
          }}
        >
          {/* News Image */}
          <div style={{
            width: '100%',
            height: '160px',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '12px',
            position: 'relative',
          }}>
            <img
              src="https://res.cloudinary.com/dwjvtgiid/image/upload/v1766316650/alexandre-pellaes-6vAjp0pscX0-unsplash_iaw9fr.jpg"
              alt="Recent news"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
              padding: '8px 12px',
            }}>
              <p style={{
                color: 'white',
                fontSize: '12px',
                fontWeight: 600,
                margin: 0,
              }}>
                Latest Updates
              </p>
            </div>
          </div>

          {/* Simple Content */}
          <div style={{ textAlign: 'left' }}>
            <h4 style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#0F172A',
              marginBottom: '6px'
            }}>
              A new era of Insights has arrived
            </h4>
            <p style={{
              fontSize: '12px',
              color: '#64748B',
              lineHeight: 1.4,
              margin: '0 0 6px 0'
            }}>
              "We announced Fin Insights, a groundbreaking, AI-powered product that gives you complete visibility into every customer conversation, with AI-powered tools and suggestions that help you monitor, analyze, and instantly optimize your customer service quality."
            </p>
            <p style={{
              fontSize: '12px',
              color: '#2563EB',
              fontWeight: 500,
              margin: 0
            }}>
              Watch the event on-demand.
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
        }}>
          {/* Search Bar */}
          <div style={{ padding: '14px 16px 10px 16px' }}>
            <button
              onClick={handleSearchClick}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#F1F5F9',
                borderRadius: '12px',
                padding: '10px 14px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <span style={{ color: '#64748B', fontWeight: 600, fontSize: '13px' }}>Search for help</span>
              <Search style={{ width: '18px', height: '18px', color: '#2563EB' }} />
            </button>
          </div>

          {/* Links List */}
          <div style={{ borderTop: '1px solid #EEF2F6' }}>
            {homeLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={handleSearchClick}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: idx < homeLinks.length - 1 ? '1px solid #EEF2F6' : 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ color: '#334155', fontWeight: 500, fontSize: '13px', paddingRight: '14px', lineHeight: 1.25 }}>
                  {link.label}
                </span>
                <ChevronRight style={{ width: '18px', height: '18px', color: '#2563EB', flexShrink: 0, opacity: 0.55 }} />
              </button>
            ))}
          </div>
        </div>

        {/* Feature Request Card */}
        <button
          style={{
            width: '100%',
            background: 'white',
            borderRadius: cardRadius,
            border: cardBorder,
            boxShadow: cardShadow,
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            outline: 'none',
            cursor: 'pointer',
            textAlign: 'left',
          }}
        >
          <span style={{ fontWeight: 600, color: '#334155', fontSize: '13px' }}>
            Have an idea for a new feature or integration?
          </span>
          <ExternalLink style={{ width: '18px', height: '18px', color: '#2563EB', flexShrink: 0 }} />
        </button>

        {/* Status Card */}
        <button
          type="button"
          onClick={handleDeveloperAuth}
          style={{
            width: '100%',
            background: 'white',
            borderRadius: cardRadius,
            border: cardBorder,
            boxShadow: cardShadow,
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            textAlign: 'left',
            cursor: 'pointer',
            outline: 'none',
          }}
        >
          <div style={{
            width: '22px',
            height: '22px',
            borderRadius: '50%',
            background: '#D1FAE5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            marginTop: '2px',
          }}>
            <CheckCircle2 style={{ width: '14px', height: '14px', color: '#059669' }} />
          </div>
          <div>
            <h3 style={{ fontWeight: 700, color: '#0F172A', fontSize: '13px' }}>
              Status: All Systems Operational
            </h3>
            <p style={{ fontSize: '12px', color: '#64748B', marginTop: '3px' }}>
              Updated {new Date().toLocaleDateString()}
            </p>
          </div>
        </button>

        <button
          onClick={() => openExternal('#')}
          style={{
            width: '100%',
            background: 'white',
            borderRadius: cardRadius,
            border: cardBorder,
            boxShadow: cardShadow,
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            outline: 'none',
            cursor: 'pointer',
            textAlign: 'left',
          }}
        >
          <span style={{ fontWeight: 600, color: '#334155', fontSize: '13px' }}>Contact sales</span>
          <ExternalLink style={{ width: '18px', height: '18px', color: '#2563EB', flexShrink: 0 }} />
        </button>

        <div style={{
          background: 'white',
          borderRadius: cardRadius,
          border: cardBorder,
          boxShadow: cardShadow,
          overflow: 'hidden',
        }}>
          <button
            onClick={() => openExternal('#')}
            style={{
              width: '100%',
              padding: '12px 16px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ fontWeight: 600, color: '#334155', fontSize: '13px' }}>Join our dev community on Discord</span>
            <ExternalLink style={{ width: '18px', height: '18px', color: '#2563EB', flexShrink: 0 }} />
          </button>
          <div style={{ height: 1, background: '#EEF2F6' }} />
          <button
            onClick={() => openExternal('#')}
            style={{
              width: '100%',
              padding: '12px 16px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ fontWeight: 600, color: '#334155', fontSize: '13px' }}>Ask on Reddit</span>
            <ExternalLink style={{ width: '18px', height: '18px', color: '#2563EB', flexShrink: 0 }} />
          </button>
        </div>

        <button
          onClick={() => startNewConversation()}
          style={{
            width: '100%',
            background: 'white',
            borderRadius: cardRadius,
            border: cardBorder,
            boxShadow: cardShadow,
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            outline: 'none',
            cursor: 'pointer',
            textAlign: 'left',
          }}
        >
          <span style={{ fontWeight: 500, color: '#0F172A', fontSize: '13px' }}>Send us a message</span>
          <ChevronRight style={{ width: '22px', height: '22px', color: '#2563EB', flexShrink: 0 }} />
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
