import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Rules from "@/views/Rules.vue";
import actions from "@/store/actions_types";

const localVue = createLocalVue();
localVue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    modules: {
      rules: {
        namespaced: true,
        state: {
          rule_groups: {
            1: {
              logic: "all",
              rule_ids: [1, 4],
              rule_group_ids: [2],
            },
            2: {
              logic: "any",
              rule_ids: [2, 3],
              rule_group_ids: [],
            },
          },
          answers: {
            C: "abcdefghijklmnopqrstuvwxyz",
            A: "x",
            B: "Y",
            D: "foo bar",
          },
          rules: {
            1: {
              expected_answer: "z",
              operation: "contains",
              question_id: "C",
            },
            2: {
              expected_answer: "x",
              operation: "is",
              question_id: "A",
            },
            3: {
              expected_answer: "y",
              operation: "is not",
              question_id: "B",
            },
            4: {
              expected_answer: "1",
              operation: "is",
              question_id: "D",
            },
          },
        },
        getters: {
          getRuleGroups: (state) => state.rule_groups,
          getAnswers: (state) => state.answers,
          getRules: (state) => state.rules,
        },
        actions: {
          [actions.getAll]: jest.fn(() => Promise.resolve()),
        },
      },
    },
  });
};

describe("Rules", () => {
  let store;
  let wrapper;

  beforeEach(async () => {
    store = createStore();
    wrapper = shallowMount(Rules, { store, localVue });
    await wrapper.vm.fetchData();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should return false for a rule group with 'all' logic if at least one rule is invalid", () => {
    const ruleGroup = wrapper.vm.getRuleGroups[1];
    const result = wrapper.vm.checkGroup(ruleGroup);
    expect(result).toBe(false);
  });

  it("should return true for a rule group with 'any' logic if at least one rule is valid", () => {
    const ruleGroup = wrapper.vm.getRuleGroups[2];
    const result = wrapper.vm.checkGroup(ruleGroup);
    expect(result).toBe(true);
  });
});
