// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// import path from 'path'
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),tailwindcss()],
//     resolve: {
//     alias: {
//       '@src': path.resolve(__dirname, './src'),
//     },
//     server: {
//     host: true,               // allows access from network
//     port: 3000,               // dev server port
//     strictPort: true,
//     allowedHosts: ['all'],    // allows any host (including ngrok)
//   },
//   },
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
    },
  },

  server: {
    allowedHosts:true, // allows any host (including ngrok)
  },
});