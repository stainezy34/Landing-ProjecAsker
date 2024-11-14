import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Landing-ProjecAsker/',  // Set base to the root of the repository
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

