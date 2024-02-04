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
            "expected_answer": "xyz",
            "operation": "contains",
            "question_id": "C"
        },
        "3": {
        "expected_answer": "x",
        "operation": "is",
        "question_id": "A"
        },
        "4": {
            "expected_answer": "xyz",
            "operation": "is",
            "question_id": "A"
        },
        "5": {
        "expected_answer": "y",
        "operation": "is not",
        "question_id": "B"
        },
        "6": {
            "expected_answer": "xyz",
            "operation": "is not",
            "question_id": "B"
        }
    };

    beforeEach(async () => {
        wrapper = mount(Rules);
        wrapper.setData({
            rules: mockedRules
        });
        await wrapper.vm.$nextTick();
    });

    it("checkRule 'contains' method should return true when answer contains required letter", () => {
        wrapper.setData({
            answers: {
                "C": "abcz"
            }
        })
        expect(wrapper.vm.checkRule(wrapper.vm.rules[1])).toBe(true);
    });

    it("checkRule 'contains' method should return false when answer does not contain required letter", () => {
        wrapper.setData({
            answers: {
                "C": "abc"
            }
        })
        expect(wrapper.vm.checkRule(wrapper.vm.rules[1])).toBe(false);
    });

    it("checkRule 'contains' method should return true when answer contains required phrase", () => {
        wrapper.setData({
            answers: {
                "C": "abxyzc"
            }
        })
        expect(wrapper.vm.checkRule(wrapper.vm.rules[2])).toBe(true);
        });

        it("checkRule 'contains' method should return false when answer does not contain required phrase", () => {
            wrapper.setData({
                answers: {
                    "C": "abxzc"
                }
            })
            expect(wrapper.vm.checkRule(wrapper.vm.rules[2])).toBe(false);
        });

    it("checkRule 'is' method should return true if answer equals required letter", () => {
        wrapper.setData({
            answers: {
                "A": "x"
            }
        })
        expect(wrapper.vm.checkRule(wrapper.vm.rules[3])).toBe(true);
    });

    it("checkRule 'is' method should return false if answer is different from required letter", () => {
        wrapper.setData({
            answers: {
                "A": "y"
            }
        })
        expect(wrapper.vm.checkRule(wrapper.vm.rules[3])).toBe(false);
    });

    it("checkRule 'is' method should return true if answer is required phrase", () => {
        wrapper.setData({
            answers: {
                "A": "xyz"
            }
        })
        expect(wrapper.vm.checkRule(wrapper.vm.rules[4])).toBe(true);
    });

    it("checkRule 'is' method should return false if answer is different from required phrase", () => {
        wrapper.setData({
            answers: {
                "A": "acxyzb"
            }
        })
        expect(wrapper.vm.checkRule(wrapper.vm.rules[4])).toBe(false);
    });

    it("checkRule 'is not' method should return true if answer is not required letter", () => {
        wrapper.setData({
            answers: {
                "B": "x"
            }
        })
        expect(wrapper.vm.checkRule(wrapper.vm.rules[5])).toBe(true);
    });

    it("checkRule 'is not' method should return false if answer is required letter", () => {
        wrapper.setData({
            answers: {
                "B": "y"
            }
        })
        expect(wrapper.vm.checkRule(wrapper.vm.rules[5])).toBe(false);
    });

    it("checkRule 'is not' method should return true if answer is not required phrase", () => {
        wrapper.setData({
            answers: {
                "B": "abxyz"
            }
        })
        expect(wrapper.vm.checkRule(wrapper.vm.rules[6])).toBe(true);
    });

    it("checkRule 'is not' method should return false if answer is required letter", () => {
        wrapper.setData({
            answers: {
                "B": "xyz"
            }
        })
        expect(wrapper.vm.checkRule(wrapper.vm.rules[6])).toBe(false);
    });
});
