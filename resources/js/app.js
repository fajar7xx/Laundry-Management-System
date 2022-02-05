import Vue from "vue";
import router from "./router";
import store from "./store";
import App from "./App";

// helpers
// ketikha membuat helper dan plugin
// ref https://vuejs.org/v2/guide/plugins.html
import "./helpers/GetImageHelper";

// import layout for specific needed
import Default from "./layouts/Default.vue";
import Blank from "./layouts/Blank.vue";

// import boostrap vue
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// import vue sweetalert 2
import VueSweetalert2 from "vue-sweetalert2";
// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";

// layout initialize in component global
Vue.component("default-layout", Default);
Vue.component("blank-layout", Blank);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

const swalOptions = {
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
};
Vue.use(VueSweetalert2, swalOptions);

const app = new Vue({
    el: "#app",
    router,
    store,
    render: (h) => h(App),
});
