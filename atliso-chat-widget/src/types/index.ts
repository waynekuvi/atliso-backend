// Message types
export type MessageRole = 'user' | 'bot' | 'human';
export type MessageType = 'text' | 'attachment' | 'gif' | 'voice';

export interface Attachment {
  name: string;
  size: number;
  type: string;
  dataUrl: string;
}

export interface GifData {
  url: string;
  previewUrl: string;
  title?: string;
}

export interface AudioData {
  dataUrl: string;
  duration: number;
  mimeType: string;
}

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: string;
  type: MessageType;
  attachment?: Attachment;
  gif?: GifData;
  audio?: AudioData;
  quickReplies?: { label: string; value: string }[];
}

// Thread/Conversation types
export type HandoffStatus = 'none' | 'waiting' | 'connected' | 'ended';

export interface Thread {
  id: string;
  createdAt: string;
  updatedAt: string;
  unread: boolean;
  unreadCount: number;
  ended: boolean;
  feedbackRating?: number;
  handoff_status: HandoffStatus;
  messages: Message[];
}

// Customization types
export interface GradientColors {
  color1: string;
  color2: string;
  color3: string;
  color4: string;
}

export interface Customization {
  gradient?: GradientColors;
  logo?: string | null;
  supportLogo?: string | null;
  avatars?: string[];
  webhookUrl?: string;
  // New configurable fields from API
  botName?: string;
  welcomeMessage?: string;
  homepageHeading?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  primaryColor?: string;
  launcherText?: string;
  tagline?: string;
  showBranding?: boolean;
}

// Mount options
export interface MountOptions {
  organizationId?: string;
  apiBaseUrl?: string;
  webhookUrl?: string;
  inline?: boolean;
  initialOpen?: boolean;
  position?: 'fixed' | 'relative';
  hideButton?: boolean;
  customization?: Customization;
}

// View types
export type ViewType = 'home' | 'help' | 'chat' | 'messages' | 'news';

// FAQ types
export interface FAQItem {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
}

// Developer settings
export interface DeveloperSettings {
  gradient: GradientColors;
  logo: string;
  avatars: string[];
  supportLogo: string;
}

// API response types
export interface CustomizationResponse {
  organizationId: string;
  webhookUrl?: string;
  gradient?: GradientColors;
  avatars?: string[];
  logo?: string | null;
  supportLogo?: string | null;
}

// Greeting types
export type TimeOfDay = 'morning' | 'midday' | 'evening' | 'night' | 'lateNight';





