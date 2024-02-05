import { shallowMount, createLocalVue } from "@vue/test-utils";
import Rules from '../../src/views/Rules.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);
let store;
let actions;

console.log = jest.fn();

describe("Rules.vue",() => {

  // setup mock data (rules, answers and rule groups)
  let rule_groups = {
    "1": { // true (all match)
      logic: "any", 
      rule_ids: [1,2],
      rule_group_ids: []
    },
    "2": { // true (some match)
      logic: "any", 
      rule_ids: [2,3],
      rule_group_ids: []
    },
    "3": { // false (none match)
      logic: "any",
      rule_ids: [3,4],
      rule_group_ids: []
    },
    "4": { // true (empty)
      logic: "any",
      rule_ids: [],
      rule_group_ids: []
    },
    "5": { // true (all match)
      logic: "all",
      rule_ids: [1,2],
      rule_group_ids: []
    },
    "6": { // false (some match)
      logic: "all",
      rule_ids: [2,3],
      rule_group_ids: []
    },
    "7": {  // false (none match)
      logic: "all",
      rule_ids: [3,4],
      rule_group_ids: []
    },
    "8": { // true (empty)
      logic: "all",
      rule_ids: [],
      rule_group_ids: []
    },
    "9": { // true (all match - nested any (t) and all (t))
      logic: "any",
      rule_ids: [3,4],
      rule_group_ids: [1,5]
    },
    "10": { // true (some match - nested any (t) and all (f))
      logic: "any",
      rule_ids: [3,4],
      rule_group_ids: [2,6]
    },
    "11": { // true (some match - nested any (f) and all (t))
      logic: "any",
      rule_ids: [4],
      rule_group_ids: [3,5]
    },
    "12": { // false (none match - nested any (f) and all (f))
      logic: "any",
      rule_ids: [4],
      rule_group_ids: [3,6]
    },
    "13": { // true (all match - nested any (t) and all (t))
      logic: "all",
      rule_ids: [1,2],
      rule_group_ids: [1,5]
    },
    "14": { // false (some match - nested any (t) and all (f))
      logic: "all",
      rule_ids: [1,2],
      rule_group_ids: [1,7]
    },
    "15": { // false (some match - nested any (f) and all (t))
      logic: "all",
      rule_ids: [2],
      rule_group_ids: [3,5]
    },
    "16": { // false (none match - nested any (f) and all (f))
      logic: "all",
      rule_ids: [2],
      rule_group_ids: [3,7]
    },
    "17": { // true (all match - nested any (t))
      logic: "all",
      rule_ids: [1],
      rule_group_ids: [1]
    },
    "18": { // false (some match - nested any (f))
      logic: "all",
      rule_ids: [1],
      rule_group_ids: [3]
    },
    "19": { // true (some match - nested all (t))
      logic: "any",
      rule_ids: [3],
      rule_group_ids: [5]
    },
    "20": { // false (none match - nested all (f))
      logic: "any",
      rule_ids: [3],
      rule_group_ids: [7]
    },
    "21": { // true (nested group is true - nested all into any (t))
      logic: "any",
      rule_ids: [3],
      rule_group_ids: [17]
    },
    "22": { // false (nested group is false - nested all into any (f))
      logic: "any",
      rule_ids: [3],
      rule_group_ids: [18]
    },
    "23": { // true (nested group is true - nested any into all (t))
      logic: "all",
      rule_ids: [2],
      rule_group_ids: [19]
    },
    "24": { // false (nested group is false - nested any into all (f))
      logic: "all",
      rule_ids: [2],
      rule_group_ids: [20]
    },
    "25": { // true (empty rules and rule group is true)
      logic: "any",
      rule_ids: [],
      rule_group_ids: [1]
    },
    "26": { // false (empty rules and rule group is false)
      logic: "any",
      rule_ids: [],
      rule_group_ids: [3]
    },
    "27": { // true (empty rules and rule group is true)
      logic: "all",
      rule_ids: [],
      rule_group_ids: [2]
    },
    "28": { // false (empty rules and rule group is false)
      logic: "all",
      rule_ids: [],
      rule_group_ids: [24]
    }
  };

  let rules = {
    "1": { // true rule
      expected_answer: "a",
      operation: "contains",
      question_id: "A"
    },
    "2": { // true rule
      expected_answer: "b",
      operation: "is",
      question_id: "B"
    },
    "3": { // false rule
      expected_answer: "d",
      operation: "contains",
      question_id: "C"
    },
    "4": { // false rule
      expected_answer: "d",
      operation: "is not",
      question_id: "D"
    }
  };

  let answers = {
    "A": "abc",
    "B": "b",
    "C": "efg",
    "D": "d"
  };

  actions = {
    getAll: jest.fn()
  };
  
  // setup test store to mimic vuex store
  store = new Vuex.Store({
    modules: {
      rule_groups: {
        state: {rule_groups: []},
        actions,
        getters: {getRuleGroups: () => rule_groups},
        namespaced: true
      },
      answers: {
        state: {answers: []},
        actions,
        getters: {getAnswers: () => answers},
        namespaced: true
      },
      rules: {
        state: {rules: []},
        actions,
        getters: {getRules: () => rules},
        namespaced: true
      },
    }
  });
  
  const wrapper = shallowMount(Rules, { store, localVue });

  wrapper.setData({
    rule_groups: rule_groups,
    answers: answers,
    rules: rules,
  });

  test('rule group (any) with all rules evaluating to true - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["1"])).toBe(true);
  });

  test('rule group (any) with some rules evaluating to true - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["2"])).toBe(true);
  });

  test('rule group (any) with no rules evaluating to true - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["3"])).toBe(false);
  });

  test('rule group (any) with empty rules and rule groups - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["4"])).toBe(true);
  });

  test('rule group (all) with all rules evaluating to true - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["5"])).toBe(true);
  });

  test('rule group (all) with some rules evaluating to true - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["6"])).toBe(false);
  });

  test('rule group (all) with no rules evaluating to true - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["7"])).toBe(false);
  });

  test('rule group (all) with empty rules and rule groups - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["8"])).toBe(true);
  });

  test('rule group (any) with all rules being false and all rule groups evaluating to true - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["9"])).toBe(true);
  });

  test('rule group (any) with all rules being false and some rule groups evaluating to true (nest any (t) and all (f)) - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["10"])).toBe(true);
  });

  test('rule group (any) with all rules being false and some rule groups evaluating to true (nest any (f) and all (t)) - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["11"])).toBe(true);
  });

  test('rule group (any) with all rules and rule groups being false - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["12"])).toBe(false);
  });

  test('rule group (all) with all rules and rule groups evaluating to true (nest any (t) and all (t)) - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["13"])).toBe(true);
  });

  test('rule group (all) with all rules and some rule groups evaluating to true (nest any (t) and all (f)) - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["14"])).toBe(false);
  });

  test('rule group (all) with all rules and some rule groups evaluating to true (nest any (f) and all (t)) - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["15"])).toBe(false);
  });

  test('rule group (all) with all rules and rule groups evaluating to false (nest any (f) and all (f)) - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["16"])).toBe(false);
  });

  test('rule group (all) with all rules and rule groups evaluating to true (nest any (t)) - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["17"])).toBe(true);
  });

  test('rule group (all) with all rules being true and all rule groups evaluating to false (nest any (f)) - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["18"])).toBe(false);
  });

  test('rule group (any) with all rules being false and rule groups evaluating to true (nest all (t)) - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["19"])).toBe(true);
  });

  test('rule group (any) with all rules and rule groups evaluating to false (nest all (f)) - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["20"])).toBe(false);
  });

  test('rule group (any) with all rules and rule groups evaluating to true (nested all (t) into any (t)) - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["21"])).toBe(true);
  });

  test('rule group (any) with nested any rule group evaluating to false (nested all (t) into any (f)) - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["22"])).toBe(false);
  });

  test('rule group (all) with all rules and rule groups evaluating to true (nested any (t) into all (t)) - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["23"])).toBe(true);
  });

  test('rule group (all) with nested all rule group evaluating to false (nested any (t) into all (f)) - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["24"])).toBe(false);
  });

  test('rule group (any) with empty rules and all rule group evaluating to true - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["25"])).toBe(true);
  });

  test('rule group (any) with empty rules and all rule group evaluating to false - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["26"])).toBe(false);
  });

  test('rule group (all) with empty rules and all rule group evaluating to true - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["27"])).toBe(true);
  });

  test('rule group (all) with empty rules and all rule group evaluating to false - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["28"])).toBe(false);
  });
})
