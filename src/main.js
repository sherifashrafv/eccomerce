import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "@fortawesome/fontawesome-free/css/all.css";
import "../public/Styles/main.css";
import Extend from "./layouts/custome.vue";
import Default from "./layouts/default.vue";
import VueImg from "v-img";
import Vuelidate from "vuelidate";
import axios from "axios";

// / baseUrl For Axios Get Products
document.documentElement.lang = lang;
let lang = localStorage.getItem("lang") || "en";
axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.headers["Accept-Language"] = lang;
// Cutsome layOuts
Vue.component("custome-layout", Extend);
Vue.component("default-layout", Default);
Vue.use(VueImg);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
