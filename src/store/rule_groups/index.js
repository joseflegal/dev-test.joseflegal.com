import actions from "@/store/actions_types";
import mutations from "@/store/mutations_types";
import api from "@/api";

const rule_groups = {
  namespaced: true,
  state: {
    rule_groups: [],
  },
  actions: {
    [actions.getAll]({ commit }) {
      return api.rule_groups.get().then((res) => {
        commit(mutations.SET, res);
        return res;
      });
    },
    [actions.create]({ commit }, ruleGroupData) {
      return api.rule_groups.create(ruleGroupData).then((res) => {
        commit(mutations.CREATE, res);
        return res;
      });
    },
    [actions.updateOne]({ commit }, ruleGroupData) {
      return api.rule_groups.update(ruleGroupData).then((res) => {
        commit(mutations.UPDATE_ONE, res);
        return res;
      });
    },
    [actions.remove]({ commit }, ruleGroupId) {
      return api.rule_groups.remove({ id: ruleGroupId }).then(() => {
        commit(mutations.REMOVE, ruleGroupId);
      });
    },
  },
  mutations: {
    [mutations.SET](state, payload) {
      state.rule_groups = payload;
    },
    [mutations.CREATE](state, ruleGroup) {
      state.rule_groups.push(ruleGroup);
    },
    [mutations.UPDATE_ONE](state, updatedRuleGroup) {
      const index = state.rule_groups.findIndex(
        (ruleGroup) => ruleGroup.id === updatedRuleGroup.id
      );
      if (index !== -1) {
        state.rule_groups.splice(index, 1, updatedRuleGroup);
      }
    },
    [mutations.REMOVE](state, ruleGroupId) {
      state.rule_groups = state.rule_groups.filter(
        (ruleGroup) => ruleGroup.id !== ruleGroupId
      );
    },
  },
};

export default rule_groups;
