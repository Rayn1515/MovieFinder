import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import jsconfigPaths from "vite-jsconfig-paths"
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),jsconfigPaths()],
  base: '/movieFinder/',
  build: {
    chunkSizeWarningLimit: 1000, // Increase the chunk size limit to 1000 KB (default is 500 KB)
  },
})
