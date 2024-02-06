import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
import rules from "./rules";
import files from "./files";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    rules,
    files,
  },
});
