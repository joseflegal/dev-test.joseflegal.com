import Vue from "vue";
import actions from "@/store/actions_types";
import mutations from "@/store/mutations_types";
import api from "@/api";

const files = {
  namespaced: true,
  state: {
    files: null,
  },
  getters: {
    getUser: (state) => {
      return state.files;
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
      Vue.set(state, "files", payload);
    },
  },
};

export default files;
