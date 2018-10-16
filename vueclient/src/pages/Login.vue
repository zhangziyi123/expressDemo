<template>
  <div class="gis-login">
    <!--nav-->
    <header class="gis-login-navbar">
      <div class="gis-login-navbar-headwrap">
        <nav class="gis-login-navbar-left">
          <a href="#"
            class="gis-login-navbar-left-logo"> <img :src="logo"
              width="60%" /> </a>
          <ul class="gis-login-navbar-ul">
            <template v-for="(item, index) in navbarData">
              <li :key="index"
                @mouseover="mouseoverHandle(index)">
                <a href="#">{{item.title}}</a>
              </li>
            </template>
          </ul>
        </nav>
        <div class="gis-login-navbar-right">
          <ul>
            <router-link :to="{name: 'signin', params: {redirect: 'usercenter'}}"
              tag="li">
              <a href="#">登录</a>
            </router-link>
            <router-link :to="{name: 'signup'}"
              tag="li">
              <a href="#">注册</a>
            </router-link>
          </ul>
        </div>
      </div>

      <div class="gis-login-navbar-submenu">
        <div ref="submenuList"
          :key="key"
          v-for="(item, key) in navbarData"
          :class="['sub-menu-'+ key, 'sub-menu']">
          <dl :key="key"
            v-for="(val,key) in item.menu || []">
            <dt>
              <a href="#">{{val.title}}</a>
            </dt>
            <dd :key="index"
              v-for="(n,index) in val.menu || []">
              <a href="#">{{n.title}}</a>
            </dd>
          </dl>
        </div>
      </div>

    </header>
    <!-- 登录与注册 动态组件 TODO: 切换方式可以修改-->
    <div class="gis-login-content"
      @mouseover.stop="hideSubmenuList">
      <div class="gis-login-content-inner">
        <transition mode="out-in"
          name="fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <div class="gis-zjgis-footer">
      <span>技术支持:</span>
      <a href="http://www.zjgis.com">浙江省地理信息中心</a>
    </div>
  </div>
</template>

<!-- 操作步骤 需要改成SSO
  1.输入用户名密码进行登录，若登录失败则提示用户名或密码错误
  2.登录成功后将用户信息保存到浏览器中
 -->

<script>
  import * as serviceConfig from "../configs/serviceConfig";
  import { loginConstants } from "../store/ActionTypes";
  import store2 from "store2";
  export default {
    name: "login",
    data() {
      return {
        logo: require("assets/img/zjgislogo.png"),
        navbarData: require("../configs/navbarData") || [],
        transitionName: "slide-fade",
        mouseOverIndex: 0
      };
    },
    components: {},
    methods: {
      mouseoverHandle(index) {
        let submenus = this.$refs["submenuList"];
        if (index !== this.mouseOverIndex) {
          submenus[this.mouseOverIndex].style.display = "none";
        }
        this.mouseOverIndex = index;
        submenus[index].style.display = "block";
      },
      hideSubmenuList() {
        let submenus = this.$refs["submenuList"];
        submenus[this.mouseOverIndex].style.display = "none";
      }
    },
    mounted() {
      // 初始化时跳转到登录页面
      let path = this.$router.currentRoute.path;
      if (path.indexOf("signout") < 0) {
        let userInfo = store2.get("userInfo");
        userInfo ? this.$router.push({ name: "home" }) : this.$router.push({ name: "signin" });
      }
    }
  };
</script>

<style lang="less">
  @import "./style/Login.less";
</style>
