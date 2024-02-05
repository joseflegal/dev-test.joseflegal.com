import Vue from "vue";
import actions from "@/store/actions_types";
import mutations from "@/store/mutations_types";
import api from "@/api";

const rules = {
  namespaced: true,
  state: {
    rule_groups: [],
    answers: [],
    rules: [],
  },
  getters: {
    getRuleGroups: (state) => state.rule_groups,
    getAnswers: (state) => state.answers,
    getRules: (state) => state.rules,
  },
  actions: {
    async [actions.getAll]({ commit }) {
      return Promise.all([
        api.rule_groups.get(),
        api.answers.get(),
        api.rules.get(),
      ]).then(([rule_groups, answers, rules]) => {
        commit(mutations.SET, { key: "rule_groups", value: rule_groups });
        commit(mutations.SET, { key: "answers", value: answers });
        commit(mutations.SET, { key: "rules", value: rules });
      });
    },
  },
  mutations: {
    [mutations.SET](state, { key, value }) {
      Vue.set(state, key, value);
    },
  },
};

export default rules;
