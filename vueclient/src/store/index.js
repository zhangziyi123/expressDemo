/**
 * @author: zhang@glondon.com
 * @description:
 * @Date: 2018/3/4 19:13
 */

import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

/********  组件注册 ********/
Vue.use(Vuex);
Vue.use(VueResource);

/********  根目录级别状态 *********/


/********  各个模块 ********/
import users from './modules/users'

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    users
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

