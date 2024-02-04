<template>
  <div class="container">
    <h1 class="heading">Vue.js layout</h1>
    <div class="image-container">
      <file
        v-for="file in filteredAndSortedFiles"
        :key="file.id"
        :file="file"
        class="file"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import api from "@/api";
import File from "@/components/globals/File.vue";

export default {
  name: "Layout",
  components: { File },
  data() {
    return {
      files: [],
    };
  },
  created() {
    api.files.get().then((res) => {
      this.files = res;
    });
  },
  computed: {
    filteredAndSortedFiles() {
      return this.files
        .filter((file) => file.tags.includes("kitten"))
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1024px;
  margin: 0 auto;
}

.image-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: $base-spacing;
}

.file {
  border-radius: $base-border-radius;
  width: calc(33.33% - $base-spacing); /* Adjust spacing */
  margin-bottom: $base-spacing;
  background-color: $josef-purple-soft-dark;
  overflow-x: auto;
  white-space: pre-wrap;
  white-space: pre-wrap;
  line-break: anywhere;
}
</style>
