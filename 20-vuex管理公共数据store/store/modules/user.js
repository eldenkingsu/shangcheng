//user 模块
const state={
  userInfo:{
    name:'zs',
    age:18
  },
}
const mutations={
  setUser(state,newUserInfo){
    state.userInfo=newUserInfo
  }
}
const actions ={
  setUserSecond(context,newUserInfo){
    setTimeout(() => {
      //一秒后调用mutation，context为上下文
      context.commit('setUser',newUserInfo)
    }, 1000);
  }
}
const getters={
  UpperCaseName(state){
    return state.userInfo.name.toUpperCase()
  }
}

export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters
}
