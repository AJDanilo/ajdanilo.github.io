import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
const site = "https://ajdanilo.github.io";

export default defineConfig({
  ...(site ? { site } : {}),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    mdx({
      shikiConfig: {
        themes: {
          light: "github-light",
          dark: "github-dark",
        },
        defaultColor: false,
      },
    }),
    react(),
    sitemap(),
  ],
});
