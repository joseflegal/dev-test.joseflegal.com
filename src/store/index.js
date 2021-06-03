import Vue from "vue";
import Vuex from "vuex";

import user from "./user";
import dashboard from "./dashboard";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    dashboard,
  },
});
