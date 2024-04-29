<template>
  <div id="app">
    <h1>根组件-{{ title }}</h1>
    <input type="text" :value="count" @input="handleInput">
    <Son1></Son1>
    <hr>
    <Son2></Son2>
  </div>
</template>

<script>
import Son1 from './components/Son1.vue' 
import Son2 from './components/Son2.vue'

import { mapState } from 'vuex'
console.log(mapState(['count','tltle']));
export default {
  name: 'app',
  created(){
    //console.log(this.$store.state.count);
  },
  computed:{
    //设置全局数据的
    ...mapState(['count','title'])
  },
  data: function () {
    return {

    }
  },
  components: {
    Son1,
    Son2
  },
  methods:{
    handleInput(e){
      //实时获取input值
      this.$store.commit('setCount',+e.target.value)
    }
  }
}
</script>

<style>
#app {
  width: 600px;
  margin: 20px auto;
  border: 3px solid #ccc;
  border-radius: 3px;
  padding: 10px;
}
</style>