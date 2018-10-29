import Vue from 'vue'
import Router from 'vue-router'
import store2 from "store2";
import Cookie from "js-cookie";
import PageIndex from "../pages/Index.vue";

Vue.use(Router)

const user = resolve => require(['../components/users/user.vue'], resolve)
const mapbox = resolve => require(['../components/projects/mapbox/mapbox.vue'], resolve)
const mbStart = resolve => require(['../components/projects/mapbox/mbStart.vue'], resolve)
const observer = resolve => require(['../components/observer/observer.vue'], resolve)
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
          path: 'observer',
          name: 'observer',
          component: observer
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

export default router
