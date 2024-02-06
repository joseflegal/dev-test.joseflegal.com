<template>
  <div class="rule-item">
    <p><strong>Question ID:</strong> {{ rule.question_id }}</p>
    <p><strong>Operation:</strong> {{ rule.operation }}</p>
    <p><strong>Expected Answer:</strong> {{ rule.expected_answer }}</p>
  </div>
</template>

<script>
export default {
  name: "RuleItem",
  props: {
    rule: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.rule-item {
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}
</style>
