//存放vuex相关代码
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user.js'
import setting from './modules/setting.js'
Vue.use(Vuex)

const store =new Vuex.Store({
  //严格模式
  strict:true,

  //通过state可以提供数据
  state:{
    title:'大标题',
    count: 100,
    list:[1,2,3,4,5,6,7,8,9]
  },
  //通过mutations可以提供修改数据方法
  mutations:{
    //所有mutations函数第一个参数均为state，参数最多有两个
    addCount(state){
      state.count++
    },
    subCount(state,n){
      state.count-=n
    },
    changeTitle(state){
      state.title='改变啦'
    },
    setCount(state,n){
      state.count=n
    }
  },
  //actions处理异步
  actions:{
    //context 为上下文，此处可以当成store仓库
    //context.commit（mutation名字，额外参数）
    changeCountAction(context,num){
      //setTimeout 为异步操作
      setTimeout(() => {
        context.commit('subCount',num)
      }, 1000);
    }
  },
  //getters类似与计算属性,需要用state派生出一些状态时
  getters:{
    //1.形参第一个参数为state
    //2.必须带有返回值，返回值为getters的值
    filterList(state){
      return state.list.filter(item => item > 5)
    }
  },
  //通过modules模块引入modules中的
  modules:{
    namespace:true,
    user,
    setting
  }
})

export default store