<template>
    <!-- 判断是否存在id，防止先渲染后得到数据 -->
  <div class="article-detail-page" v-if="item.id">
    <nav class="nav"><span @click="$router.back()" class="back"  cursor="">&lt;</span> 面经详情</nav>
    <header class="header">
      <h1>{{item.stem}}</h1>
      <p>{{item.createdAt}} | {{item.views}} 浏览量 | {{item.likeCount}}点赞数</p>
      <p>
        <img
          :src="item.creatorAvatar"
          alt=""
        />
        <span>青春少年</span>
      </p>
    </header>
    <main class="body">
      {{ item.content }}
    </main>
  </div>
</template>

<script>
// 请求地址: https://mock.boxuegu.com/mock/3083/articles/:id
// 请求方式: get
import axios from 'axios'
export default {
  async created(){
    const id= this.$route.params.id
    const res=await axios.get(`https://mock.boxuegu.com/mock/3083/articles/${id}`)
    console.log(res)
    this.item=res.data.result
  },
  name: "ArticleDetailPage",
  // created(){
  //  //const id= this.$route.query.id
  // console.log(this.$route.params.id); 
  //  //const id= this.$route.params.id
  // },
  data() {
    return {
       item:{}
    }
  }
}
</script>

<style lang="less" scoped>
.article-detail-page {
  .nav {
    height: 44px;
    border-bottom: 1px solid #e4e4e4;
    line-height: 44px;
    text-align: center;
    .back {
      font-size: 18px;
      color: #666;
      position: absolute;
      left: 10px;
      top: 0;
      transform: scale(1, 1.5);
    }
  }
  .header {
    padding: 0 15px;
    p {
      color: #999;
      font-size: 12px;
      display: flex;
      align-items: center;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .body {
    padding: 0 15px;
  }
}
</style>