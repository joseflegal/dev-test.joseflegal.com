import Vue from "vue";
import Vuex from "vuex";

import user from "./user";
import files from "./files";
import answers from "./answers";
import rules from "./rules";
import rule_groups from "./rule_groups";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    files,
    answers,
    rules,
    rule_groups,
  },
});
