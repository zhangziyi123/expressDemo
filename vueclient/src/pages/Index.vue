<template>
  <div class="app-wrapper">
    <app-header></app-header>
    <app-sidebar :active="active"></app-sidebar>
    <app-content></app-content>
  </div>
</template>

<script>
import Header from "./layout/Header.vue";
import Content from "./layout/Content.vue";
import Sidebar from "./layout/Sidebar.vue";

export default {
  name: "index",
  components: {
    "app-header": Header,
    "app-sidebar": Sidebar,
    "app-content": Content
  },
  data() {
    return {
      active: ""
    };
  },
  created() {
    // this.$router.push({ path: "/index/home" }); // 默认导航到index
    // this.active = "首页"; // 设置功能项激活“首页”
  }
};
</script>

<style lang="less">
@import "./style/Index.less";
</style>
