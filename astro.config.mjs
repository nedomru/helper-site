import { defineConfig } from "astro/config";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://helper.chrsnv.ru",

  // Image optimization service
  image: {
    remotePatterns: [],
  },

  integrations: [],

  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },

  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
