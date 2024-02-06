<template>
  <div class="container">
    <h1>Vue.js layout</h1>
    <div v-for="file in filteredFiles" :key="file.id" class="file-list">
      <FileItem :file="file">
        <template v-slot>
          <button class="btn-view" @click="viewFile(file)">View</button>
        </template>
      </FileItem>
    </div>
  </div>
</template>

<script>
import FileItem from "@/components/FileItem.vue"; // Update this path if necessary
//import api from "@/api";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Layout",
  components: {
    FileItem,
  },
  /*data() {
    return {
      files: [],
    };
  },*/
  computed: {
    /*filteredFiles() {
      return this.files
        .filter((file) => file.tags.includes("kitten"))
        .sort((a, b) => new Date(a.date) - new Date(b.date));
    },*/
    ...mapGetters("files", ["filteredFiles"]),
  },
  created() {
    // Replace this with your actual API call
    this.fetchFiles();
  },
  methods: {
    ...mapActions("files", ["fetchFiles"]),
    /*fetchFiles() {
      // Assume 'api' is already defined and can be used to get the files
      api.files
        .get()
        .then((res) => {
          this.files = res;
        })
        .catch((error) => {
          console.error("Failed to load files:", error);
        });
    },*/

    viewFile(file) {
      // Implement downloading functionality
      const link = document.createElement("a");
      link.href = file.src;

      // Set the download attribute with a filename
      link.download = file.filename || "download";

      // Append to the document and trigger 'click' to start download
      document.body.appendChild(link);
      link.click();

      // Clean up by removing the element after download
      document.body.removeChild(link);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/resources/_variables.scss";

.layout-container {
  max-width: $large-screen;
  margin: 0 auto;
  padding: $page-padding;

  .layout-title {
    font-family: $heading-font-family;
    font-weight: $weight-bold;
    color: $base-font-color; // Replace with your actual color variable for headings
    margin-bottom: $large-spacing;
  }

  .file-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: $base-spacing;
  }
}
.btn-view {
  padding: $small-spacing;
  border-radius: $base-border-radius;
  border: $base-form-border;
  background-color: $base-background-color;
  cursor: pointer;
  transition: background-color $base-duration $base-timing,
    box-shadow $base-duration $base-timing;

  &:hover {
    background-color: tint($base-background-color, 90%);
    box-shadow: $shadow-hover;
  }

  &:focus {
    outline: $focus-outline;
  }
}
</style>
