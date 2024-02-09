import actions from "@/store/actions_types";
import mutations from "@/store/mutations_types";
import api from "@/api";

const rules = {
  namespaced: true,
  state: {
    rules: [],
  },
  actions: {
    [actions.getAll]({ commit }) {
      return api.rules.get().then((res) => {
        commit(mutations.SET, res);
        return res;
      });
    },
    [actions.create]({ commit }, ruleData) {
      return api.rules.create(ruleData).then((res) => {
        commit(mutations.CREATE, res);
        return res;
      });
    },
    [actions.updateOne]({ commit }, ruleData) {
      return api.rules.update(ruleData).then((res) => {
        commit(mutations.UPDATE_ONE, res);
        return res;
      });
    },
    [actions.remove]({ commit }, ruleId) {
      return api.rules.remove({ id: ruleId }).then(() => {
        commit(mutations.REMOVE, ruleId);
      });
    },
  },
  mutations: {
    [mutations.SET](state, payload) {
      state.rules = payload;
    },
    [mutations.CREATE](state, rule) {
      state.rules.push(rule);
    },
    [mutations.UPDATE_ONE](state, updatedRule) {
      const index = state.rules.findIndex((rule) => rule.id === updatedRule.id);
      if (index !== -1) {
        state.rules.splice(index, 1, updatedRule);
      }
    },
    [mutations.REMOVE](state, ruleId) {
      state.rules = state.rules.filter((rule) => rule.id !== ruleId);
    },
  },
};

export default rules;
