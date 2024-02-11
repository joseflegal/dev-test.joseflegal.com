import { shallowMount } from "@vue/test-utils";
import Rules from "@/views/Rules.vue";

describe("rules", () => {
  it("should return true for given example", async () => {
    const wrapper = shallowMount(Rules);
    wrapper.vm.answers = {
      C: "abcdefghijklmnopqrstuvwxyz",
      A: "x",
      B: "Y",
      D: "foo bar",
    };
    wrapper.vm.rule_groups = {
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
    wrapper.vm.rules = {
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
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups[1])).toBe(true);
  });
});
