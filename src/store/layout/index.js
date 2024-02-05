import Vue from "vue";
import actions from "@/store/actions_types";
import mutations from "@/store/mutations_types";
import api from "@/api";

const layout = {
  namespaced: true,
  state: {
    files: [],
  },
  getters: {
    getFiles: (state) => state.files,
    getSortedFiles: (state) => {
      return state.files.sort((a, b) => new Date(a.date) - new Date(b.date));
    },
    getSortedFilesByTag: (_, getters) => (tag) => {
      const files = getters.getSortedFiles || [];
      return files.filter((file) => file.tags && file.tags.includes(tag));
    },
  },
  actions: {
    [actions.getAll]({ commit }) {
      return api.files.get().then((res) => {
        commit(mutations.SET, res);
      });
    },
  },
  mutations: {
    [mutations.SET](state, payload) {
      Vue.set(state, "files", payload);
    },
  },
};

export default layout;
