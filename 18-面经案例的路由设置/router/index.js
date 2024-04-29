import Vue from 'vue'
import VueRouter from "vue-router";
import Layout from '@/views/Layout'
import ArticleDetail from '@/views/ArticleDetail.vue';
import Article from '@/views/Article.vue';
import Collect from '@/views/Collect.vue';
import Like from '@/views/Like.vue';
import User from '@/views/User.vue';
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      //设置页面一访问久访问子路由
      path: '/', component: Layout, redirect: 'article',
      //通过children配置项可以配置嵌套子路由
      //1.在children配置项配置出口
      //2.准备2级路由出口
      children: [
        { path: '/article', component: Article },
        { path: '/collect', component: Collect },
        { path: '/like', component: Like },
        { path: '/user', component: User },
      ]
    },
    { path: '/detail/:id', component: ArticleDetail },
  ]
})

export default router