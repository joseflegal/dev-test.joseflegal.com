<template>
  <div class="layout">
    <h1>Vue.js layout</h1>
    <Table :files="files" :tag="tag" />
    <!-- Render the files data with a resuable component (a list or card up to you!) -->
    <!-- <pre>// TODO: replace this block 👇 with a resusable component that renders elements from the files array 
      <code>files:
      {{files}}</code>
    </pre> -->
  </div>
</template>
<style lang="scss" scoped>
.layout {
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
// import api from "@/api";
import Table from "@/components/Table";
export default {
  name: "Layout",
  components: {
    Table,
  },
  data() {
    return {
      tag: "kitten",
    };
  },
  computed: {
    files() {
      return this.$store.state.file.files;
    },
  },
  created() {
    this.$store.dispatch("file/getAll");
  },
};
</script>
