<template>
  <div class="app">   
    <YangHeader></YangHeader>
  <!-- 头部组件 -->
    <YangMain></YangMain>
  <!-- 主体组件 -->
    <YangFooter></YangFooter>
  <!-- 尾部组件 -->
</div>
</template>

<script>
import YangHeader from './components/YangHeader.vue'
import YangMain from './components/YangMain.vue'
import YangFooter from './components/YangFooter.vue'
export default {
  components:{
    // '组件名':组件对象
    YangHeader,
    YangMain,
    YangFooter
  }
}
</script>
 
<style>
.app{
  width: 600px;
  height: 700px;
  background-color: #87ceeb;
  margin: 0 auto;
  padding: 20px;
}
</style>
