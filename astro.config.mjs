// @ts-check
import { defineConfig } from 'astro/config';
import stylex from "vite-plugin-stylex";

import react from '@astrojs/react';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [react()],

  vite: {
    plugins: [stylex()]
  },

  adapter: node({
    mode: 'standalone'
  })
});
