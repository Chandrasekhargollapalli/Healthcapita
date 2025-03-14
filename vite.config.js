import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Useful for file systems with issues
      interval: 100,    // File change polling interval
    },
    host: true,          // Exposes the server to the network
    port: 3000,
  },
  build: {
    chunkSizeWarningLimit: 1000, 
    // rollupOptions: {
    //   output: {
    //     manualChunks(id) {
    //       if (id.includes('node_modules')) {
    //         if (id.includes('react')) {
    //           return 'vendor-react'; // Separate React-related libraries
    //         }
    //         if (id.includes('chart')) {
    //           return 'vendor-charts'; // Separate chart libraries
    //         }
    //         return 'vendor'; // All other node_modules
    //       }
    //     },
    //   },
    // },
  },
})
