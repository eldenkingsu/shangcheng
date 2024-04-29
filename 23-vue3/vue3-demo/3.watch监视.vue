

<script setup>
import {ref ,watch} from 'vue'
const count =ref(0)
const nickname=ref('张三')
const changeCount=()=>{
  count.value++
}
const changeName=()=>{
  nickname.value='mryang'
}
//监视单个数据的变化
//watch(ref对象,new(newValue,oldValue=>{...})
//1.监视单个数据的变化
// watch(count,(newValue,oldValue)=>{
//   console.log(newValue,oldValue)
// })
//2.监视多个数据的变化
//  watch([ref对象1，ref对象2],(newArr,oldArr)=>{})
// watch([count,nickname],(newArr,oldArr)=>{
//   console.log(newArr,oldArr);
// })
//3.immediate 立刻执行
watch(count,(newValue,oldValue)=>{
  console.log(newValue,oldValue);
},{
  immediate:true
})

const userInfo=ref({
  name:'zs',
  age:18
})
const setUserInfo=()=>{
  // userInfo.value={name:'mryang',age:22}
  userInfo.value.age++
}
//4.监视整个userInfo当userInfo.value整个变化时才发生变化,开启deep：true内部变化也会监视
// watch(userInfo,(newValue)=>{
//   console.log(newValue);
// },{
//   deep:true
// }
// )

//5.精确监听
watch(
  ()=>userInfo.value.age,
  (newVlaue,oldValue)=>console.log(newVlaue,oldValue)
)
</script> 

<template>
  <div>{{ count  }}</div>
  <button @click="changeCount">改数字</button>
  <div>{{ nickname }}</div>
  <button @click="changeName">改昵称</button>
  <div>--------------</div>
  <div>{{ userInfo }}</div>
  <button @click="setUserInfo">修改userInfo</button>
</template>