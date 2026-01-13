import { useChatStore } from '@/stores/chatStore';
import { ChevronLeft, X } from 'lucide-react';
import { cn } from '@/utils/cn';

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  timestamp: string;
  category: string;
  read: boolean;
  externalUrl?: string;
  imageUrl?: string;
}

const sampleNews: NewsItem[] = [
  {
    id: '1',
    title: 'Atliso launches new AI-powered customer support features',
    summary: 'Revolutionary AI capabilities now available for enhanced customer service automation.',
    content: 'Atliso is excited to announce the launch of our new AI-powered customer support features. These revolutionary capabilities include intelligent ticket routing, automated response suggestions, and real-time sentiment analysis to help your support team work more efficiently.',
    timestamp: '2024-12-19T10:00:00Z', // December 19, 2024
    category: 'Product Update',
    read: false,
    externalUrl: '#',
    imageUrl: 'https://res.cloudinary.com/dwjvtgiid/image/upload/v1766316650/alexandre-pellaes-6vAjp0pscX0-unsplash_iaw9fr.jpg'
  },
  {
    id: '2',
    title: 'System maintenance scheduled for this weekend',
    summary: 'Planned maintenance window for system upgrades and performance improvements.',
    content: 'We will be performing scheduled maintenance this weekend from Saturday 10 PM to Sunday 2 AM EST. During this time, some services may be temporarily unavailable. We apologize for any inconvenience and appreciate your patience.',
    timestamp: '2024-12-18T14:30:00Z', // December 18, 2024
    category: 'System Update',
    read: false,
    externalUrl: '#',
    imageUrl: 'https://res.cloudinary.com/dwjvtgiid/image/upload/v1764419666/logo-white_x64htk.svg'
  },
  {
    id: '3',
    title: 'Introducing the new Client Portal',
    summary: 'Access your account, manage subscriptions, and track your support tickets all in one place.',
    content: 'Our new Client Portal provides a centralized hub for managing your Atliso experience. View your account details, upgrade your subscription, track support ticket status, and access detailed analytics - all from a single, intuitive dashboard.',
    timestamp: '2024-12-17T11:00:00Z', // December 17, 2024
    category: 'Product Update',
    read: false,
    externalUrl: '#',
    imageUrl: 'https://res.cloudinary.com/dwjvtgiid/image/upload/v1764790803/Screenshot_2025-12-03_at_19.39.14_hcm6gd.png'
  },
  {
    id: '4',
    title: 'Security update: Two-factor authentication now available',
    summary: 'Enhanced security features to protect your account and data.',
    content: 'Two-factor authentication (2FA) is now available for all accounts. This additional security layer helps protect your account from unauthorized access. Enable 2FA in your account settings to start using this feature today.',
    timestamp: '2024-12-16T16:45:00Z', // December 16, 2024
    category: 'Security',
    read: true,
    externalUrl: '#',
    imageUrl: 'https://res.cloudinary.com/dwjvtgiid/image/upload/v1762618487/freepik__the-style-is-candid-image-photography-with-natural__92271_i3wbbw.png'
  }
];

export function NewsView() {
  const { setIsOpen } = useChatStore();

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Card styling constants (matching HomeView)
  const cardRadius = '12px';
  const cardBorder = '1px solid #e5e7eb';
  const cardShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="min-h-[62px] px-5 py-4 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10 shrink-0">
        <button style={{ marginLeft: '14px' }} onClick={() => setIsOpen(false)} className="p-1 hover:bg-gray-100 rounded-full">
          <ChevronLeft className="w-5 h-5 text-gray-500" />
        </button>
        <span className="font-semibold text-[17px] text-gray-900 text-sm truncate max-w-[200px]">News & Updates</span>
        <button style={{ marginRight: '14px' }} onClick={() => setIsOpen(false)} className="p-1 hover:bg-gray-100 rounded-full">
          <X className="w-5 h-5 text-black-500" />
        </button>
      </div>

      {/* News Cards Container */}
      <div
        style={{
          padding: '0 16px 16px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
        className="flex-1 overflow-y-auto bg-gray-50"
      >
        {sampleNews.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              if (item.externalUrl) {
                window.open(item.externalUrl, '_blank');
              }
            }}
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
              position: 'relative',
            }}
            className={cn(
              "hover:shadow-md hover:border-gray-300 transition-all",
              !item.read && "border-l-4 border-l-black-500"
            )}
          >
            {/* News Image */}
            {item.imageUrl && (
              <div style={{
                width: '100%',
                height: '120px',
                borderRadius: '8px',
                overflow: 'hidden',
                marginBottom: '12px',
                position: 'relative',
              }}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
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
            )}

            {/* News Content */}
            <div style={{ padding: '0 2px' }}>
              <h2 style={{
                fontSize: '13px',
                fontWeight: 600,
                color: '#0F172A',
                marginBottom: '4px',
                lineHeight: '1.4'
              }}>
                {item.title}
              </h2>
              <p style={{
                fontSize: '11px',
                color: '#64748B',
                lineHeight: 1.5,
                marginBottom: '4px'
              }}>
                {item.summary}
              </p>
              <p style={{
                fontSize: '10px',
                color: '#64748B',
                margin: 0,
                opacity: 0.6
              }}>
                {formatDate(item.timestamp)}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
