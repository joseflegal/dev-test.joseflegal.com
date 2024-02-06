import { shallowMount, createLocalVue } from "@vue/test-utils";
import Rules from '../../src/views/Rules.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);
let store;
let actions;

console.log = jest.fn();

describe("Rules.vue",() => {
  let rule_groups = {
    "1": { // true (all match)
      logic: "all",
      rule_ids: [1],
      rule_group_ids: [2]
    },
    "2": { // true (all match)
      logic: "any",
      rule_ids: [2,3],
      rule_group_ids: []
    },
    "3": { // true (all match)
      logic: "any", 
      rule_ids: [4,5],
      rule_group_ids: []
    },
    "4": { // true (some match)
      logic: "any", 
      rule_ids: [5,6],
      rule_group_ids: []
    },
    "5": { // false (none match)
      logic: "any",
      rule_ids: [6,7],
      rule_group_ids: []
    },
    "6": { // true (empty)
      logic: "any",
      rule_ids: [],
      rule_group_ids: []
    },
    "7": { // true (all match)
      logic: "all",
      rule_ids: [4,5],
      rule_group_ids: []
    },
    "8": { // false (some match)
      logic: "all",
      rule_ids: [5,6],
      rule_group_ids: []
    },
    "9": {  // false (none match)
      logic: "all",
      rule_ids: [6,7],
      rule_group_ids: []
    },
    "10": { // true (empty)
      logic: "all",
      rule_ids: [],
      rule_group_ids: []
    },
    "11": { // true (all match - nested any (t) and all (t))
      logic: "any",
      rule_ids: [6,7],
      rule_group_ids: [3,7]
    },
    "12": { // true (some match - nested any (t) and all (f))
      logic: "any",
      rule_ids: [6,7],
      rule_group_ids: [4,8]
    },
    "13": { // true (some match - nested any (f) and all (t))
      logic: "any",
      rule_ids: [7],
      rule_group_ids: [5,7]
    },
    "14": { // false (none match - nested any (f) and all (f))
      logic: "any",
      rule_ids: [7],
      rule_group_ids: [5,8]
    },
    "15": { // true (all match - nested any (t) and all (t))
      logic: "all",
      rule_ids: [4,5],
      rule_group_ids: [3,7]
    },
    "16": { // false (some match - nested any (t) and all (f))
      logic: "all",
      rule_ids: [4,5],
      rule_group_ids: [3,9]
    },
    "17": { // false (some match - nested any (f) and all (t))
      logic: "all",
      rule_ids: [5],
      rule_group_ids: [5,7]
    },
    "18": { // false (none match - nested any (f) and all (f))
      logic: "all",
      rule_ids: [5],
      rule_group_ids: [5,9]
    },
    "19": { // true (all match - nested any (t))
      logic: "all",
      rule_ids: [4],
      rule_group_ids: [3]
    },
    "20": { // false (some match - nested any (f))
      logic: "all",
      rule_ids: [4],
      rule_group_ids: [5]
    },
    "21": { // true (some match - nested all (t))
      logic: "any",
      rule_ids: [6],
      rule_group_ids: [7]
    },
    "22": { // false (none match - nested all (f))
      logic: "any",
      rule_ids: [6],
      rule_group_ids: [9]
    },
    "23": { // true (nested group is true - nested all into any (t))
      logic: "any",
      rule_ids: [6],
      rule_group_ids: [19]
    },
    "24": { // false (nested group is false - nested all into any (f))
      logic: "any",
      rule_ids: [6],
      rule_group_ids: [20]
    },
    "25": { // true (nested group is true - nested any into all (t))
      logic: "all",
      rule_ids: [5],
      rule_group_ids: [21]
    },
    "26": { // false (nested group is false - nested any into all (f))
      logic: "all",
      rule_ids: [5],
      rule_group_ids: [22]
    },
    "27": { // true (empty rules and rule group is true)
      logic: "any",
      rule_ids: [],
      rule_group_ids: [3]
    },
    "28": { // false (empty rules and rule group is false)
      logic: "any",
      rule_ids: [],
      rule_group_ids: [5]
    },
    "29": { // true (empty rules and rule group is true)
      logic: "all",
      rule_ids: [],
      rule_group_ids: [4]
    },
    "30": { // false (empty rules and rule group is false)
      logic: "all",
      rule_ids: [],
      rule_group_ids: [26]
    },
    "31": { // true (multilayered rule groups)
      logic: "any",
      rule_ids: [6],
      rule_group_ids: [3, 16, 17]
    },
    "32": { // false (multilayered rule groups)
      logic: "any",
      rule_ids: [6],
      rule_group_ids: [5, 16, 17]
    },
    "33": { // true (multilayered rule groups)
      logic: "all",
      rule_ids: [4],
      rule_group_ids: [11, 15, 31]
    },
    "34": { // false (multilayered rule groups)
      logic: "all",
      rule_ids: [4],
      rule_group_ids: [11, 15, 32]
    },
    "35": { // false (multilayered rule groups)
      logic: "all",
      rule_ids: [4],
      rule_group_ids: [8, 11, 31]
    },
    "36": { // false (multilayered rule groups)
      logic: "all",
      rule_ids: [4],
      rule_group_ids: [8, 11, 32]
    },
  };

  let rules = {
    "1": { // true rule
      expected_answer: "z",
      operation: "contains",
      question_id: "C"
    },
    "2": { // true rule
      expected_answer: "x",
      operation: "is",
      question_id: "A"
    },
    "3": { // true rule
      expected_answer: "y",
      operation: "is not",
      question_id: "B"
    },
    "4": { // true rule
      expected_answer: "a",
      operation: "contains",
      question_id: "E"
    },
    "5": { // true rule
      expected_answer: "b",
      operation: "is",
      question_id: "F"
    },
    "6": { // false rule
      expected_answer: "d",
      operation: "contains",
      question_id: "G"
    },
    "7": { // false rule
      expected_answer: "d",
      operation: "is not",
      question_id: "H"
    }
  };

  let answers = {
    "A": "x",
    "B": "Y",
    "C": "abcdefghijklmnopqrstuvwxyz",
    "D": "foo bar",
    "E": "abc",
    "F": "b",
    "G": "efg",
    "H": "d"
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

  test('josef sample rule group (all) with all matching rules and rule groups - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["1"])).toBe(true);
  });

  test('josef sample rule group (any) with all matching rules and empty rule group - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["2"])).toBe(true);
  });

  test('rule group (any) with all rules evaluating to true - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["3"])).toBe(true);
  });

  test('rule group (any) with some rules evaluating to true - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["4"])).toBe(true);
  });

  test('rule group (any) with no rules evaluating to true - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["5"])).toBe(false);
  });

  test('rule group (any) with empty rules and rule groups - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["6"])).toBe(true);
  });

  test('rule group (all) with all rules evaluating to true - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["7"])).toBe(true);
  });

  test('rule group (all) with some rules evaluating to true - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["8"])).toBe(false);
  });

  test('rule group (all) with no rules evaluating to true - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["9"])).toBe(false);
  });

  test('rule group (all) with empty rules and rule groups - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["10"])).toBe(true);
  });

  test('rule group (any) with all rules being false and all rule groups evaluating to true - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["11"])).toBe(true);
  });

  test('rule group (any) with all rules being false and some rule groups evaluating to true (nest any (t) and all (f)) - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["12"])).toBe(true);
  });

  test('rule group (any) with all rules being false and some rule groups evaluating to true (nest any (f) and all (t)) - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["13"])).toBe(true);
  });

  test('rule group (any) with all rules and rule groups being false - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["14"])).toBe(false);
  });

  test('rule group (all) with all rules and rule groups evaluating to true (nest any (t) and all (t)) - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["15"])).toBe(true);
  });

  test('rule group (all) with all rules and some rule groups evaluating to true (nest any (t) and all (f)) - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["16"])).toBe(false);
  });

  test('rule group (all) with all rules and some rule groups evaluating to true (nest any (f) and all (t)) - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["17"])).toBe(false);
  });

  test('rule group (all) with all rules and rule groups evaluating to false (nest any (f) and all (f)) - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["18"])).toBe(false);
  });

  test('rule group (all) with all rules and rule groups evaluating to true (nest any (t)) - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["19"])).toBe(true);
  });

  test('rule group (all) with all rules being true and all rule groups evaluating to false (nest any (f)) - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["20"])).toBe(false);
  });

  test('rule group (any) with all rules being false and rule groups evaluating to true (nest all (t)) - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["21"])).toBe(true);
  });

  test('rule group (any) with all rules and rule groups evaluating to false (nest all (f)) - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["22"])).toBe(false);
  });

  test('rule group (any) with all rules and rule groups evaluating to true (nested all (t) into any (t)) - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["23"])).toBe(true);
  });

  test('rule group (any) with nested any rule group evaluating to false (nested all (t) into any (f)) - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["24"])).toBe(false);
  });

  test('rule group (all) with all rules and rule groups evaluating to true (nested any (t) into all (t)) - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["25"])).toBe(true);
  });

  test('rule group (all) with nested all rule group evaluating to false (nested any (t) into all (f)) - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["26"])).toBe(false);
  });

  test('rule group (any) with empty rules and all rule group evaluating to true - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["27"])).toBe(true);
  });

  test('rule group (any) with empty rules and all rule group evaluating to false - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["28"])).toBe(false);
  });

  test('rule group (all) with empty rules and all rule group evaluating to true - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["29"])).toBe(true);
  });

  test('rule group (all) with empty rules and all rule group evaluating to false - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["30"])).toBe(false);
  });

  test('rule group (any) with multiple layers - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["31"])).toBe(true);
  });

  test('rule group (any) with multiple layers - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["32"])).toBe(false);
  });

  test('rule group (all) with multiple layers - should return true', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["33"])).toBe(true);
  });

  test('rule group (all) with multiple layers - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["34"])).toBe(false);
  });

  test('rule group (all) with multiple layers - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["35"])).toBe(false);
  });

  test('rule group (all) with multiple layers - should return false', () => {
    expect(wrapper.vm.checkGroup(wrapper.vm.rule_groups["35"])).toBe(false);
  });
});
