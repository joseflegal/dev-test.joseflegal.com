<template>
  <div class="rule-group-item">
    <h3>Rule Group: {{ groupId }}</h3>
    <p><strong>Logic:</strong> {{ group.logic }}</p>
    <div v-if="group.rule_ids && group.rule_ids.length">
      <h4>Rules:</h4>
      <RuleItem
        v-for="ruleId in group.rule_ids"
        :key="ruleId"
        :rule="rules[ruleId]"
      />
    </div>
    <div v-if="group.rule_group_ids && group.rule_group_ids.length">
      <h4>Subgroups:</h4>
      <RuleGroupItem
        v-for="groupId in group.rule_group_ids"
        :key="groupId"
        :groupId="groupId"
        :group="rule_groups[groupId]"
        :rules="rules"
        :rule_groups="rule_groups"
      />
    </div>
  </div>
</template>

<script>
import RuleItem from "@/components/RuleItem.vue";

export default {
  name: "RuleGroupItem",
  components: {
    RuleItem,
  },
  props: {
    groupId: {
      type: [String, Number],
      required: true,
    },
    group: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
      required: true,
    },
    rule_groups: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.rule-group-item {
  padding: 10px;
  border: 2px solid #aaa;
  margin-bottom: 10px;
}
</style>
