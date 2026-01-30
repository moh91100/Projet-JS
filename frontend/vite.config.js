import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // IMPÉRATIF pour Docker : écoute sur toutes les adresses
    port: 5173,      // Le port officiel
    strictPort: true,
    watch: {
      usePolling: true, // Force la détection des fichiers sur ton Mac
    },
  }
})
