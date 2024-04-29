<template>
  <div class="base-progress">
    <div 
      class="inner" 
      :style="{ width: w + '%' }">
      <span>{{ w }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    //类型校验
    //w:Number 简易模式校验
    w:{
      type:Number,
      //必填
      required:true,
      //默认值
      default:0,
      //自定义校验
      validator(value){
        if(value>=0 && value<=100)
        return true
        alert('请输入正确的值')
        return false
      }
    }
  }
}
</script>

<style scoped>
.base-progress {
  height: 26px;
  width: 400px;
  border-radius: 15px;
  background-color: #272425;
  border: 3px solid #272425;
  box-sizing: border-box;
  margin-bottom: 30px;
}
.inner {
  width: 50%;
  height: 20px;
  border-radius: 10px;
  text-align: right;
  position: relative;
  background-color: #409eff;
  background-size: 20px 20px;
  box-sizing: border-box;
  transition: all 1s;
}
.inner span {
  position: absolute;
  right: -20px;
  bottom: -25px;
}
</style>