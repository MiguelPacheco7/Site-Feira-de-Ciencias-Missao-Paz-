import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    watch: {
      usePolling: true,
      interval: 500,
    },
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
  },
})
