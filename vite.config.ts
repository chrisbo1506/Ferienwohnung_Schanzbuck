import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Importiere das Cartographer-Plugin nur bei Bedarf
const cartographerPlugin =
  process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined
    ? require("@replit/vite-plugin-cartographer").cartographer()
    : null;

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    cartographerPlugin, // Füge das Plugin hier hinzu
  ].filter(Boolean), // Entferne null-Werte aus der Plugin-Liste
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"), // root bleibt unverändert
  build: {
    outDir: path.resolve(__dirname, "dist/public"), // Der Output-Ordner
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "client", "index.html"), // Pfad zu index.html
    },
  },
});
