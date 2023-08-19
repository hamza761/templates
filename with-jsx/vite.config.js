import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import options from './src/options.json'
import config from "vite-plugin-testing"
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
export default defineConfig((props) => {
  return {
    plugins: [
      config(options, props.command),
      vueJsx(),
    ],
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/main.js'),
        name: 'extension',
        formats: ['cjs'],
        fileName: 'main.js'
      },
      rollupOptions: {
        input: './src/main.js'
      }
    },
    server: {
      port: 4343,
      strictPort: true,

    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
