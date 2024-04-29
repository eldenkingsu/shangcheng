<template>
  <div class="box">
    <h2>Son2 子组件</h2>
    从vuex中获取的值:<label>{{ $store.state.count }}</label>
    <br />
    <button @click="changeCountAction(5)">值 - 5</button>
    <div>
      {{ filterList }}
    </div>
    <hr>
    <button @click="setUser({name:'小美',age:18})">更新个人信息</button>
    <hr>
    <button @click="setUserSecond({name:'小美',age:18})">一秒后更新个人信息</button>
  </div>
</template>

<script>
import {mapMutations, mapActions, mapGetters} from 'vuex'
export default {
  name: 'Son2Com',
  methods:{
    //将subCount封装,使用辅助函数封装
    ...mapMutations(['subCount']),
    ...mapActions(['changeCountAction']),
    // handleSub(n){
    //   this.subCount(n)
    // }
    // handleSub(n){
    //   this.$store.commit('subCount',n)
    // }

    // handleSub(n){
    //   this.$store.dispatch('changeCountAction',n)
    // }
    // 分级模块的映射,映射modules中的setUsery与actions
    ...mapMutations('user',['setUser']),
    ...mapActions('user',['setUserSecond'])
  },
  computed:{
    ...mapGetters(['filterList'])
  }
}
</script>

<style lang="css" scoped>
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>