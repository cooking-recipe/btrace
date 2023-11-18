/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import tsconfigPath from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  plugins: [
    mkcert(),
    react(),
    tsconfigPath()
  ],
  server: {
    https: true,
    host: true,
    port: 10888
  }
});