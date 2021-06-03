import Vue from "vue";
import actions from "@/store/actions_types";
import mutations from "@/store/mutations_types";
import api from "@/api";

const dashboard = {
  namespaced: true,
  state: {
    data: [],
  },
  getters: {
    getData: (state) => {
      return state.data;
    },
  },
  actions: {
    [actions.get]({ commit }) {
      return api.files.get().then((res) => {
        commit(mutations.SET, res);
        return res;
      });
    },
  },
  mutations: {
    [mutations.SET](state, payload) {
      Vue.set(state, "data", payload);
    },
  },
};

export default dashboard;
