import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://imoveisteresina.netlify.app",
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
