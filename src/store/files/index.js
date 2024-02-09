import actions from "@/store/actions_types";
import mutations from "@/store/mutations_types";
import api from "@/api";

const files = {
  namespaced: true,
  state: {
    files: [],
  },
  actions: {
    [actions.getAll]({ commit }) {
      return api.files.get().then((res) => {
        commit(mutations.SET, res);
        return res;
      });
    },
    [actions.create]({ commit }, fileData) {
      return api.files.create(fileData).then((res) => {
        commit(mutations.CREATE, res);
        return res;
      });
    },
    [actions.updateOne]({ commit }, fileData) {
      return api.files.update(fileData).then((res) => {
        commit(mutations.UPDATE_ONE, res);
        return res;
      });
    },
    [actions.remove]({ commit }, fileId) {
      return api.files.remove({ id: fileId }).then(() => {
        commit(mutations.REMOVE, fileId);
      });
    },
  },
  mutations: {
    [mutations.SET](state, payload) {
      state.files = payload;
    },
    [mutations.CREATE](state, file) {
      state.files.push(file);
    },
    [mutations.UPDATE_ONE](state, updatedFile) {
      const index = state.files.findIndex((file) => file.id === updatedFile.id);
      if (index !== -1) {
        state.files.splice(index, 1, updatedFile);
      }
    },
    [mutations.REMOVE](state, fileId) {
      state.files = state.files.filter((file) => file.id !== fileId);
    },
  },
};

export default files;
