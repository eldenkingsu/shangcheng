<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    从vuex中获取的值: <label>{{ $store.state.count }}</label>
    <br>
    <button @click="handleAdd">值 + 1</button>
    <button @click="handleTitle">改标题</button>
    <hr>
    <div>{{ $store.state.list }}</div>
    <hr>
    <div>{{ user.userInfo.name }}</div>
    <!-- 使用mapState访问使用命名空间寻找数据 -->
    <div>stting模块数据：{{ theme }}-{{ desc }}</div>
      <hr>
    <!-- 访问模块中的getters 通过直接映射与映射 -->
    <div>{{ $store.getters['user/UpperCaseName'] }}</div>
    <button @click="handleName">更新个人信息</button>
    <button @click="handleName2">一秒后跟跟新信息</button>
    <div>{{ UpperCaseName }}</div>
    <button @click="handleColor">更新主题颜色</button>
  </div>
</template>

<script>
//使用map计算属性与方法简化命名映射
import {mapState,mapGetters} from 'vuex'
export default {
  name: 'Son1Com',
  methods:{
    handleAdd(){
      //严格模式报错，且难以维护
      //this.$store.state.count++
     // console.log(this.$store.state.count);
     this.$store.commit('addCount')
    },
    handleTitle(){
      this.$store.commit('changeTitle')
    },
    handleName(){
      this.$store.commit('user/setUser',{
      name:'小杨',
      age:22})
    },
    handleColor(){
      this.$store.commit('setting/setTheme','pink')
    },
    handleName2(){
      //调用action dispatch
      this.$store.dispatch('user/setUserSecond',{
        name:'小杨',
        age:18
      })
    }
  },
  computed:{
      ...mapState(['user']),
      ...mapState('setting',['theme','desc']),
      ...mapGetters('user',['UpperCaseName'])
    }
}
</script>

<style lang="css" scoped>
.box{
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>