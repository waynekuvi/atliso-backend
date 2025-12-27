import React from 'react';
import { createRoot } from 'react-dom/client';
import type { Root } from 'react-dom/client';
import { ChatWidget } from './components/ChatWidget';
import type { MountOptions } from './types';
import './index.css';

// Store mounted instances
const mountedInstances = new Map<Element, Root>();

/**
 * Get organization ID from script tag data attribute
 */
function getOrgIdFromScriptTag(): string | null {
  const scripts = document.querySelectorAll('script[src*="atliso-chat-widget"]');
  for (const script of scripts) {
    const orgId = script.getAttribute('data-org-id');
    if (orgId) {
      console.log('[AtlisoChatWidget] Found data-org-id in script tag:', orgId);
      return orgId;
    }
  }
  
  // Also check for generic widget script names
  const genericScripts = document.querySelectorAll('script[data-org-id]');
  for (const script of genericScripts) {
    const src = script.getAttribute('src');
    if (src && (src.includes('chat') || src.includes('widget'))) {
      const orgId = script.getAttribute('data-org-id');
      if (orgId) {
        console.log('[AtlisoChatWidget] Found data-org-id in generic script tag:', orgId);
        return orgId;
      }
    }
  }
  
  return null;
}

/**
 * Get API base URL from script tag or use default
 */
function getApiBaseUrl(): string {
  const scripts = document.querySelectorAll('script[data-api-url]');
  for (const script of scripts) {
    const apiUrl = script.getAttribute('data-api-url');
    if (apiUrl) {
      console.log('[AtlisoChatWidget] Found data-api-url in script tag:', apiUrl);
      return apiUrl;
    }
  }
  
  // Default to localhost for development/testing
  // Change this to 'https://app.atliso.com' for production
  return 'http://localhost:3000';
}

/**
 * Mount the Atliso Chat Widget
 */
export async function mount(
  target: string | Element,
  options: MountOptions = {}
): Promise<void> {
  const container = typeof target === 'string' 
    ? document.querySelector(target) 
    : target;
  
  if (!container) {
    console.error('[AtlisoChatWidget] Mount target not found:', target);
    return;
  }
  
  if (mountedInstances.has(container)) {
    console.warn('[AtlisoChatWidget] Widget already mounted on target:', target);
    return;
  }
  
  // Validate required config
  if (!options.webhookUrl && !options.customization?.webhookUrl && !options.organizationId) {
    console.warn('[AtlisoChatWidget] No webhookUrl or organizationId provided');
  }
  
  // Create React root and render
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <ChatWidget options={options} />
    </React.StrictMode>
  );
  
  mountedInstances.set(container, root);
  console.log('[AtlisoChatWidget] Widget mounted successfully');
}

/**
 * Unmount the Atliso Chat Widget
 */
export function unmount(target: string | Element): void {
  const container = typeof target === 'string'
    ? document.querySelector(target)
    : target;
  
  if (!container) return;
  
  const root = mountedInstances.get(container);
  if (root) {
    root.unmount();
    mountedInstances.delete(container);
    console.log('[AtlisoChatWidget] Widget unmounted');
  }
}

// Create widget object for global access
export const AtlisoChatWidget = {
  mount,
  unmount,
};

// Auto-initialize on DOM ready if script tag has data-org-id
function autoInitialize() {
  const orgId = getOrgIdFromScriptTag();
  
  if (!orgId) {
    console.log('[AtlisoChatWidget] No data-org-id found, waiting for manual mount call');
    return;
  }
  
  console.log('[AtlisoChatWidget] Auto-initializing for organization:', orgId);
  
  // Create container if it doesn't exist
  let container = document.getElementById('atliso-chat-root');
  if (!container) {
    container = document.createElement('div');
    container.id = 'atliso-chat-root';
    document.body.appendChild(container);
  }
  
  // Get API base URL
  const apiBaseUrl = getApiBaseUrl();
  
  // Mount with organization ID
  mount(container, {
    organizationId: orgId,
    apiBaseUrl,
  }).catch(error => {
    console.error('[AtlisoChatWidget] Auto-initialization failed:', error);
  });
}

// Expose to window for UMD usage
if (typeof window !== 'undefined') {
  (window as unknown as { AtlisoChatWidget: typeof AtlisoChatWidget }).AtlisoChatWidget = AtlisoChatWidget;
  
  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoInitialize);
  } else {
    // DOM is already ready
    autoInitialize();
  }
}

// Export types
export type { MountOptions, Customization, GradientColors, Message, Thread } from './types';

