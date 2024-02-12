import { shallowMount } from "@vue/test-utils";
import Rules from "@/views/Rules.vue";

const sample_rules = {
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
const sample_rule_groups = {
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
const sample_answers = {
  C: "abcdefghijklmnopqrstuvwxyz",
  A: "x",
  B: "Y",
  D: "foo bar",
};

describe("rules", () => {
  describe("checkGroup", () => {
    let wrapper;
    let checkGroupSpy;
    let checkRuleSpy;
    beforeEach(() => {
      wrapper = shallowMount(Rules);
      checkGroupSpy = jest.spyOn(wrapper.vm, "checkGroup");
      checkRuleSpy = jest.spyOn(wrapper.vm, "checkRule");
    });
    afterEach(() => {
      checkGroupSpy.mockRestore();
      checkRuleSpy.mockRestore();
    });
    it("should return true for given example", async () => {
      wrapper.vm.answers = sample_answers;
      wrapper.vm.rule_groups = sample_rule_groups;
      wrapper.vm.rules = sample_rules;

      expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups[1])).toBe(true);

      // two groups to check
      expect(checkGroupSpy).toHaveBeenCalledTimes(2);

      // 1 rule for group 1, 1 rule for group 2 (with early exit)
      expect(checkRuleSpy).toHaveBeenCalledTimes(2);
    });
    it("should return false for logic all and one of the rules is false", async () => {
      wrapper.vm.answers = {
        C: "abcdefghijklmnopqrstuvwxy",
        A: "x",
        B: "Y",
        D: "foo bar",
      };
      wrapper.vm.rule_groups = {
        3: {
          logic: "all",
          rule_ids: [1, 2, 3],
          rule_group_ids: [],
        },
      };
      wrapper.vm.rules = sample_rules;
      expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups[3])).toBe(false);

      // 1 group to check
      expect(checkGroupSpy).toHaveBeenCalledTimes(1);

      // fail on first rule check
      expect(checkRuleSpy).toHaveBeenCalledTimes(1);
    });
    it("should return true for logic any and one of the rules is true", async () => {
      wrapper.vm.answers = {
        C: "abcdefghijklmnopqrstuvwxy",
        A: "x",
        B: "y",
        D: "foo bar",
      };
      wrapper.vm.rule_groups = {
        4: {
          logic: "any",
          rule_ids: [1, 2, 3],
          rule_group_ids: [],
        },
      };
      wrapper.vm.rules = sample_rules;
      expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups[4])).toBe(true);

      // 1 group to check
      expect(checkGroupSpy).toHaveBeenCalledTimes(1);

      // pass on second rule
      expect(checkRuleSpy).toHaveBeenCalledTimes(2);
    });
    it("should return false for logic any and all rules are false", async () => {
      wrapper.vm.answers = {
        C: "abcdefghijklmnopqrstuvwxy",
        A: "",
        B: "y",
        D: "foo bar",
      };
      wrapper.vm.rule_groups = {
        5: {
          logic: "any",
          rule_ids: [1, 2, 3],
          rule_group_ids: [],
        },
      };
      wrapper.vm.rules = sample_rules;
      expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups[5])).toBe(false);

      // 1 group to check
      expect(checkGroupSpy).toHaveBeenCalledTimes(1);

      // all rules fail
      expect(checkRuleSpy).toHaveBeenCalledTimes(3);
    });
    it("all rules pass but child group fails returns false", () => {
      wrapper.vm.answers = {
        C: "abcdefghijklmnopqrstuvwxyz",
        A: "x",
        B: "y",
        D: "foo bar",
      };
      wrapper.vm.rule_groups = {
        6: {
          logic: "all",
          rule_ids: [1],
          rule_group_ids: [7],
        },
        7: {
          logic: "all",
          rule_ids: [2, 3],
          rule_group_ids: [],
        },
      };
      wrapper.vm.rules = sample_rules;
      expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups[6])).toBe(false);

      // 2 groups to check
      expect(checkGroupSpy).toHaveBeenCalledTimes(2);

      // 1 rule for group 1,second rule fails for group 2
      expect(checkRuleSpy).toHaveBeenCalledTimes(3);
    });

    it("logic any: no immediate rules pass but child group true returns true", () => {
      wrapper.vm.answers = {
        C: "abcdefghijklmnopqrstuvwxy",
        A: "x",
      };
      wrapper.vm.rule_groups = {
        8: {
          logic: "any",
          rule_ids: [1],
          rule_group_ids: [9],
        },
        9: {
          logic: "all",
          rule_ids: [2],
          rule_group_ids: [],
        },
      };
      wrapper.vm.rules = sample_rules;
      expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups[8])).toBe(true);

      // 2 groups to check
      expect(checkGroupSpy).toHaveBeenCalledTimes(2);

      // 2 rules checked
      expect(checkRuleSpy).toHaveBeenCalledTimes(2);
    });
  });
});
