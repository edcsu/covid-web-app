import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { convertUnixTime } from "./Helpers/helperMethods";
import "./assets/css/main.css";

Vue.config.productionTip = false;

Vue.filter("unixToDate", function(value) {
  return value ? convertUnixTime(value) : 0;
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
