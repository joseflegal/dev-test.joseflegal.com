import { mount } from '@vue/test-utils';
import Rules from '@/views/Rules.vue';

describe('Rules', () => {
  let wrapper;

  const mockedRules = {
    "1": {
      "expected_answer": "z",
      "operation": "contains",
      "question_id": "C"
    },
    "2": {
      "expected_answer": "x",
      "operation": "is",
      "question_id": "A"
    },
    "3": {
      "expected_answer": "y",
      "operation": "is not",
      "question_id": "B"
    }
  };

  const mockedRuleGroups = {
    "1": {
      "logic": "all",
      "rule_ids": [1, 2],
      "rule_group_ids": []
    },
    "2": {
      "logic": "any",
      "rule_ids": [1, 2],
      "rule_group_ids": []
    },
    "3": {
      "logic": "all",
      "rule_ids": [1],
      "rule_group_ids": [4]
    },
    "4": {
      "logic": "any",
      "rule_ids": [2, 3],
      "rule_group_ids": []
    },
    "5": {
      "logic": "all",
      "rule_ids": [1],
      "rule_group_ids": [6]
    },
    "6": {
      "logic": "all",
      "rule_ids": [2],
      "rule_group_ids": [7]
    },
    "7": {
      "logic": "all",
      "rule_ids": [3],
      "rule_group_ids": []
    },
    "8": {
      "logic": "any",
      "rule_ids": [3],
      "rule_group_ids": [1]
    }
  };

  beforeEach(async () => {
    wrapper = mount(Rules);
    wrapper.setData({
      rule_groups: mockedRuleGroups,
      rules: mockedRules
    });
    await wrapper.vm.$nextTick();
  });

  it("checkGroup 'all' should return false when missing answer", () => {
    wrapper.setData({
      answers: {}
    });
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups[1])).toBe(false);
  });

  it("checkGroup 'all' should return true when all rules apply", () => {
    wrapper.setData({
      answers: {
        "C": "abcdefghijklmnopqrstuvwxyz",
        "A": "x",
      }
    });
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups[1])).toBe(true);
  });

  it("checkGroup 'all' should return false when one of the rules does not apply", () => {
    wrapper.setData({
      answers: {
        "C": "a",
        "A": "x",
      }
    });
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups[1])).toBe(false);
  });

  it("checkGroup 'any' should return false when missing answer", () => {
    wrapper.setData({
      answers: {}
    });
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups[2])).toBe(false);
  });

  it("checkGroup 'any' should return true when all rules apply", () => {
    wrapper.setData({
      answers: {
        "C": "aza",
        "A": "x",
      }
    });
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups[2])).toBe(true);
  });

  it("checkGroup 'any' should return true when one of the rules applies", () => {
    wrapper.setData({
      answers: {
        "C": "a",
        "A": "x",
      }
    });
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups[2])).toBe(true);
  });

  it("checkGroup 'all' should return false when none of the rules applies", () => {
    wrapper.setData({
      answers: {
        "C": "a",
        "A": "y",
      }
    });
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups[2])).toBe(false);
  });

  it("checkGroup 'all' multiple group should return false when owner group's rule does not apply", () => {
    wrapper.setData({
      answers: {
        "C": "a",
        "A": "x",
        "B": "Y"
      }
    });
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups[3])).toBe(false);
  });

  it("checkGroup 'all' multiple group should return false when owner group applies but other does not", () => {
    wrapper.setData({
      answers: {
        "C": "z",
        "A": "X",
        "B": "y"
      }
    });
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups[3])).toBe(false);
  });

  it("checkGroup 'all' multiple group should return true when all rules and groups apply", () => {
    wrapper.setData({
      answers: {
        "C": "z",
        "A": "x",
        "B": "Y"
      }
    });
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups[3])).toBe(true);
  });

  it("checkGroup 'all' multiple groups of 3 should return false when third group does not apply", () => {
    wrapper.setData({
      answers: {
        "C": "z",
        "A": "x",
        "B": "y"
      }
    });
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups[5])).toBe(false);
  });

  it("checkGroup 'all' multiple groups of 3 should return true when all groups apply", () => {
    wrapper.setData({
      answers: {
        "C": "z",
        "A": "x",
        "B": "Y"
      }
    });
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups[5])).toBe(true);
  });

  it("checkGroup 'any' multiple groups should return false when none groups apply", () => {
    wrapper.setData({
      answers: {
        "C": "ab",
        "A": "x",
        "B": "y"
      }
    });
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups[8])).toBe(false);
  });

  it("checkGroup 'any' multiple groups should return true when one group applies", () => {
    wrapper.setData({
      answers: {
        "C": "abz",
        "A": "x",
        "B": "y"
      }
    });
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups[8])).toBe(true);
  });

  it("checkGroup 'any' multiple groups should return true when one rule applies", () => {
    wrapper.setData({
      answers: {
        "C": "a",
        "A": "",
        "B": "Y"
      }
    });
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups[8])).toBe(true);
  });
});
