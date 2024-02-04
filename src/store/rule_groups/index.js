import Vue from "vue";
import actions from "@/store/actions_types";
import mutations from "@/store/mutations_types";
import api from "@/api";

const rule_groups = {
  namespaced: true,
  state: {
    rule_groups: [],
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
      });
    },
  },
  mutations: {
    [mutations.SET](state, payload){
      Vue.set(state, "rule_groups", payload);
    }
  }
};

export default rule_groups;