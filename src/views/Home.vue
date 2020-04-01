<template>
  <div class="home">
    <div class="home-left">
      <Tabs active-key="0" @on-click="switchTab">
        <Tab-pane label="HTML">
          <div class="home-article" v-for="(item, index) in htmlList" :key="index">
            <h2>
              <span @click="navToDetails(item)">文章标题</span>
            </h2>
            <p>
              {{'文章内容文章内容文章内容\
              文章内容文章内容文章内容文\
              章内容文章内容文章内容文章内\
              容文章内容文章内容文章内容文\
              章内容文章内容文章内容文章内容\
              文章内容文章内容文章内容文章内容\
              文章内容文章内容文章内容文章内容文\
              章内容文章内容文章内容文章内容文章内\
              容文章内容文章内容'|ellipsis(80)}}
            </p>
          </div>
        </Tab-pane>
        <Tab-pane label="CSS">标签二的内容</Tab-pane>
        <Tab-pane label="JS">标签三的内容</Tab-pane>
        <Tab-pane label="Vue">标签三的内容</Tab-pane>
        <Tab-pane label="React">标签三的内容</Tab-pane>
        <Tab-pane label="其他">标签三的内容</Tab-pane>
      </Tabs>
    </div>
    <div class="home-right">
      <Card>
        <p slot="title">卡片标题</p>
        <p>
          {{'无边框内容填充无边框内容填充\
          无边框内容填充无边框内容填充无' | ellipsis(20)}}
        </p>
      </Card>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  private htmlList: any[] = [1, 2, 3];

  // tab切换时
  private switchTab(e: number): void {
    console.info(e);
  }

  // 跳转文章详情页
  private navToDetails(item: any) {
    // 指定this的类型为any，解决报错
    (this as any).$path("/articledetails", { articleId: item });
  }
}
</script>

<style lang="less" scope>
.home {
  width: 1100px;
  overflow: auto;
  margin: 0 auto;
  display: flex;
  .home-left {
    padding: 16px 50px;
    flex-grow: 1;
  }
  .home-right {
    padding: 16px;
    min-width: 320px;
  }
}
.home-article {
  width: 100%;
  border-bottom: 1px dotted hsla(0, 0%, 43.9%, 0.15);
  padding: 15px 7px 15px 0;
  > h2 {
    color: #333;
    font-weight: 700;
    font-size: 18px;
    > span {
      cursor: pointer;
      transition: color 0.3s;
      &:hover {
        color: #2780dd;
      }
    }
  }
  > p {
    margin-top: 7px;
    font-size: 14px;
    color: #666;
  }
}
.layout-content {
  min-height: 770px !important;
}
</style>
