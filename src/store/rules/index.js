import Vue from "vue";
import actions from "@/store/actions_types";
import mutations from "@/store/mutations_types";
import api from "@/api";

const rules = {
  namespaced: true,
  state: {
    rules: [],
  },
  getters: {
    getRules: (state) => {
      return state.rules;
    },
  },
  actions: {
    [actions.getAll]({ commit }) {
      return api.rules.get().then((res) => {
        commit(mutations.SET, res);
      });
    },
  },
  mutations: {
    [mutations.SET](state, payload){
      Vue.set(state, "rules", payload);
    }
  }
};

export default rules;