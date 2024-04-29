//user 模块
const state={
  theme:'light',
  desc:'测试demo'
}
const mutations={
  setTheme(state,newTheme){
    state.theme=newTheme
  }
}
const actions ={}
const getters={
  UpperCaseName(state){
    return state.theme.toUpperCase()
  }
}

export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters
}
