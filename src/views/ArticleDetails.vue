<template>
  <div class="article-details">
    <!-- <h1>articleId:{{articleId}}</h1> -->
    <h2 class="article-title">标题标题标题</h2>
    <p class="article-time">
      <span>发布时间：2020-3-28</span>
      <span>分类：javascript</span>
    </p>
    <div v-html="content" class="article-content"></div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class ArticleDetails extends Vue {
  // 文章id
  private articleId: any = -1;
  // 文章内容
  private content: string = "<h1>内容内容11</h1><p>内容内容2222</p>";

  private mounted(): void {
    this.articleId = this.$route.query.articleId;
    console.info(this.articleId);
  }
}
</script>

<style lang="less" scope>
.article-details {
  padding: 16px 50px;
  width: 1100px;
  margin: 0 auto;
  background-color:	#FFFFF0;
}
.article-title {
  font-size: 24px;
  color: #333;
  text-align: center;
}
.article-time {
  color: #999;
  font-size: 12px;
  margin: 20px 0;
  > span {
    margin-right: 22px;
  }
}
.article-content {
  text-indent: 2em;
  font-size: 16px;
  line-height: 1.5;
}
</style>