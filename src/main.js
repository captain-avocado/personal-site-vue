import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import { SimpleSVG } from 'vue-simple-svg'
// Vue.component('simple-svg', SimpleSVG)

import SvgIcon from "vue-svgicon";
Vue.use(SvgIcon, {
  tagName: "svgicon"
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
