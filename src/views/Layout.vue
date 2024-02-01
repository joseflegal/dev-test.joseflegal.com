<template>
  <div class="container">
    <h1>Vue.js layout</h1>
    <JoList :items="sortedKittensFiles" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1024px;
  margin: 0 auto;
}
</style>

<script>
import api from "@/api";

export default {
  name: "Layout",
  data() {
    return {
      files: [],
    };
  },
  computed: {
    kittensFiles() {
      return this.files.filter(
        (file) => file.tags && file.tags.includes("kitten")
      );
    },
    sortedKittensFiles() {
      const kittensFilesCopy = [...this.kittensFiles];
      return kittensFilesCopy.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    },
  },
  created() {
    api.files.get().then((res) => {
      this.files = res;
    });
  },
};
</script>
