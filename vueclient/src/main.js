// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { directive as onClickOutside } from 'vue-on-click-outside'
import Popover from "../src/common/popover/popover.vue";
import PopoverDirect from "../src/common/popover/directive";
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import zjgisui from 'zjgis-ui'
import Tooltip from "../src/common/core/tooltip/tooltip"

const ZJGISUI2 = {
  "gis-tooltip2": Tooltip
}
Vue.use(zjgisui);
Vue.component('gis-popover', Popover);
Vue.directive('on-click-outside', onClickOutside)
Vue.config.productionTip = false
Vue.use(PopoverDirect);
Vue.use(iView);
Object.keys(ZJGISUI2).forEach(key => {
  Vue.component(key, ZJGISUI2[key]);
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
