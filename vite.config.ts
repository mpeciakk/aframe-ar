import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    server: { https: mode === "development" },
    plugins: [
      mkcert(),
      VitePWA({
        registerType: "prompt",
        manifest: {
          name: "PfizerVR",
          short_name: "PfizerVR",
          start_url: "/",
          display: "standalone",
          background_color: "#ffffff",
          lang: "en",
          scope: "/",
          icons: [
            {
              src: "/android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "any",
            },
            {
              src: "/android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any",
            },
          ],
          theme_color: "#ffffff",
        },
      }),
    ],
  };
});
