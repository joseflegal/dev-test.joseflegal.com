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
import api from "@/api";

export default {
  name: "Layout",
  data() {
    return {
      files: [],
    };
  },
  computed: {
    kittenFiles() {
      return this.files.filter(
        (file) => file.tags && file.tags.includes("kitten")
      );
    },
    sortedKittenFiles() {
      const kittenFilesCopy = [...this.kittenFiles];
      return kittenFilesCopy.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
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
