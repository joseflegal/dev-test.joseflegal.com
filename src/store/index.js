import Vue from "vue";
import Vuex from "vuex";

import user from "./user";
import api from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    files: [],
  },
  mutations: {
    setFiles(state, files) {
      state.files = files;
    },
  },
  actions: {
    fetchFiles({ commit }) {
      return api.files.get().then((res) => {
        commit("setFiles", res);
      });
    },
  },
  getters: {
    kittenFiles: (state) =>
      state.files.filter((file) => file.tags && file.tags.includes("kitten")),
    sortedKittenFiles: (state, getters) => {
      const kittenFilesCopy = [...getters.kittenFiles];
      return kittenFilesCopy.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
    },
  },
  modules: {
    user,
  },
});
