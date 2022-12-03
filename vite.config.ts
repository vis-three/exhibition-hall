import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "https://shiotsukikaedesari.github.io/vis-three-exhibition-hall/",
  build: {
    outDir: "docs",
  },
  plugins: [vue()],
});
