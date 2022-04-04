import Vue from "vue";
import Vuex from "vuex";

import user from "./user";
import file from "./file";
import answer from "./answer";
import rule from "./rule";
import ruleGroup from "./ruleGroup";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    file,
    answer,
    rule,
    ruleGroup,
  },
});
