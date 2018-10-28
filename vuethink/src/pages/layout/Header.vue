<template>
<header class="main-header">
  <!-- Logo -->
  <a class="logo" @click.stop="toggleSidebar">
    <!-- 最小化 -->
    <span class="logo-mini">
      <a class="sidebar-toggle sidebar-toggle-c"
        data-toggle="offcanvas"
        role="button">
        <i class="fas fa-bars"></i>
        <span class="sr-only"></span>
      </a>
    </span>
    <!-- 正常 -->
    <span class="logo-lg">
      <a><i class="fa fa-map"></i></a>
      <a class="sidebar-toggle"
        data-toggle="offcanvas"
        role="button">
        <i class="fas fa-bars"></i>
        <span class="sr-only"></span>
      </a>
    </span>
  </a>
</header>
</template>

<script>
import { addClass, hasClass, removeClass } from "../../components/utils";
export default {
  data() {
    return {
      logo: require("../../../static/img/logo.png")
    };
  },
  methods: {
    linkToPortal() {
    },
    toggleSidebar() {
      let body = document.getElementsByTagName("body")[0];
      if (!hasClass(body, "sidebar-collapse")) {
        addClass(body, "sidebar-collapse");
      } else {
        removeClass(body, "sidebar-collapse");
      }
    }
  }
};
</script>
