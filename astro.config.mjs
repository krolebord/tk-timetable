import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import netlifyCMS from "/src/integrations/netlify-cms";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: { applyBaseStyles: false }
    }),
    svelte(),
    netlifyCMS()
  ]
});
