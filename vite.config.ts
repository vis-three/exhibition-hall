import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/exhibition-hall",
  build: {
    outDir: "docs",
  },
  plugins: [vue()],
});
