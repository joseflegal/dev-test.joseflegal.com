// Import Vue testing utilities and the component to test
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Rules from "@/views/Rules.vue";
import Vuex from "vuex";

// Create a local Vue instance
const localVue = createLocalVue();

// Use Vuex with the local Vue instance
localVue.use(Vuex);
describe("Rules.vue", () => {
  let store;

  beforeEach(() => {
    const rule_groups = {
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
    store = new Vuex.Store({
      state: {
        ruleGroups, // Assign constant values to state properties
        answers,
        rules,
      },
      actions: {
        // Define your actions here if needed
        "answers/get": jest.fn(),
        "rules/get": jest.fn(),
        "ruleGroups/get": jest.fn(),
      },
    });
  });
  it('returns true when no rule_ids and no rule_group_ids and logic is "all"', () => {
    Rules.created = jest.fn();
    const wrapper = shallowMount(Rules, {
      store,
      localVue,
    });

    expect(
      wrapper.vm
        .checkGroupDetails({
          logic: "all",
          rule_ids: [1],
          rule_group_ids: [2],
        })
        .toBe(true)
    );
  });
});
