<template>
  <div class="container">
    <h1>Vue.js layout</h1>
    <!-- Render the files data with a resuable component (a list or card up to you!) -->
    <FileList :files="files"></FileList>
  </div>
</template>
<style lang="scss" scoped>
.container {
  max-width: 1024px;
  margin: 0 auto;

  @media only screen and (max-width: $large-screen) {
    padding: 0 $base-spacing;
  }
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
import FileList from "@/components/fileComponents/FileList.vue";
export default {
  name: "Layout",
  data() {
    return {
      files: [],
    };
  },
  components: {
    FileList,
  },
  created() {
    this.$store.dispatch("files/get").then((res) => {
      console.log(res, "files");
      this.files = res;
    });
  },
};
</script>
