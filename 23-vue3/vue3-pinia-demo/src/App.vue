<script setup>
  import Son1Com  from "@/components/Son1Com.vue";
  import Son2Com  from "@/components/Son2Com.vue";
  import { useCounterStore } from '@/store/counter'
  import {useChannelStore} from '@/store/channel'
  const counterStore=useCounterStore()
  const channelStore=useChannelStore()
  //进行解构丢失响应式
  //console.log(counterStore);
</script>

<template>
  <div> 
    <h3>APP.vue 根组件 
      -{{ counterStore.count }}
      -{{ counterStore.msg }}
    </h3>
    <hr>
    <Son1Com></Son1Com>
    <son2Com></son2Com>
    <hr>
    <button @click="channelStore.getList">获取频道数据</button>
    <ul>
      <li v-for="item in channelStore.channelList" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>
