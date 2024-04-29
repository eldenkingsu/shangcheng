<template>
  <div class="app">
    我是父组件
    <!-- 给组件属性，添加属性传值 -->
    <MySon :title="myTitle" :age="age" @changeTitle="handleChange"></MySon>
  </div>
</template>

<script>
import MySon from './components/MySon.vue'

export default {
  data(){
    return{
      myTitle:'hello world',
      age:20,
      car:{
        brand:'宝马'
      }
    }
  },
  components:{
    MySon
  },
  methods:{
    handleChange(newtitle){
      this.myTitle=newtitle
      
    }
  }
}
</script>

<style>

</style>