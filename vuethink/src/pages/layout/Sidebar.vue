v<template>
<aside class="main-sidebar">
  <section class="sidebar">
    <ul class="sidebar-menu">
      <template v-for="(item, index) in menu">
        <!--如果没有子标签直接显示父标签-->
        <li :key="index" :class="[{ active: isActive(item) ? true : false }]">
          <router-link :to="{ path: item.link }">
            <i class="fa" :class="item.icon"></i> <span>{{ item.name }}</span>
          </router-link>
        </li>
      </template>
    </ul>
    <ul class="account sidebar-menu">
      <li>
        <a class="logOut" @click="logOut"> <i class="fas fa-sign-out-alt"></i> <span>退出</span> </a>
      </li>
    </ul>
  </section>
</aside>
</template>

<script>
import menus from "../../configs/menu";
import store2 from "store2";
export default {
  data() {
    return {
      // TODO: 修改成从登陆信息中获取，登陆信息记录在store中 权限化
      menu: menus || []
    };
  },
  props: {
    active: String
  },
  methods: {
    logOut: function (event) {
      // 当前工作状态保存分为退出保存和关闭保存
      // 【待实现】提示用户处理当前工作状态
      event.preventDefault();
      // 退出单点登录
      // this.$store.dispatch(types.CLEAR_LOGIN_INFOS);// 置空登陆信息 这一步改到login.vue中执行
      this.$router.push({
        name: "signout"
      });
    },
    isActive(item) {
      // return this.$route.path.indexOf(item.routeLink) >= 0 || this.$route.path.indexOf(item.canactive) >= 0;
    }
  }
};
</script>


<style lang="less">
  .main-sidebar{
    background-color:#1f2325;
    color: #ffffff;
  }
</style>
