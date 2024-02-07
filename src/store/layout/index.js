// store/modules/layout.js
import api from "@/api";

const state = {
  files: [],
};

const mutations = {
  setFiles(state, files) {
    state.files = files;
  },
};

const actions = {
  fetchFiles({ commit }) {
    return api.files.get().then((res) => {
      commit('setFiles', res);
    });
  },
};

const getters = {
  filteredAndSortedFiles(state) {
    const kittenFiles = state.files.filter((file) =>
      file.tags.toLowerCase().includes('kitten')
    );
    return kittenFiles.sort((a, b) => new Date(b.date) - new Date(a.date));
  },
};

const layout = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default layout;