import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

/**
 * GitHub Pages build config.
 * Run: pnpm --filter @workspace/portfolio run build:github
 *
 * Set GITHUB_REPO_NAME env var to your repo name if hosting at:
 *   https://<username>.github.io/<repo-name>/
 *
 * Leave it empty (or unset) if hosting at:
 *   https://<username>.github.io/
 */
const repoName = process.env.GITHUB_REPO_NAME ?? '';
const base = repoName ? `/${repoName}/` : '/';

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': path.resolve(import.meta.dirname, '..', '..', 'attached_assets'),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, '../../docs'),
    emptyOutDir: true,
  },
});
