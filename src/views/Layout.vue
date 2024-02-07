<template>
  <div class="container">
    <!-- <h1>Vue.js layout</h1> -->
    <FileList :files="filteredAndSortedFiles" >Files list</FileList>
    <!-- Render the files data with a resuable component (a list or card up to you!) -->
    <!-- <pre>// TODO: replace this block 👇 with a resusable component that renders elements from the files array 
      <code>files:
        
       {{files}}</code> -->
    <!-- </pre> -->
  </div>
</template>
<style lang="scss" scoped>
.container {
  max-width: 1024px;
  margin: 0 auto;
}

pre,
code {
  overflow-x: auto;
  white-space: pre-wrap;
  white-space: pre-wrap;
  line-break: anywhere;
}
</style>
<script>
// @ is an alias to /src
//import api from "@/api";
import FileList from "../components/FileList.vue";
import { mapGetters } from 'vuex';  // Import mapGetters from vuex

export default {
  name: "Layout",
  components: {
    FileList
  },
  data() {
    return {
      files: [],
    };
  },
  created() {
    // api.files.get().then((res) => {
    //   this.files = res;
    // });
    this.$store.dispatch('layout/fetchFiles');
  },
  computed: {
    // filteredAndSortedFiles() {
    //   // Filter files that include "kitten" in tags
    //   const kittenFiles = this.files.filter((file) =>
    //     file.tags.toLowerCase().includes("kitten")
    //   );

    //   // Sort filtered files by date
    //   const sortedFiles = kittenFiles.sort(
    //     (a, b) => new Date(b.date) - new Date(a.date)
    //   );

    //   return sortedFiles;
    // },
    ...mapGetters('layout', ['filteredAndSortedFiles']),
  },
};
</script>
