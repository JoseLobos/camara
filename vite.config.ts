import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Permite definir un directorio de salida absoluto mediante la variable BUILD_OUT_DIR
// Ej: BUILD_OUT_DIR=/opt/app/camara/dist npm run build
const outDir = process.env.BUILD_OUT_DIR || 'dist'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true,
        // Reescribe solo si es necesario, aquí se mantiene /api
      }
    }
  }
})
