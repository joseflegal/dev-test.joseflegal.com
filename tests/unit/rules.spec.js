// Import Vue testing utilities and the component to test
import { shallowMount } from "@vue/test-utils";
import Rules from "@/views/Rules.vue";

describe("Rules.vue", () => {
  const ruleGroups = {
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

  const rules = {
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

  const answers = {
    C: "abcdefghijklmnopqrstuvwxyz",
    A: "x",
    B: "Y",
    D: "foo bar",
  };

  const wrongAnswersScenario = {
    C: "abcdefghijklmnopqrstuvwxy",
    A: "A",
    B: "y",
    D: "foo bar",
  };

  it('All rules and groups apply, With logic === "all"', () => {
    // Mock the created hook to assign constant data to component's data properties
    Rules.created = jest.fn().mockImplementation(function () {
      this.answers = answers;
      this.rules = rules;
      this.rule_groups = ruleGroups;
    });

    // Mount the component
    const wrapper = shallowMount(Rules);

    // Access the checkGroup method from the component instance
    const checkGroupResult = wrapper.vm.checkGroup(ruleGroups[1]);

    // Expect the result to be true as per the provided constant data
    expect(checkGroupResult).toBe(true);
  });
  it('Not All rules and groups apply, With logic === "all"', () => {
    // Mock the created hook to assign constant data to component's data properties
    Rules.created = jest.fn().mockImplementation(function () {
      this.answers = wrongAnswersScenario;
      this.rules = rules;
      this.rule_groups = ruleGroups;
    });

    // Mount the component
    const wrapper = shallowMount(Rules);

    // Access the checkGroup method from the component instance
    const checkGroupResult = wrapper.vm.checkGroup(ruleGroups[1]);

    // Expect the result to be false as per the provided constant data
    expect(checkGroupResult).toBe(false);
  });
  it('All rules and groups apply, With logic === "any"', () => {
    // Mock the created hook to assign constant data to component's data properties
    Rules.created = jest.fn().mockImplementation(function () {
      this.answers = answers;
      this.rules = rules;
      this.rule_groups = ruleGroups;
    });

    // Mount the component
    const wrapper = shallowMount(Rules);

    // Access the checkGroup method from the component instance
    const checkGroupResult = wrapper.vm.checkGroup(ruleGroups[2]);

    // Expect the result to be true as per the provided constant data
    expect(checkGroupResult).toBe(true);
  });
  it('Not All rules and groups apply, With logic === "any"', () => {
    // Mock the created hook to assign constant data to component's data properties
    Rules.created = jest.fn().mockImplementation(function () {
      this.answers = wrongAnswersScenario;
      this.rules = rules;
      this.rule_groups = ruleGroups;
    });

    // Mount the component
    const wrapper = shallowMount(Rules);

    // Access the checkGroup method from the component instance
    const checkGroupResult = wrapper.vm.checkGroup(ruleGroups[2]);

    // Expect the result to be false as per the provided constant data
    expect(checkGroupResult).toBe(false);
  });
});

