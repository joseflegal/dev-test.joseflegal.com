import Vue from "vue";
import actions from "@/store/actions_types";
import mutations from "@/store/mutations_types";
import api from "@/api";

const file = {
  namespaced: true,
  state: {
    files: [],
  },
  getters: {
    getAllFiles: (state) => {
      return state.files;
    },
  },
  actions: {
    [actions.getAll]({ commit }) {
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

export default file;
