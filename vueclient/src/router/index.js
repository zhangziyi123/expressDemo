import Vue from 'vue'
import Router from 'vue-router'
import store2 from "store2";
import Cookie from "js-cookie";
import PageIndex from "../pages/Index.vue";

Vue.use(Router)

const user = resolve => require(['../components/users/user.vue'], resolve)
const mapbox = resolve => require(['../components/projects/mapbox/mapbox.vue'], resolve)
const mbStart = resolve => require(['../components/projects/mapbox/mbStart.vue'], resolve)

const router = new Router({
  linkActiveClass: 'active',
  history: true,
  mode: 'history',
  routes: [
    {
      name: "index",
      path: "/index",
      component: PageIndex,
      children: [
        {
          path: 'mapbox',
          name: 'mapbox',
          component: mapbox,
          children: [
            {name: 'vectortile', path: 'vectortile', component: mbStart}
          ]
        }
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: user,
      children: [
        {name: 'home', path: 'user/home/*id', component: user}
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  let userInfo = Cookie("expressCookie");
  userInfo = userInfo && userInfo !== "undefined" ? JSON.parse(unescape(userInfo)) : "";
  if (userInfo) {
    store2.set("userInfo", userInfo);
  } else {
    store2.remove("userInfo");
  }
  let isRunNext = true;
  // 判断该路由是否需要登录权限
  if (isRunNext && !(from.fullPath !== "/" && from.fullPath.includes(to.fullPath))) {
    next(); // 如果路由地址带query参数，会执行两次beforeEach，并且第二次执行时会将query参数去掉
  } else {
    next(false); // 进入之前需要判断用户是否已经登录
  }
})

export default router
