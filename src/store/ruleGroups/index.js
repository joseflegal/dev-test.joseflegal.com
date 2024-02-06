import Vue from "vue";
import actions from "@/store/actions_types";
import mutations from "@/store/mutations_types";
import api from "@/api";

const ruleGroups = {
  namespaced: true,
  state: {
    ruleGroups: null,
  },
  getters: {
    getUser: (state) => {
      return state.ruleGroups;
    },
  },
  actions: {
    [actions.get]({ commit }) {
      return api.rule_groups.get().then((res) => {
        commit(mutations.SET, res);
        return res;
      });
    },
  },
  mutations: {
    [mutations.SET](state, payload) {
      Vue.set(state, "ruleGroups", payload);
    },
  },
};

export default ruleGroups;
