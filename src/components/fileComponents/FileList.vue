<template>
  <div class="file-list">
    <h2>List of Files</h2>
    <FileItem v-for="file in files" :key="file.id" :file="file">
      <template v-slot:description>
        <strong>{{ file.description }}</strong>
      </template>
      <template v-slot:date> Date: {{ formatDate(file.date) }} </template>
    </FileItem>
  </div>
</template>

<script>
import FileItem from "@/components/fileComponents/FileItem.vue";

export default {
  components: {
    FileItem,
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
      // Filter files that include 'kitten' tag
      const filtered = this.files.filter((file) =>
        file.tags.includes("kitten")
      );

      // Sort files by date
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

      return filtered;
    },
  },
};
</script>
