import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const user = resolve => require(['../components/users/user.vue'], resolve)
const signin = resolve => require(['../components/login/signin.vue'], resolve)

const router = new Router({
  linkActiveClass: 'active',
  history: true,
  mode: 'history',
  routes: [
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
  if (!document.cookie) {
    if (to.name !== 'user') {
      router.push({name: 'user'})
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
