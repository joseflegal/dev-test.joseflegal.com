import { shallowMount } from "@vue/test-utils";
import Rules from "@/views/Rules.vue";
import { rules, ruleGroups, answers, wrongAnswersScenario } from "./constants";
describe("Rules.vue", () => {
  it('Check Group method:All rules and groups apply, With logic === "all"', () => {
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
  it('Check Group method:Not All rules and groups apply, With logic === "all"', () => {
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
  it('Check Group method:All rules and groups apply, With logic === "any"', () => {
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
  it('Check Group method:Not All rules and groups apply, With logic === "any"', () => {
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
  it("Check Group method:Only one rule exist and no groups and the rule does apply, With logic === 'any'", () => {
    // Mock the created hook to assign constant data to component's data properties
    Rules.created = jest.fn().mockImplementation(function () {
      this.answers = answers;
      this.rules = rules;
      this.rule_groups = ruleGroups;
    });

    // Mount the component
    const wrapper = shallowMount(Rules);

    // Access the checkGroup method from the component instance
    const checkGroupResult = wrapper.vm.checkGroup(ruleGroups[4]);

    // Expect the result to be true as per the provided constant data
    expect(checkGroupResult).toBe(true);
  });
  it("Check Group method:Only one rule exist and no groups and the rule doesn't apply, With logic === 'any'", () => {
    // Mock the created hook to assign constant data to component's data properties
    Rules.created = jest.fn().mockImplementation(function () {
      this.answers = wrongAnswersScenario;
      this.rules = rules;
      this.rule_groups = ruleGroups;
    });

    // Mount the component
    const wrapper = shallowMount(Rules);

    // Access the checkGroup method from the component instance
    const checkGroupResult = wrapper.vm.checkGroup(ruleGroups[4]);

    // Expect the result to be false as per the provided constant data
    expect(checkGroupResult).toBe(false);
  });
  it('Check Group method:Only one rule exist and no groups, With logic === "all"', () => {
    // Mock the created hook to assign constant data to component's data properties
    Rules.created = jest.fn().mockImplementation(function () {
      this.answers = answers;
      this.rules = rules;
      this.rule_groups = ruleGroups;
    });

    // Mount the component
    const wrapper = shallowMount(Rules);

    // Access the checkGroup method from the component instance
    const checkGroupResult = wrapper.vm.checkGroup(ruleGroups[3]);

    // Expect the result to be true as per the provided constant data
    expect(checkGroupResult).toBe(true);
  });
  it('Check Group method:Not All rules and groups apply, With logic === "all"', () => {
    // Mock the created hook to assign constant data to component's data properties
    Rules.created = jest.fn().mockImplementation(function () {
      this.answers = wrongAnswersScenario;
      this.rules = rules;
      this.rule_groups = ruleGroups;
    });

    // Mount the component
    const wrapper = shallowMount(Rules);

    // Access the checkGroup method from the component instance
    const checkGroupResult = wrapper.vm.checkGroup(ruleGroups[3]);

    // Expect the result to be false as per the provided constant data
    expect(checkGroupResult).toBe(false);
  });

  it("Check Rule method: rule does not apply", () => {
    // Mock the created hook to assign constant data to component's data properties
    Rules.created = jest.fn().mockImplementation(function () {
      this.answers = wrongAnswersScenario;
      this.rules = rules;
      this.rule_groups = ruleGroups;
    });

    // Mount the component
    const wrapper = shallowMount(Rules);

    // Access the checkGroup method from the component instance
    const checkRuleResult = wrapper.vm.checkRule(rules[1]);

    // Expect the result to be false as per the provided constant data
    expect(checkRuleResult).toBe(false);
  });
  it("Check Rule method: rule does apply", () => {
    // Mock the created hook to assign constant data to component's data properties
    Rules.created = jest.fn().mockImplementation(function () {
      this.answers = answers;
      this.rules = rules;
      this.rule_groups = ruleGroups;
    });

    // Mount the component
    const wrapper = shallowMount(Rules);

    // Access the checkGroup method from the component instance
    const checkRuleResult = wrapper.vm.checkRule(rules[1]);

    // Expect the result to be false as per the provided constant data
    expect(checkRuleResult).toBe(true);
  });
});
