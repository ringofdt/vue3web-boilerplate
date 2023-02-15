
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import UnheadVite from '@unhead/addons/vite'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
  ,vue()
  ,UnheadVite()
],
  server: {
    port: 5050,
    hot: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
    }
  }
})
