<template>
  <div class="container">
    <h1>Vue.js layout</h1>
    <!-- Render the files data with a resuable component (a list or card up to you!) -->
    <pre>
        <file-item
          v-for="file in files"
          v-bind:key="file.id"
          v-bind:fileId="file.id"
          v-bind:fileName="file.filename"
          v-bind:fileMimeType="file.mimetype"
          v-bind:fileTags="file.tags"
          v-bind:fileDate="file.date"
          v-bind:fileSource="file.src"
        >
          <template #fileDescription>
            {{file.description}}
          </template>
        </file-item>
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
import api from "@/api";
import fileItem from "../components/File.vue";

export default {
  components: { fileItem },
  name: "Layout",
  data() {
    return {
      files: [],
    };
  },
  created() {
    api.files.get().then((res) => {
      console.log(res);
      this.files = res;
    });
  },
};
</script>
