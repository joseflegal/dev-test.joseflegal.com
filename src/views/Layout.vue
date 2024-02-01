<template>
  <div class="container">
    <h1>Vue.js layout</h1>
    <div v-for="file in files" v-bind:key="file.id">
      <div v-bind:title="file.description">
        <img v-bind:src="file.src" />
        <div>
          {{ file.filename }}
        </div>
      </div>
    </div>
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

export default {
  name: "Layout",
  data() {
    return {
      files: [],
    };
  },
  created() {
    api.files.get().then((res) => {
      this.files = res;
    });
  },
};
</script>
