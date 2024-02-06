<template>
  <div>
    <h2>List of Files</h2>
    <div class="file-list">
      <FileItem v-for="file in getFilteredFiles" :key="file.id" :file="file">
        <template v-slot:description>
          <strong>{{ file.description }}</strong>
        </template>
        <template v-slot:date> Date: {{ formatDate(file.date) }} </template>
        <template v-slot:image><img :src="file.src" /></template>
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
      tags: "kitten",
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
        file.tags.includes(this.tags)
      );
      console.log(filteredFiles, "kitten");
      filteredFiles.sort((a, b) => new Date(b.date) - new Date(a.date));

      return filteredFiles;
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
</style>
