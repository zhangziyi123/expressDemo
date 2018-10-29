/**
 * @author: zhang@glondon.com
 * @description:
 * @Date: 2018/3/4 19:13
 */

import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

/********  各个模块 ********/
import users from './modules/users'
/********  组件注册 ********/
Vue.use(Vuex)
Vue.use(VueResource)
Vue.http.interceptors.push(function (request, next) {
  //拦截器
  // 跨域携带cookie
  request.credentials = true; // 设置每次请求都带上cookie
  next()
})
/********  根目录级别状态 *********/

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    users
  },
  strict: debug
})

