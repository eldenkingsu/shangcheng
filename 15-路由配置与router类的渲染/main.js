import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
// 路由的使用步骤 5 + 2
// 5个基础步骤
// 1. 下载 v3.6.5
// 2. 引入
// 3. 安装注册 Vue.use(Vue插件)
// 4. 创建路由对象
// 5. 注入到new Vue中，建立关联


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
