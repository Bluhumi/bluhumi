import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  server: {
    host: true,
    allowedHosts: ['.trycloudflare.com'],
  },
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({ 
      hostname: 'https://bluhumi.de',
      dynamicRoutes: ['/'] 
    }),
  ],
})
