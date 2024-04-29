<script setup>
  //子组件
  const props =defineProps({
    car:String,
    money:Number
  })
  //子穿父
  //1.在自诩见内部通过emit出发事件通过编译器宏获取
    const emit = defineEmits(['changeMoney'])
    const buy = ()=>{
      emit('changeMoney',10)
    }
</script>

<template>
  <div class="son">我是子组件 --{{ car }},{{money}}</div>
  <button @click="buy">花钱</button>
</template>
<style scoped>
.son{
  border: 2px solid black;
  padding: 30px;
}
</style>