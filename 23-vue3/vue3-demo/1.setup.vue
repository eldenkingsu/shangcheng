

<script setup>
//1.setup执行时机比beforeCreate还要早
//2.setup函数获取不了this
//3.数据和函数需要在setup最后return，再能在模板中运用
//4.通过setup语法糖来简化写法
  // export default{
  //   setup(){
  //     // 数据
  //     const message ='hello Vue3'
  //     //函数
  //     const logMseeage=()=>{
  //       console.log(message)
  //     }
  //     //console.log('setup函数')
  //     // return{
  //     //   message,
  //     //   logMseeage
  //     // }
  //   },
  //   beforeCreate(){
  //     //console.log('beforeCreate函数');
  //   }
  // const message='this is a message'
  // const logMessage=()=>{
  //   console.log(message);
  // }
    import {computed, ref} from 'vue'

    //声明数据
    const list =ref([1,2,3,4,5,6,7,8])
    console.log(list);
    console.log(list.value);
    const computedList =computed(()=>{
      return list
    })
</script>

<template>
    <!-- <div>{{ message }}</div>
    <button @click="logMessage">按钮</button> -->
</template>
