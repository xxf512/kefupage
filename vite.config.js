import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import babel from "@rollup/plugin-babel"

const path = require('path')

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      babel({
        plugins: [
          ["@babel/plugin-proposal-decorators", { "legacy": true }],
          ["@babel/plugin-proposal-class-properties", { "loose" : true }]
        ]
      }),
      legacy({
        targets: ['defaults', 'not IE 11']
      }),
    ],
    build: {
      rollupOptions: {
        input: {
          setting: '/src/pages/setting/index.html',
          demo:'/src/pages/demo/index.html',
        }
      },
      assetsDir: 'otherPageAssets'
    },
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    server: {
      proxy: {
        '/chat': 'http://testkefu.inke.cn/'
      }
    }
  }
})
