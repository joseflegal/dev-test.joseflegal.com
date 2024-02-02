<template>
  <div class="container">
    <h1>Vue.js layout</h1>
    <JoList :items="sortedKittenFiles" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1024px;
  margin: 0 auto;
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Layout",
  computed: {
    ...mapGetters(["sortedKittenFiles"]),
  },
  created() {
    this.fetchFiles();
  },
  methods: {
    ...mapActions(["fetchFiles"]),
  },
};
</script>
