<template>
  <div class="file-list">
    <h2>List of Files</h2>
    <FileItem></FileItem>
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
