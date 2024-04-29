import Vue from 'vue'
import App from './App.vue'
// 编写导入在顶部写
import YangButton from './components/YangButton.vue'
Vue.config.productionTip = false


//进行全局注册->在所有范围内都能直接使用
// vue.component(组件名，组件对象)
Vue.component('YangButton', YangButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
//与el：''作用一致为选择器，指定为vue管理的容器
