import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,              
    environment: 'jsdom',       
    setupFiles: [resolve(__dirname, 'setupTests.js')],
  }
})
