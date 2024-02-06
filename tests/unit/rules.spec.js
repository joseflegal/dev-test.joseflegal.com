// tests/unit/Rules.spec.js
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Rules from "@/views/Rules.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Rules.vue", () => {
  let store;
  let getters;
  let actions;

  beforeEach(() => {
    getters = {
      getAnswers: () => ({
        A: "x",
        B: "w",
        C: "uvwxyz",
      }),
      getRuleGroups: () => ({
        1: {
          logic: "all",
          rule_ids: [1],
          rule_group_ids: [2],
        },
        2: {
          logic: "any",
          rule_ids: [2, 3],
          rule_group_ids: [],
        },
      }),
      getRules: () => ({
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
      }),
    };

    actions = {
      fetchAnswers: jest.fn(),
      fetchRuleGroups: jest.fn(),
      fetchRules: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        rules: {
          namespaced: true,
          state: {
            answers: getters.getAnswers(),
            rules: getters.getRules(),
            rule_groups: getters.getRuleGroups(),
          },
          getters,
          actions,
        },
      },
    });
  });

  it("renders and initializes correctly", () => {
    const wrapper = shallowMount(Rules, { store, localVue });
    expect(wrapper.exists()).toBeTruthy();
    expect(actions.fetchAnswers).toHaveBeenCalled();
    expect(actions.fetchRuleGroups).toHaveBeenCalled();
    expect(actions.fetchRules).toHaveBeenCalled();
  });

  describe("checkRule function", () => {
    let wrapper;
    let vm;

    beforeEach(() => {
      wrapper = shallowMount(Rules, {
        store,
        localVue,
      });
      vm = wrapper.vm;
      vm.answers = {
        A: "x",
        B: "w",
        C: "uvwxyz",
      };
    });

    it("returns true when 'is' operation matches the answer", () => {
      const rule = { expected_answer: "x", operation: "is", question_id: "A" };
      expect(vm.checkRule(rule)).toBe(true);
    });

    it("returns false when 'is' operation does not match the answer", () => {
      const rule = { expected_answer: "y", operation: "is", question_id: "A" };
      expect(vm.checkRule(rule)).toBe(false);
    });

    it("returns true when 'is not' operation matches the answer", () => {
      const rule = {
        expected_answer: "y",
        operation: "is not",
        question_id: "A",
      };
      expect(vm.checkRule(rule)).toBe(true);
    });

    it("returns false when 'is not' operation does not match the answer", () => {
      const rule = {
        expected_answer: "x",
        operation: "is not",
        question_id: "A",
      };
      expect(vm.checkRule(rule)).toBe(false);
    });

    it("returns true when 'contains' operation matches the answer", () => {
      const rule = {
        expected_answer: "x",
        operation: "contains",
        question_id: "C",
      };
      expect(vm.checkRule(rule)).toBe(true);
    });

    it("returns false when 'contains' operation does not match the answer", () => {
      const rule = {
        expected_answer: "a",
        operation: "contains",
        question_id: "C",
      };
      expect(vm.checkRule(rule)).toBe(false);
    });
  });

  describe("checkGroup function", () => {
    let wrapper;
    let vm;

    beforeEach(() => {
      wrapper = shallowMount(Rules, {
        store,
        localVue,
      });
      vm = wrapper.vm;
      vm.rules = {
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
      };
      vm.rule_groups = {
        1: {
          logic: "all",
          rule_ids: [1],
          rule_group_ids: [2],
        },
        2: {
          logic: "any",
          rule_ids: [2, 3],
          rule_group_ids: [],
        },
      };
      vm.answers = {
        A: "x",
        B: "w",
        C: "uvwxyz",
      };
    });

    it("returns true when 'all' logic group rules all apply", () => {
      expect(vm.checkGroup(vm.rule_groups["1"])).toBe(true);
    });

    it("returns true when 'any' logic group has at least one rule that applies", () => {
      expect(vm.checkGroup(vm.rule_groups["2"])).toBe(true);
    });

    it("handles nested rule groups correctly", () => {
      // Group 1 requires all rules and subgroups to apply
      // Group 2 requires any rule to apply and is part of Group 1
      expect(vm.checkGroup(vm.rule_groups["1"])).toBe(true);
    });
  });

  describe("checkGroup function edge cases", () => {
    let wrapper;
    let vm;

    beforeEach(() => {
      wrapper = shallowMount(Rules, {
        store,
        localVue,
      });
      vm = wrapper.vm;
      vm.rules = {
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
      };
      vm.rule_groups = {
        1: {
          logic: "all",
          rule_ids: [1],
          rule_group_ids: [2],
        },
        2: {
          logic: "any",
          rule_ids: [2, 3],
          rule_group_ids: [],
        },
      };
      vm.answers = {
        A: "x",
        B: "w",
        C: "uvwxyz",
      };
    });

    it("returns false when answers object is missing an answer for a referred question", () => {
      delete vm.answers["A"]; // Remove answer for question A
      const ruleGroup = {
        logic: "all",
        rule_ids: [2], // Rule 2 refers to question A
        rule_group_ids: [],
      };
      expect(vm.checkGroup(ruleGroup)).toBe(false);
    });

    it("returns false when a rule group has an unrecognized logic type", () => {
      const ruleGroup = {
        logic: "unknown",
        rule_ids: [1],
        rule_group_ids: [],
      };
      expect(vm.checkGroup(ruleGroup)).toBe(false);
    });
  });
});
