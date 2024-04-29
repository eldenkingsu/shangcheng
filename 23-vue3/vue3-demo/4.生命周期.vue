<script setup>
  import { onMounted } from 'vue'
  const getlist=()=>{
    console.log('发送请求，拿去数据');
  }
  //一进页面发送请求
  getlist()

  //如果有代码需要在mounted生命周期执行
  onMounted(()=>{
    console.log('mounted生命周期1');
  })
  onMounted(()=>{
    console.log('mounted生命周期2');
  })
</script>
<template>

</template>