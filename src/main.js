import * as Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/components/globals/globals";
import "@/styles/admin.scss";

const app = Vue.createApp(App).use(router).use(store);
app.mount("#app");
