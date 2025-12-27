# Atliso Chat Widget

A beautiful, modern React-based embeddable chat widget with TypeScript and Tailwind CSS.

## Features

- 🏠 **Multi-view Interface**: Home, Help, Chat, and Messages views
- 💬 **Real-time Chat**: Send text, attachments, GIFs, and voice messages
- 🎨 **Customizable**: Dynamic theming with gradient colors, logos, and avatars
- 📱 **Responsive**: Works great on desktop and mobile
- 🔊 **Notifications**: Sound notifications for new messages
- 💾 **Persistent**: Chat history saved to localStorage
- 🌐 **Embeddable**: Easy to embed on any website

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

### Embedding

Add the following code to your website:

```html
<div id="atliso-chat-root"></div>
<script src="https://your-cdn.com/atliso-chat-widget.umd.js"></script>
<script>
  AtlisoChatWidget.mount('#atliso-chat-root', {
    organizationId: 'your-org-id',
    apiBaseUrl: 'https://app.atliso.com',
    webhookUrl: 'https://your-webhook-url'
  });
</script>
```

## Configuration Options

| Option | Type | Description |
|--------|------|-------------|
| `webhookUrl` | string | URL to send chat messages to |
| `organizationId` | string | Organization ID for API-based customization |
| `apiBaseUrl` | string | Base URL for fetching customization |
| `inline` | boolean | Render widget inline instead of fixed position |
| `initialOpen` | boolean | Start with the widget open |
| `hideButton` | boolean | Hide the floating chat button |
| `customization` | object | Direct customization (gradient, logo, avatars) |

## Customization

### Via API

The widget can fetch customization from your API:

```
GET ${apiBaseUrl}/api/chatbot/customization/${organizationId}
```

Expected response:

```json
{
  "organizationId": "xxx",
  "webhookUrl": "https://...",
  "gradient": {
    "color1": "#0ea5e9",
    "color2": "#14b8a6",
    "color3": "#0d9488",
    "color4": "#a7f3d0"
  },
  "avatars": ["https://...", "https://..."],
  "logo": "https://example.com/logo.png"
}
```

### Direct Customization

Pass customization directly in the mount options:

```javascript
AtlisoChatWidget.mount('#root', {
  webhookUrl: 'https://...',
  customization: {
    gradient: {
      color1: '#0ea5e9',
      color2: '#14b8a6',
      color3: '#0d9488',
      color4: '#a7f3d0'
    },
    logo: 'https://example.com/logo.png',
    avatars: ['https://...', 'https://...']
  }
});
```

## Project Structure

```
src/
├── components/
│   ├── ChatWidget.tsx       # Main widget component
│   ├── shared/              # Shared components
│   ├── views/               # View components (Home, Help, Chat, Messages)
│   └── chat/                # Chat-specific components
├── stores/
│   └── chatStore.ts         # Zustand state management
├── hooks/                   # Custom React hooks
├── utils/                   # Utility functions
├── types/                   # TypeScript type definitions
└── index.tsx                # Library entry point
```

## License

MIT
