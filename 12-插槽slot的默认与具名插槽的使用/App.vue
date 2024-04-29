<template>
  <div>
    <!-- 在组件标签内填入内容 -->
    <MyDialog>你确认删除马</MyDialog>
    <MyDialog>
      <!-- v-slot可以简写为# -->
      <template #content>我是修改的第一个内容</template>
      <template v-slot:sure>我是修改的第二个内容</template>
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from "./components/MyDialog.vue"
export default {
  data() {
    return {}
  },
  components: {
    MyDialog,
  },
}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>