import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import '@/utils/serviceIntercept.js'
import '@/theme/index.css'
import App from './App.vue'

createApp(App).use(ElementPlus)
createApp(App).mount('#app')
