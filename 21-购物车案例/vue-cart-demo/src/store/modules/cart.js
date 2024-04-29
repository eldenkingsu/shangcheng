import axios from "axios"
export default{
  namespaced:true,
  state(){
    return{
      //购物车数据
      list:[]
    }
  },
  mutations:{
    updateList(state,newList){
      state.list=newList
    },
    updateCount(state,obj){
     //根据id找到对应count值修改,复杂数据为直接引用
     const goods=state.list.find(item=> item.id === obj.id)
     goods.count=obj.newCount
    }
  },
  actions:{
    //请求方式get
    async getList (context) {
      // 得到json-server模拟服务器中的数据
      const res =await axios.get('http://localhost:3000/cart')
      //console.log(res);
      context.commit('updateList',res.data)
    },
    async updataCountAsync(context,obj){
      //将修改跟新同步到后台数据
      await axios.patch(`http://localhost:3000/cart/${obj.id}`,{count: obj.newCount})
      // 将更新数据同步到前端
      context.commit('updateCount',{
        id:obj.id,
        newCount:obj.newCount
      })
    }
  },
  getters:{
    //商品总数
    total(state){
      return state.list.reduce((sum,item)=>sum + item.count,0)
    },
    //商品总价
    totalPrice(state){
      return state.list.reduce((sum,item)=>sum + item.count * item.price,0)
    }
  }
}