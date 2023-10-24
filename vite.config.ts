import vue from '@vitejs/plugin-vue'
import eslintPlugin from "vite-plugin-eslint"
import {defineConfig} from 'vite'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    cors: false,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [vue(), eslintPlugin()]
})
