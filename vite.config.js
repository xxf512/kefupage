import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        default: '/src/pages/default/index.html',
        demo:'/src/pages/demo/index.html',
      }
    },
    assetsDir: 'otherPageAssets'
  }
})