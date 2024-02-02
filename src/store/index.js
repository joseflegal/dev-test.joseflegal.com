import Vue from "vue";
import Vuex from "vuex";

import user from "./user";
import layout from "./layout";
import rules from "./rules";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    layout,
    rules,
  },
});
