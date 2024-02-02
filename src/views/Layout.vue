<template>
  <div class="container">
    <h1>Vue.js layout</h1>
    <JoList :items="getSortedFilesByTag('kitten')" />
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
import actions from "@/store/actions_types";

export default {
  name: "Layout",
  computed: {
    ...mapGetters("layout", ["getSortedFilesByTag"]),
  },
  created() {
    this[actions.getAll]();
  },
  methods: {
    ...mapActions("layout", [actions.getAll]),
  },
};
</script>
