// noinspection JSUnusedGlobalSymbols

import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [sveltekit()],
  server: {
    port: 80,
    hmr: {
      clientPort: 81
    },
    watch: {
      usePolling: true
    }
  }
};

export default config;
