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
    <h2>List of Files</h2>
    <div class="file-list">
      <FileItem v-for="file in getFilteredFiles" :key="file.id" :file="file">
        <template v-slot:description>
          <strong>{{ file.description }}</strong>
        </template>
        <template v-slot:date> Date: {{ formatDate(file.date) }} </template>
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
        hour: "numeric",
        minute: "numeric",
      };
      return new Date(dateString).toLocaleDateString("en-US", options);
    },
  },
  computed: {
    getFilteredFiles() {
      const filteredFiles = this.files.filter((file) =>
        file.tags.includes(this.selectedFilter)
      );
      filteredFiles.sort((a, b) => new Date(b.date) - new Date(a.date));
      return filteredFiles;
    },
  },
  watch: {
    // Watch for changes in the files array
    files: {
      immediate: true,
      handler(newFiles) {
        this.tags = [...new Set(newFiles.flatMap((file) => file.tags))];
      },
    },
  },
};
</script>

<style scoped>
.file-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
}

.select-wrapper {
  position: relative;
  width: 200px; /* Adjust as needed */
}

.select-wrapper select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  font-size: 16px;
  outline: none;
}

.select-wrapper select:focus {
  border-color: #007bff; /* Change focus border color as needed */
}

.select-wrapper select::-ms-expand {
  display: none;
}

/* Style the arrow icon */
.select-wrapper::after {
  content: "\25BC";
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
}

/* Style options */
.select-wrapper option {
  padding: 10px;
}

/* Style hover and selected option */
.select-wrapper option:hover,
.select-wrapper option:checked {
  background-color: #f0f0f0; /* Change hover and selected background color as needed */
}
</style>
