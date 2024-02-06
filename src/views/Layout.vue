<template>
  <div class="container">
    <h1>Vue.js layout</h1>
    <!-- Render the files data with a resuable component (a list or card up to you!) -->
    <pre>// TODO: replace this block 👇 with a resusable component that renders elements from the files array 
      <h2>Write your solution here</h2>
      <FileList :files="files"></FileList>
      <code>files:
      {{files}}</code>
    </pre>
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
