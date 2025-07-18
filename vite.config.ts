import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  // base: '/projects/tastegpt/',
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
  ],
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  resolve: {
    alias: {
      "@/components": path.resolve(__dirname, "src/components"),
      "@/features": path.resolve(__dirname, "src/features"),
      "@/assets": path.resolve(__dirname, "src/assets"),
      "@/hooks": path.resolve(__dirname, "src/hooks"),
      "@/store": path.resolve(__dirname, "src/store"),
      "@/api": path.resolve(__dirname, "src/api"),
      "@/utils": path.resolve(__dirname, "src/utils"),
      "@/types": path.resolve(__dirname, "src/types"),
      "@/pages": path.resolve(__dirname, "src/pages"),
      "@/": path.resolve(__dirname, "src/"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split dependencies by package
          if (id.includes("node_modules")) {
            // For each package, create a separate chunk
            const packageName = id.split("node_modules/")[1].split("/")[0];
            return `vendor-${packageName}`;
          }
        },
      },
    },
  },
});
