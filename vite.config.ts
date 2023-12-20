import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import EnvironmentPlugin from 'vite-plugin-environment'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    EnvironmentPlugin({
      DASHBOARD_BACKEND_URL: 'http://localhost:3001',
      POLLING_INTERVAL_SECONDS: '1'
  })],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 3000,
  }
})
