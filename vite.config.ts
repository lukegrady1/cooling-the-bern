import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/cooling-the-bern/',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
