// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./style/index.less";
import Vue from 'vue'
import App from './App'
import router from './router'
import { directive as onClickOutside } from 'vue-on-click-outside'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import store from "./store";
Vue.use(iView);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
