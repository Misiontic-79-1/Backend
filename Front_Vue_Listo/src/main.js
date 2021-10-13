import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";
import VueAxios from "vue-axios";

import css from "./assets/sass/custom.css";
import script1 from "./../node_modules/bootstrap/js/dist/base-component.js";
import script2 from "./../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
Vue.use(VueAxios, axios);

// import BootstrapVue from "bootstrap-vue";
// Vue.use(BootstrapVue);
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

axios.defaults.baseURL = "http://localhost:3000/api";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  css,
  script1,
  script2,
  render: (h) => h(App),
}).$mount("#app");
