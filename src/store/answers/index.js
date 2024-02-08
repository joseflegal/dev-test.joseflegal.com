import Vue from "vue";
import actions from "@/store/actions_types";
import mutations from "@/store/mutations_types";
import api from "@/api";

const answers = {
  namespaced: true,
  state: {
    answers: null,
  },
  getters: {
    getUser: (state) => {
      return state.answers;
    },
  },
  actions: {
    [actions.get]({ commit }) {
      return api.answers.get().then((res) => {
        commit(mutations.SET, res);
        return res;
      });
    },
  },
  mutations: {
    [mutations.SET](state, payload) {
      Vue.set(state, "answers", payload);
    },
  },
};

export default answers;
