import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: true,
    allowedHosts: [
      'database-landing.ghcqya.easypanel.host',
      'tutink.online',
      'www.tutink.online',
      '.easypanel.host'
    ]
  }
})