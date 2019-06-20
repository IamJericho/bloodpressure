import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/fontawesome";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Intro from "./components/Intro.vue";

Vue.config.productionTip = false;

Vue.component("get-pressure", Intro);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
