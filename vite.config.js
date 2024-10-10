import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "lib/keynotes.js"),
      name: "keynotes",
      fileName: (format) => `keynotes.${format}.js`,
      formats: ["es", "umd"],
    },
  },
});
