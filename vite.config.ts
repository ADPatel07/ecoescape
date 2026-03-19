import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const prerenderPlugin = mode === "production" 
    ? (await import("vite-plugin-prerender")).default 
    : null;

  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
        manifest: {
          name: "Ecoescape Mukteshwar",
          short_name: "Ecoescape",
          description: "Eco-friendly homestay in Mukteshwar with stunning Himalayan views",
          theme_color: "#059669",
          background_color: "#ffffff",
          display: "standalone",
          icons: [
            {
              src: "/og-image.jpg",
              sizes: "192x192",
              type: "image/jpeg"
            },
            {
              src: "/og-image.jpg",
              sizes: "512x512",
              type: "image/jpeg"
            }
          ]
        },
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg}"],
          maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB
          runtimeCaching: [
            {
              urlPattern: /^https?:\/\/.*/i,
              handler: "NetworkFirst",
              options: {
                cacheName: "ecoescape-cache",
                expiration: {
                  maxEntries: 100,
                  maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            },
            {
              urlPattern: /\.(?:webp|png|jpg|jpeg|svg)$/i,
              handler: "CacheFirst",
              options: {
                cacheName: "image-cache",
                expiration: {
                  maxEntries: 200,
                  maxAgeSeconds: 60 * 60 * 24 * 60 // 60 days
                }
              }
            }
          ]
        },
        // Disable inline service worker registration
        injectRegister: false,
        selfDestroying: false
      }),
      prerenderPlugin && prerenderPlugin({
        staticDir: path.join(__dirname, "dist"),
        routes: [
          "/",
          "/blog",
          "/blog/kumaoni-food-guide",
          "/blog/things-to-do-in-mukteshwar",
          "/blog/mukteshwar-mahadev-temple-guide",
          "/blog/mukteshwar-weather-guide",
          "/blog/stargazing-in-mukteshwar",
          "/blog/birdwatching-in-mukteshwar-guide",
          "/blog/mukteshwar-trekking-guide",
          "/blog/fruit-orchards-of-mukteshwar-guide",
          "/blog/mukteshwar-snowfall-guide",
          "/blog/mukteshwar-weekend-itinerary",
          "/blog/how-to-reach-mukteshwar-guide",
          "/blog/best-cafes-and-restaurants-in-mukteshwar",
          "/blog/workcation-guide",
          "/blog/romantic-getaway-guide",
          "/blog/solo-travel-guide",
          "/blog/family-vacation-guide",
          "/blog/monsoon-in-mukteshwar-guide",
          "/blog/best-photography-spots-in-mukteshwar",
          "/blog/local-festivals-and-culture-guide",
          "/blog/mukteshwar-ultimate-packing-list",
          "/rooms/suite-with-mountain-view",
          "/rooms/spacious-apartment",
          "/rooms/family-room",
          "/rooms/family-room-2",
        ],
        renderer: new (prerenderPlugin as any).PuppeteerRenderer({
          maxConcurrentRoutes: 1,
          renderAfterTime: 500,
        }),
      }),
    ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          // Keep room and blog pages separate
          if (id.includes("src/pages/rooms")) {
            return "room-pages";
          }
          if (id.includes("src/pages/blog")) {
            return "blog-pages";
          }
          // Don't split vendor chunks to avoid loading order issues
          return undefined;
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
    exclude: [],
  },
};
});
