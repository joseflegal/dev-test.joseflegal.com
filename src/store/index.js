import Vue from "vue";
import Vuex from "vuex";

import user from "./user";
import files from "./files";
import rules from "./rules";
import rule_groups from "./rule_groups";
import answers from "./answers";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    files,
    rules,
    answers,
    rule_groups,
  },
});
