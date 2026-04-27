import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // ← ini harus ada

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),  // ← ini harus ada
  ],
})