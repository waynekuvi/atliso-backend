import { useEffect, useCallback } from 'react';
import { useChatStore } from '@/stores/chatStore';
import { DEFAULT_CUSTOMIZATION } from '@/utils/api';
import { cn } from '@/utils/cn';
import { ChatButton } from './shared/ChatButton';
import { ChatContainer } from './shared/ChatContainer';
import { ChatToast } from './shared/ChatToast';
import type { MountOptions } from '@/types';

interface ChatWidgetProps {
  options: MountOptions;
}

export function ChatWidget({ options }: ChatWidgetProps) {
  const {
    isOpen,
    isExpanded,
    initialize,
    customization,
    setCustomization,
    setWebhookUrl,
    showToast,
    toastMessage,
    setShowToast,
    setIsOpen,
  } = useChatStore();

  const loadCustomization = useCallback(async () => {
    console.log('[AtlisoChatWidget] loadCustomization called with options:', options);
    const customization = options.customization || null;
    
    // Priority 1: Direct customization
    if (customization) {
      console.log('[AtlisoChatWidget] Using direct customization:', customization);
      setCustomization({
        ...DEFAULT_CUSTOMIZATION,
        ...customization,
        gradient: {
          ...DEFAULT_CUSTOMIZATION.gradient!,
          ...(customization.gradient || {}),
        },
      });
    }
    // Priority 2: Fetch from API using new endpoint
    else if (options.organizationId && options.apiBaseUrl) {
      console.log('[AtlisoChatWidget] Fetching widget config from API', {
        organizationId: options.organizationId,
        apiBaseUrl: options.apiBaseUrl
      });
      // Import the new function
      const { fetchWidgetConfig } = await import('@/utils/api');
      const fetched = await fetchWidgetConfig(
        options.organizationId,
        options.apiBaseUrl
      );
      if (fetched) {
        setCustomization(fetched);
        if (fetched.webhookUrl) {
          setWebhookUrl(fetched.webhookUrl);
        }
      } else {
        // Fallback to defaults if fetch fails
        console.log('[AtlisoChatWidget] Using default customization (fetch failed)');
        setCustomization(DEFAULT_CUSTOMIZATION);
      }
    }
    // Priority 3: Use defaults
    else {
      console.log('[AtlisoChatWidget] Using default customization');
      setCustomization(DEFAULT_CUSTOMIZATION);
    }
    
    // Set webhook URL
    const webhookUrl = options.customization?.webhookUrl || options.webhookUrl || DEFAULT_CUSTOMIZATION.webhookUrl;
    if (webhookUrl) {
      setWebhookUrl(webhookUrl);
    }
  }, [options, setCustomization, setWebhookUrl]);

  // Initialize on mount
  useEffect(() => {
    initialize();
    loadCustomization();
  }, [initialize, loadCustomization]);

  const isInline = options.inline === true;
  const hideButton = options.hideButton === true;

  // Determine position classes based on customization
  const getPositionClasses = () => {
    if (isInline) return 'relative w-full h-full';
    if (isExpanded) return 'inset-0 bottom-0 right-0';
    
    const position = customization?.position || 'bottom-right';
    switch (position) {
      case 'bottom-left':
        return 'fixed bottom-5 left-5 z-[9999]';
      case 'top-right':
        return 'fixed top-5 right-5 z-[9999]';
      case 'top-left':
        return 'fixed top-5 left-5 z-[9999]';
      case 'bottom-right':
      default:
        return 'fixed bottom-5 right-5 z-[9999]';
    }
  };

  return (
    <div
      className={cn(
        'atliso-chat-widget-host',
        getPositionClasses()
      )}
    >
      {/* Chat Button (hidden when expanded) */}
      {!isInline && !hideButton && !isExpanded && <ChatButton />}
      
      {/* Chat Toast - shown when chat is closed */}
      {!isInline && !isOpen && showToast && (
        <ChatToast
          message={toastMessage}
          isVisible={showToast}
          onDismiss={() => setShowToast(false)}
          onOpen={() => setIsOpen(true)}
        />
      )}
      
      {/* Chat Container */}
      {(isOpen || isInline) && <ChatContainer isInline={isInline} />}
    </div>
  );
}
