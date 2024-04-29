<template>
<div class="my-tag">
         <input 
         v-focus
         ref="inp"
          v-if="isEdit"
           class="input"
           type="text"
           placeholder="输入标签"
           :value="value"
           @blur="isEdit=false"
           @keyup.enter="handleEnter"
         />
         <!-- 失去焦点让isEidt为false -->
  <div v-else 
  @dblclick="hangleClick"
  class="text">
     {{value}}
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      isEdit:false
    }
  },
  methods:{
    hangleClick(){
      this.isEdit=true
      //页面渲染为异步的需要等待渲染完毕后获取焦点
      // this.$nextTick(()=>{
      //   this.$refs.inp.focus()
      // })
    },
    handleEnter(e){
      //由于父组件为v-model，触发事件需要触发input事件
      console.log(e.target);
      this.$emit('input',e.target.value)
      this.isEdit=false
    }
  },
  props:{
    value:String
  }
}
</script>

<style lang="less" scoped>
.my-tag {
    cursor: pointer;
    .input {
      appearance: none;
      outline: none;
      border: 1px solid #ccc;
      width: 100px;
      height: 40px;
      box-sizing: border-box;
      padding: 10px;
      color: #666;
      &::placeholder {
        color: #666;
      }
    }
  }
</style>