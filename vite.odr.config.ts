/* eslint-disable prefer-regex-literals */
/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import tsconfigPath from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPath(),
    viteSingleFile()
  ],
  mode: 'odr'
});