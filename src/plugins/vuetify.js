import Vue from "vue";
import Vuetify from "vuetify/lib";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  theme: {
    themes: {
      light: {
        primary: "#9c27b0",
        accent: "#ffc107",
        error: "#f44336",
        warning: "#ff9800",
        info: "#2196f3",
        success: "#8bc34a"
      }
    }
  }
});
