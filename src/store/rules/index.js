import Vue from "vue";
import actions from "@/store/actions_types";
import mutations from "@/store/mutations_types";
import api from "@/api";

const rules = {
  namespaced: true,
  state: {
    rules: api.rules.get(),
  },
  getters: {
    getUser: (state) => {
      return state.rules;
    },
  },
  actions: {
    [actions.get]({ commit }) {
      return api.rules.get().then((res) => {
        commit(mutations.SET, res);
        return res;
      });
    },
  },
  mutations: {
    [mutations.SET](state, payload) {
      Vue.set(state, "rules", payload);
    },
  },
};

export default rules;
