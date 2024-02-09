<template>
  <div class="container">
    <h1>Vue.js layout</h1>
    <FileList :files="files" @reload="roadData" />
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
import FileList from "@/components/files/FileList.vue";

export default {
  name: "Layout",
  components: {
    FileList,
  },
  data() {
    return {
      files: [],
    };
  },
  created() {
    this.roadData();
  },
  methods: {
    roadData: function () {
      this.$store.dispatch("files/getAll").then((res) => {
        this.files = res;
      });
    },
  },
};
</script>
