import type { Customization, GradientColors } from '@/types';

/**
 * API Response from /api/widget/config/[orgId]
 */
export interface WidgetConfigResponse {
  botName: string;
  welcomeMessage: string;
  homepageHeading: string;
  position: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  primaryColor: string;
  launcherText: string;
  tagline: string;
  avatarUrl: string | null;
  logoUrl?: string | null; // Company logo for header
  supportLogoUrl?: string | null; // Support agent logo
  showBranding: boolean;
  orgId: string;
  webhookUrl?: string; // May be included in response
}

/**
 * Generate gradient colors from a single primary color
 * Creates a harmonious 4-color gradient
 */
function generateGradientFromColor(primaryColor: string): GradientColors {
  // Parse hex color
  const hex = primaryColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Helper to convert RGB to hex
  const toHex = (value: number) => {
    const clamped = Math.max(0, Math.min(255, Math.round(value)));
    return clamped.toString(16).padStart(2, '0');
  };

  // Generate 4 colors: darker, primary, lighter, lightest
  const color1 = `#${toHex(r * 0.8)}${toHex(g * 0.8)}${toHex(b * 0.8)}`; // 20% darker
  const color2 = primaryColor; // Primary color
  const color3 = `#${toHex(r + (255 - r) * 0.3)}${toHex(g + (255 - g) * 0.3)}${toHex(b + (255 - b) * 0.3)}`; // 30% lighter
  const color4 = `#${toHex(r + (255 - r) * 0.5)}${toHex(g + (255 - g) * 0.5)}${toHex(b + (255 - b) * 0.5)}`; // 50% lighter

  return {
    color1,
    color2,
    color3,
    color4,
  };
}

/**
 * Map the new API response to the widget's Customization format
 */
export function mapConfigToCustomization(
  config: WidgetConfigResponse,
  fallbackWebhookUrl?: string
): Customization {
  const gradient = generateGradientFromColor(config.primaryColor);

  return {
    gradient,
    logo: config.logoUrl || null,
    supportLogo: config.supportLogoUrl || null,
    avatars: config.avatarUrl ? [config.avatarUrl] : [],
    webhookUrl: config.webhookUrl || fallbackWebhookUrl,
    botName: config.botName,
    welcomeMessage: config.welcomeMessage,
    homepageHeading: config.homepageHeading,
    position: config.position,
    primaryColor: config.primaryColor,
    launcherText: config.launcherText,
    tagline: config.tagline,
    showBranding: config.showBranding,
  };
}
