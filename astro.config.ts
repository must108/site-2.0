import { defineConfig, type AstroUserConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  stylesheets: [
    'global.css',
  ]
} as AstroUserConfig);