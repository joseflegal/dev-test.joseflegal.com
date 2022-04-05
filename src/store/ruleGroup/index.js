import Vue from "vue";
import actions from "@/store/actions_types";
import mutations from "@/store/mutations_types";
import api from "@/api";

const ruleGroup = {
  namespaced: true,
  state: {
    rule_groups: false,
  },
  getters: {
    getRuleGroups: (state) => {
      return state.rule_groups;
    },
  },
  actions: {
    [actions.getAll]({ commit }) {
      return api.rule_groups.get().then((res) => {
        commit(mutations.SET, res);
        return res;
      });
    },
  },
  mutations: {
    [mutations.SET](state, payload) {
      Vue.set(state, "rule_groups", payload);
    },
  },
};

export default ruleGroup;
