import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000,
    host: true
  },
  base: process.env.VITE_BASE_PATH || "/"
})
