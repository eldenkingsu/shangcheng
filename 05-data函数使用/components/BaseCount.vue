<template>
  <div class="base-count">
    <button @click="count--">-</button>
    <span>{{ count }}</span>
    <button @click="count++">+</button>
  </div>
  
</template>

<script>
export default {
  data () {
    console.log('data函数执行了');
    return{
      count:101
    }
  }
}
</script >

<style scoped>
  .base-count{
    margin: 20px;
  }
</style>  