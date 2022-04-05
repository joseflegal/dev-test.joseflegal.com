import Vue from "vue";
import actions from "@/store/actions_types";
import mutations from "@/store/mutations_types";
import api from "@/api";

const answer = {
  namespaced: true,
  state: {
    answers: false,
  },
  getters: {
    getAnswers: (state) => {
      return state.answers;
    },
  },
  actions: {
    [actions.getAll]({ commit }) {
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

export default answer;
