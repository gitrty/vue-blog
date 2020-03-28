
<template>
  <div class="layout">
    <Menu mode="horizontal" theme="dark" active-key="1" style="overflow: hidden;">
      <div class="layout-logo">
        <img src="./assets/logo.png" alt width="20" />
        <span>TITLE</span>
      </div>
      <div class="layout-nav clearfix">
        <Menu-item key="1" name="index">
          <router-link to="/">
            <Icon type="ios-navigate"></Icon>首页
          </router-link>
        </Menu-item>
        <Menu-item key="2" name="about">
          <router-link to="/about">
            <Icon type="ios-keypad"></Icon>关于
          </router-link>
        </Menu-item>
        <Menu-item
          key="3"
          name="search"
          style="float:right;height:60px;display: flex;
    align-items: center;"
        >
          <i-input :value.sync="searchMsg" placeholder="请输入..." style="width: 200px">
            <i-button slot="append" @click="search" icon="ios-search" style="width:40px"></i-button>
          </i-input>
        </Menu-item>
        <!-- <Menu-item key="3" name="three">
          <Icon type="ios-analytics"></Icon>导航三
        </Menu-item>
        <Menu-item key="4" name="four">
          <Icon type="ios-paper"></Icon>导航四
        </Menu-item>-->
      </div>
    </Menu>

    <div class="layout-content">
      <router-view />
    </div>

    <div class="layout-copy">2020-2020 &copy; TalkingData</div>

    <Back-top :height="100" :bottom="100">
      <div class="top">返回顶端</div>
    </Back-top>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class App extends Vue {
  // 搜索框
  private searchMsg: string = "";

  //搜索
  private search() {
    console.info("搜索");
  }
}
</script>
<style scoped lang="less">
.top {
  padding: 10px;
  background: rgba(0, 153, 229, 0.7);
  color: #fff;
  text-align: center;
  border-radius: 2px;
}
a {
  color: rgba(255, 255, 255, 0.7);
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  min-width: 1200px;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  > span {
    margin-left: 10px;
  }
}
.layout-nav {
  margin: 0 auto;
  padding-left: 150px;
}
.layout-assistant {
  width: 300px;
  margin: 0 auto;
  height: inherit;
}
.layout-breadcrumb {
  padding: 10px 15px 0;
}
.layout-content {
  min-height: 200px;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}
.layout-content-main {
  padding: 10px;
}
.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
</style>