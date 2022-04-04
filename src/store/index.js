import Vue from "vue";
import Vuex from "vuex";

import user from "./user";
import file from "./file";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    file,
  },
});
