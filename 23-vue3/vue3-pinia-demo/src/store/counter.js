import { defineStore} from 'pinia'
import {ref} from 'vue'
//定义store
//definestore（仓库唯一标识，（）=>{}）
export const useCounterStore = defineStore ('counter',()=>{
  //声明数据 state
  const count =ref(100)
  //声明操作数据的方法 action
  const addCount=()=>{
    count.value++
  }
  const subCount=()=>{
    count.value--
  }
  //声明基于数据派生的计算属性 getters

  //声明数据state -msg
  const msg =ref('hello pinia')
  return {
    count,
    msg,
    addCount,
    subCount
  }
},{
  persist:{
    key:'yangcount',
    paths:['count']
  }
})