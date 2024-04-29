<template>
  <section id="app">
    <TodoHeader @add="handleAdd"></TodoHeader>
    <TodoMain :list="list" @Del="handleDel"></TodoMain>
    <TodoFooter :list="list" @clear="handleClear"></TodoFooter>
  </section>
  
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
  components:{
    TodoHeader,
    TodoMain,
    TodoFooter
  },
  
  data () {
    return {
      //将数据进行初次赋值，若本地存在数据则直接读取不进行赋值
      list:JSON.parse(localStorage.getItem('list')) ||
      [
        {id:1,name:'唱'},
        {id:2,name:'跳'},
        {id:3,name:'rap'}
      ]
    }
  },
  methods:{
    handleClear(){
      this.list=''
    },
    handleAdd(todoName){
      this.list.push({
        id:+new Date(),
        name:todoName
      })
    },
    handleDel (id){
      this.list=this.list.filter((item)=>item.id!=id)
    }
  },
  //监视变化，一旦发生变化则存入本地
  watch:{
    list:{
      deep:true,
      handler(newvalue){
        localStorage.setItem('list',JSON.stringify(newvalue))
      }
    }
  }
}
</script>

<style>

</style>
