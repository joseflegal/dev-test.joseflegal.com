import { shallowMount } from "@vue/test-utils";
import Rules from "@/views/Rules.vue";

const mockAnswers = {
  C: "abcdefghijklmnopqrstuvwxyz",
  A: "x",
  B: "Y",
  D: "foo bar",
};

const mockRules = {
  1: {
    expected_answer: "z",
    operation: "contains",
    question_id: "C",
  },
  2: {
    expected_answer: "",
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
};

const mockRuleGroups = {
  1: {
    logic: "all",
    rule_ids: [1, 4],
    rule_group_ids: [2],
  },
  2: {
    logic: "any",
    rule_ids: [2, 3, 4],
    rule_group_ids: [],
  },
};

describe("Rules", () => {
  it("should return false for a rule group with 'all' logic if at least one rule is invalid", () => {
    const wrapper = shallowMount(Rules, {
      data() {
        return {
          answers: mockAnswers,
          rules: mockRules,
          rule_groups: mockRuleGroups,
        };
      },
    });
    const ruleGroup = wrapper.vm.rule_groups[1];
    const result = wrapper.vm.checkGroup(ruleGroup);
    expect(result).toBe(false);
  });

  it("should return true for a rule group with 'any' logic if at least one rule is valid", () => {
    const wrapper = shallowMount(Rules, {
      data() {
        return {
          answers: mockAnswers,
          rules: mockRules,
          rule_groups: mockRuleGroups,
        };
      },
    });
    const ruleGroup = wrapper.vm.rule_groups[2];
    const result = wrapper.vm.checkGroup(ruleGroup);
    expect(result).toBe(true);
  });
});
