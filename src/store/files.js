// src/store/files.js
import api from "@/api"; // Ensure this is the correct path to your API function

const files = {
  namespaced: true,
  state: {
    files: [], // Array to hold file objects
  },
  getters: {
    filteredFiles: (state) =>
      state.files
        .filter((file) => file.tags.includes("kitten"))
        .sort((a, b) => new Date(a.date) - new Date(b.date)),
  },
  actions: {
    fetchFiles({ commit }) {
      api.files.get().then((res) => {
        commit("setFiles", res);
      });
    },
  },
  mutations: {
    setFiles(state, files) {
      state.files = files;
    },
  },
};

export default files;
