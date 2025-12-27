import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  define: mode === 'production' ? {
    'process.env': '{}',
    'process.env.NODE_ENV': '"production"',
  } : {},
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'AtlisoChatWidget',
      fileName: (format) => `atliso-chat-widget.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: [],
      output: {
        exports: 'named',
        globals: {},
        banner: (chunk) => {
          if (chunk.fileName.includes('umd')) {
            return `if (typeof process === 'undefined') { var process = { env: {} }; }\n`;
          }
          return '';
        },
      },
    },
  },
}))
