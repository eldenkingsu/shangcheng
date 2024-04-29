import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//全局注册指令
// Vue.directive('focus', {
//   //inserted 会在指令所在元素被插入页面中时触发
//   inserted(el) {
//     el.focus()
//   }
// })
new Vue({
  render: h => h(App),
}).$mount('#app')
