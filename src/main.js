import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { convertUnixTime } from "./Helpers/helperMethods";

Vue.config.productionTip = false;

Vue.filter("unixToDate", function(value) {
  return convertUnixTime(value);
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
