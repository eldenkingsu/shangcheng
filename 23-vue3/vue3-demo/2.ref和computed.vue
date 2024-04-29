<script setup>
//1.reactive :接收一个对象类型的数据，返回一个响应式对象
  // import { reactive } from 'vue'
  // const state=reactive({
  //   count :100
  // })
  // const setCount =()=>{
  //   state.count++
  // }
  
  //2.ref：接收简单数据类型或复杂数据类型，返回响应式对象
  //   本质：是在原有传入数据基础上外层包了一层对象
  //,脚本中的需要加一层.value注意访问数据需要通过.value,template中不需要
  // import { ref } from 'vue'
  //   const count =ref(0)
  //   console.log(count.value);
  import {computed, ref} from 'vue'

    //声明数据
    const list =ref([1,2,3,4,5,6,7,8])
    console.log(list);
    console.log(list.value);
    const computedList =computed(()=>{
       return list.value.filter((item)=>item>2)
   })
</script> 

<template>
  <!-- <div>{{ state.count }}</div>
  <button @click="setCount">+1</button> -->
  <div> 原始数据：{{ list }}</div>
  <div>渲染后：{{ computedList }}</div>
</template>