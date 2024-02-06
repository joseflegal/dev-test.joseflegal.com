// src/store/rules.js

import api from "@/api"; // Assuming you have a similar API setup for ruless

const rules = {
  namespaced: true,
  state: {
    answers: {},
    rule_groups: {},
    rules: {},
  },
  getters: {
    getAnswers: (state) => state.answers,
    getRuleGroups: (state) => state.rule_groups,
    getRules: (state) => state.rules,
  },
  actions: {
    fetchAnswers({ commit }) {
      // Use the 'get' method from the 'api.answers' object to fetch answers
      return api.answers
        .get()
        .then((answers) => {
          commit("setAnswers", answers);
        })
        .catch((error) => {
          console.error("Error fetching answers:", error);
          // Handle the error appropriately
        });
    },
    fetchRuleGroups({ commit }) {
      return api.rule_groups
        .get()
        .then((ruleGroups) => {
          commit("setRuleGroups", ruleGroups);
        })
        .catch((error) => {
          console.error("Error fetching ruleGroups:", error);
          // Handle the error appropriately
        });
    },
    fetchRules({ commit }) {
      return api.rules
        .get()
        .then((rules) => {
          commit("setRules", rules);
        })
        .catch((error) => {
          console.error("Error fetching rules:", error);
          // Handle the error appropriately
        });
    },
  },
  mutations: {
    setAnswers(state, answers) {
      state.answers = answers;
    },
    setRuleGroups(state, ruleGroups) {
      state.rule_groups = ruleGroups;
    },
    setRules(state, rules) {
      state.rules = rules;
    },
  },
};

export default rules;
