<template>
  <div class="container">
    <div class="select-wrapper">
      <select v-model="selectedFilter">
        <option value="">All Tags</option>
        <option v-for="(tag, index) in tags" :key="index" :value="tag">
          {{ tag }}
        </option>
      </select>
    </div>
    <div class="file-list">
      <FileItem v-for="file in getFilteredFiles" :key="file.id" :file="file">
        <template v-slot:description>
          <strong class="description">{{ file.description }}</strong>
        </template>
        <template v-slot:date class="date">
          {{ formatDate(file.date) }}
        </template>
        <template v-slot:image> <img :src="file.src" /></template>
      </FileItem>
    </div>
  </div>
</template>

<script>
import FileItem from "@/components/fileComponents/FileItem.vue";

export default {
  components: {
    FileItem,
  },
  data() {
    return {
      tags: [],
      selectedFilter: "",
    };
  },
  props: {
    files: {
      type: Array,
      required: true,
    },
  },
  methods: {
    formatDate(dateString) {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return new Date(dateString).toLocaleDateString("en-US", options);
    },
  },
  computed: {
    getFilteredFiles() {
      const filteredFiles = this.files.filter((file) =>
        file.tags.includes(this.selectedFilter)
      );
      filteredFiles.sort((a, b) => new Date(a.date) - new Date(b.date));
      return filteredFiles;
    },
  },
  watch: {
    // Watch for changes in the files array to get the tags array
    files: {
      immediate: true,
      handler(newFiles) {
        this.tags = [...new Set(newFiles.flatMap((file) => file.tags))];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: $page-padding;
}

.select-wrapper {
  position: relative;
  width: 100%;
  max-width: 100%;
  opacity: 0.8;
}

.select-wrapper select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  padding: $base-spacing;
  border: $base-border;
  border-radius: $base-border-radius;
  cursor: pointer;
  font-size: 1rem;
  outline: none;
  background-color: $josef-purple;
  color: $josef-white;
  opacity: 0.6;
}

.select-wrapper select:focus {
  border-color: $josef-purple;
}

.select-wrapper select::-ms-expand {
  display: none;
  color: $josef-white;
  opacity: 0.6;
}

.select-wrapper::after {
  content: "\25BC";
  position: absolute;
  top: 50%;
  right: $base-spacing;
  transform: translateY(-50%);
  pointer-events: none;
  color: $josef-white;
}

.select-wrapper option {
  padding: $base-spacing;
  background-color: $josef-purple-soft;
  color: $josef-white;
}

.select-wrapper option:hover,
.select-wrapper option:checked {
  background-color: $secondary-background-color;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: $base-spacing;
}
.description {
  overflow-x: auto;
  white-space: pre-wrap;
  white-space: pre-wrap;
  line-break: anywhere;
}
.file-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: $base-spacing;
}
</style>
