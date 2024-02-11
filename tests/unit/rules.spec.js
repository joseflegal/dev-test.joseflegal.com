import { shallowMount } from "@vue/test-utils";
import Rules from "@/views/Rules.vue";



describe("Rules.vue", () => {
  let answers;
  let rules;
  let rule_groups;
  it('check group renders true for sample answers given', () => {

    rule_groups = {
      "1": {
        "logic": "all",
        "rule_ids": [
            1
        ],
        "rule_group_ids": [
            2
        ]
      },
      "2": {
          "logic": "any",
          "rule_ids": [
              2,
              3
          ],
          "rule_group_ids": []
      }
    }

    answers = {
      "C": "abcdefghijklmnopqrstuvwxyz",
      "A": "x",
      "B": "Y",
      "D": "foo bar"
    }

    rules = {
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
    }
  
    const wrapper = shallowMount(Rules, {
      data() {
        return {
          answers,
          rule_groups,
          rules
        }
      }
    });
    expect(wrapper.vm.checkGroup(rule_groups[1])).toBe(true);
  });

  it('check group renders false for empty rule_groups and answers', () => {
    rule_groups = {}
    answers = {}

    rules = {
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
    }

    const wrapper = shallowMount(Rules, {
      data() {
        return {
          answers,
          rule_groups,
          rules
        }
      }
    });
    expect(wrapper.vm.checkGroup(rule_groups[1])).toBe(false);
  
  });

  it('check group renders false when rules don`t apply for all logic', () => {

    rule_groups = {
      "1": {
        "logic": "all",
        "rule_ids": [
            1
        ],
        "rule_group_ids": [
            2
        ]
      },
      "2": {
          "logic": "any",
          "rule_ids": [
              2,
              3
          ],
          "rule_group_ids": []
      }
    }

    answers = {
      "C": "abcdefghijklmnopqrstuvwxy",
      "A": "x",
      "B": "Y",
      "D": "foo bar"
    }

    rules = {
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
    }
    const wrapper = shallowMount(Rules, {
      data() {
        return {
          answers,
          rule_groups,
          rules
        }
      }
    });
    expect(wrapper.vm.checkGroup(rule_groups[1])).toBe(false);

  });

  it('check group renders false when rules don`t apply for any logic', () => {

    rule_groups = {
      "1": {
        "logic": "all",
        "rule_ids": [
            1
        ],
        "rule_group_ids": [
            2
        ]
      },
      "2": {
          "logic": "any",
          "rule_ids": [
              2,
              3
          ],
          "rule_group_ids": []
      }
    }

    answers = {
      "C": "abcdefghijklmnopqrstuvwxyz",
      "A": "a",
      "B": "y",
      "D": "foo bar"
    }

    rules = {
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
    }
    const wrapper = shallowMount(Rules, {
      data() {
        return {
          answers,
          rule_groups,
          rules
        }
      }
    });
    expect(wrapper.vm.checkGroup(rule_groups[1])).toBe(false);

  });
});
