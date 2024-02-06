import Vue from "vue";
import Vuex from "vuex";

import user from "./user";
import rules from "./rules";
import ruleGroups from "./ruleGroups";
import answers from "./answers";
import files from "./layoutFiles";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    rules,
    ruleGroups,
    answers,
    files,
  },
});
