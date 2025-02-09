import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // changing port from default to 3000
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: "http://localhost:8008",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
