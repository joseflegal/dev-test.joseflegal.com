import Vue from "vue";
import actions from "@/store/actions_types";
import mutations from "@/store/mutations_types";
import api from "@/api";

const answers = {
  namespaced: true,
  state: {
    answers: [],
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
      });
    },
  },
  mutations: {
    [mutations.SET](state, payload){
      Vue.set(state, "answers", payload);
    }
  }
};

export default answers;