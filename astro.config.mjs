import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// Change to your custom domain when ready (e.g. https://addisonsans.com).
// Until then, the free Vercel subdomain works too.
const SITE = process.env.SITE_URL ?? "https://addisonsans.com";

export default defineConfig({
  site: SITE,
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "github-light",
      wrap: true,
    },
  },
  build: {
    format: "directory",
  },
});
