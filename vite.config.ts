import { defineConfig } from '@lovable.dev/vite-tanstack-config'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
  tanstackStart: {
    server: { entry: 'server' },
    spa: { enabled: true },
  },
  // Keep the public SPA output where the external hosting workflow expects it.
  // Lovable pins its own deployment output paths during platform builds.
  nitro: {
    output: {
      publicDir: 'dist/client',
      serverDir: 'dist/server',
    },
  },
})