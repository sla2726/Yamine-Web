import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // permite acesso externo
    strictPort: true, // evita que o Vite mude de porta automaticamente
    watch: {
      usePolling: true // força a escuta de arquivos a funcionar bem em ambientes virtuais
    },
    // Libera o host padrão da Replit
    allowedHosts: ['.replit.dev']
  }
});