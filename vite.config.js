import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['leaflet']
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "leaflet/dist/leaflet.css";`
      }
    }
  }
})
