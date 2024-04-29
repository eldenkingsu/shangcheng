<template>
  <div>
    <h1 v-color="color1">自定义指令1</h1>
    <h1 v-color="color2">自定义指令2</h1>
    <input v-focus ref="inp" type="text">
  </div>
</template>

<script>


export default {
  // mounted(){
  //   this.$refs.inp.focus()
  // } 
  data (){
    return{
      color1:'red',
      color2:'green'
    }
  },
  //局部注册指令
  directives:{
    //指令名：指令配置项
    focus:{
      inserted(el){
        el.focus()
      }
    },
    color:{
      //inseeted提供元素被添加到页面
      inserted(el,binding){
        //console.log(binding.value);
        el.style.color=binding.value
      },
      //当指令值被修改时执行请求
      update (el,binding){
        console.log('指令值被修改了');
        el.style.color=bind.value
      }
    }
  },
  
}
</script>

<style>

</style>