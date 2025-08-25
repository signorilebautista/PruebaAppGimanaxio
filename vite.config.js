import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        // Asegúrate de que todas estas rutas tengan el nombre de tu repositorio
        name: "GoodLife Center - Entrenamiento",
        short_name: "GoodLife",
        description: "Aplicación para reservar clases y gestionar tu entrenamiento",
        start_url: "/PruebaAppGimanaxio/",
        display: "standalone",
        background_color: "#0066cc",
        theme_color: "#0066cc",
        orientation: "portrait",
        scope: "/PruebaAppGimanaxio/",
        icons: [
          {
            src: "/PruebaAppGimanaxio/icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "/PruebaAppGimanaxio/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    })
  ],
  base: '/PruebaAppGimanaxio/',
  build: {
    outDir: 'docs'
  }
});