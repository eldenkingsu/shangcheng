<template>
  <div class="app">
    我是结构
  </div>
</template>

<style>
  .app{
    width: 400px;
    height: 400px;
    background-color: pink;
  }
</style>

<script>
//导入当前配置的配置项，可以提供msethod，computed，watch，data等
export default{
  methods:{
    fn () {
      alert('你好')
    }
  }
}
</script>