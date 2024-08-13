import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:5000"
      }
    }
  },
  build: {
    outDir: 'dist', // Ensure this line is present to specify the output directory
  }
})
