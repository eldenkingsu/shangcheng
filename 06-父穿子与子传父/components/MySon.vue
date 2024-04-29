<template>
  <div>
    我是son组件
    {{ title }} 
    {{ age }}
    <button @click="changeFn">修改title</button>
  </div>
</template>

<script>
export default {
  //接收父元素的传值
  props:['title','age'],
  methods:{
    changeFn(){
      //通过$emit,向父组件发送消息通知
      this.$emit('changeTitle','我是改变后的')
    }
  }

  
}

</script>

<style>

</style>