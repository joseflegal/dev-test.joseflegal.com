import actions from "@/store/actions_types";
import mutations from "@/store/mutations_types";
import api from "@/api";

const answers = {
  namespaced: true,
  state: {
    answers: [],
  },
  actions: {
    [actions.getAll]({ commit }) {
      return api.answers.get().then((res) => {
        commit(mutations.SET, res);
        return res;
      });
    },
    [actions.create]({ commit }, answerData) {
      return api.answers.create(answerData).then((res) => {
        commit(mutations.CREATE, res);
        return res;
      });
    },
    [actions.updateOne]({ commit }, answerData) {
      return api.answers.update(answerData).then((res) => {
        commit(mutations.UPDATE_ONE, res);
        return res;
      });
    },
    [actions.remove]({ commit }, answerId) {
      return api.answers.remove({ id: answerId }).then(() => {
        commit(mutations.REMOVE, answerId);
      });
    },
  },
  mutations: {
    [mutations.SET](state, payload) {
      state.answers = payload;
    },
    [mutations.CREATE](state, answer) {
      state.answers.push(answer);
    },
    [mutations.UPDATE_ONE](state, updatedAnswer) {
      const index = state.answers.findIndex(
        (answer) => answer.id === updatedAnswer.id
      );
      if (index !== -1) {
        state.answers.splice(index, 1, updatedAnswer);
      }
    },
    [mutations.REMOVE](state, answerId) {
      state.answers = state.answers.filter((answer) => answer.id !== answerId);
    },
  },
};

export default answers;
