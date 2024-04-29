
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 导入持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'


const pinia =createPinia() //创建pinia实例
const app =createApp(App)
app.use(pinia.use(piniaPluginPersistedstate)).mount('#app')
