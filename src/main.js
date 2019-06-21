import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import SvgIcon from "vue-svgicon";
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(SvgIcon, {
  tagName: "svgicon"
});
Vue.use(Vue2TouchEvents);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
