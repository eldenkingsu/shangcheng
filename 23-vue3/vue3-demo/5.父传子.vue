<script setup>
  //父传子
  //1.给子组件，添加属性方式传值
  //2.在子组件通过pros接收
  import {ref } from 'vue'
import sonCom from '@/components/son.vue'

const money=ref(100)
const getMoney=()=>{
    money.value+=10
}
const changeFn=(sub)=>{
  money.value-=sub
}
</script>

<template>
  <div>
    <button @click="getMoney">挣钱</button>
    <!-- 给子组件传值 -->
    <sonCom car="宝马车" :money="money" @changeMoney="changeFn"></sonCom>
  </div>
</template>