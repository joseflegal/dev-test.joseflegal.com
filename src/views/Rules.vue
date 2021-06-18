<template>
  <div class="container">
    <h1>Rules engine</h1>
    <h2>Problem</h2>
    <p>
      At Josef, we use conversational bots to gather information from end-users to solve legal
      problems. We gather this information by asking the end-user a series of questions. To make the
      experience more efficient, we only ask questions that are relevant to that particular
      end-user’s problem.
    </p>
    <p>
      To achieve this, logic engine evaluates a user’s answers and decides what questions have to be
      asked next based on their previous answers.
    </p>
    <p>
      For example, if a user replies <strong>x</strong> to question <strong>A</strong>, there is no
      need to ask them question <strong>B</strong> and question <strong>C</strong> is asked straight
      away.
    </p>
    <h2>Implmentation</h2>
    <img src="https://www.dropbox.com/s/efw0tf9ymnrk7ii/graph.png?dl=1" />
    <p>
      To implement this logic, we use a
      <a href="https://en.wikipedia.org/wiki/Directed_graph">directed graph</a>
      where questions represent nodes, and connections between nodes indicate which question will be
      asked next. Certain nodes/questions are connected to more than one node.
    </p>
    <p>
      To identify which connections to follow, each connection has a set of rules that evaluates
      previous answers. If there are no rules for the connection, it means that this connection must
      always be followed. If there is more than one rule, rules are grouped and logical operations
      are applied between them. Groups can contain subgroups for more complicated cases.
    </p>
    <p>
      <strong>0 rules example:</strong> question <strong>B</strong> is always followed by question
      <strong>C</strong>
    </p>
    <p>
      <strong>multiple rules example:</strong> question <strong>C</strong> is followed by question
      <strong>E</strong> if (user answer to question <strong>A</strong> is <strong>x</strong>
      <u>or</u> user answer to <strong>B</strong> is not <strong>y</strong>)
    </p>
    <p>
      <strong>multiple groups example:</strong> question <strong>C</strong> is followed by question
      <strong>D</strong> if ((user answer to question <strong>A</strong> is <strong>x</strong>
      <u>or</u> user answer to <strong>B</strong> is not <strong>y</strong>) <u>and</u> user answer
      to <strong>C</strong> contains <strong>z</strong>)
    </p>
    <p>
      Here is an example of the data structure that describes the
      <strong>multiple groups example</strong> above. Please, note how property
      <em>logic</em> determines logical operation between rules and groups.
    </p>
    <pre><code>ruleGroups:{{ruleGroups}}
rules:{{rules}}</code></pre>
    <h2>Task</h2>
    <p>
      Please, finish the <em>checkGroup</em> function in the <u>src/views/Rules.vue</u> file, so it
      returns <em>true</em> if all rules and groups apply, otherwise <em>false</em>. Feel free to
      use already implemented function <em>checkRule</em> to check individual rules.
    </p>
    <h2>Result</h2>
    <p>With given user answers:</p>
    <pre>
<code>answers:{{answers}}</code>
    </pre>
    <p><strong>multiple groups example '4'</strong> is:</p>
    <pre>
<code v-if="ruleGroups && rules && answers">{{checkGroup(this.ruleGroups['4'])}}</code>
      </pre>
  </div>
</template>
<style lang="scss" scoped>
.container {
  max-width: 1024px;
  margin: 0 auto;
}

code {
  width: 100%;
}

img {
  max-width: 50%;
  float: right;
}
</style>
<script>
// @ is an alias to /src
import api from "@/api";

export default {
  name: "Layout",
  data() {
    return {
      ruleGroups: false,
      answers: false,
      rules: false,
    };
  },
  methods: {
    checkGroups(ruleGroupIds) {
      let result = true;
      ruleGroupIds.forEach((ruleGroupId) => {
        result = result && this.checkGroup(this.ruleGroups[ruleGroupId]);
      });
      return result;
    },
    checkRules(rulesIds, isAnd) {
      if (!rulesIds.length) {
        return true;
      }
      /* eslint no-restricted-syntax: */
      for (const ruleId of rulesIds) {
        const ruleResult = this.checkRule(this.rules[ruleId]);
        if ((isAnd && !ruleResult) || (!isAnd && ruleResult)) {
          return !isAnd;
        }
      }
      return isAnd;
    },
    checkGroup(ruleGroup) {
      if (ruleGroup) {
        console.log(`ThisGroup: ${ruleGroup.logic}`);
        const isAll = ruleGroup.logic === "all";
        const rules = this.checkRules(ruleGroup.ruleIds, isAll);
        const groups = this.checkGroups(ruleGroup.ruleGroup_ids);
        return rules && groups;
      }
      return true;

      /// ///////////////////////////////////////////////////
    },

    checkRule(rule) {
      // cheking that a rule applies
      // returns if combination of expected answer, operation and user answer is true

      console.log("Rule:");
      console.log(this.answers[rule.question_id]);
      console.log(rule.operation);
      console.log(rule.expected_answer);
      try {
        if (rule.operation === "is") {
          return rule.expected_answer === this.answers[rule.question_id];
        }
        if (rule.operation === "is not") {
          return rule.expected_answer !== this.answers[rule.question_id];
        }
        if (rule.operation === "contains") {
          return this.answers[rule.question_id].includes(rule.expected_answer);
        }
      } catch (e) {
        console.error(e.message);
        return false;
      }
      return false;
    },
  },
  created() {
    // loading data from the API

    api.answers.get().then((res) => {
      this.answers = res;
    });
    api.rules.get().then((res) => {
      this.rules = res;
    });
    api.ruleGroups.get().then((res) => {
      this.ruleGroups = res;
    });
  },
};
</script>
