<template>
  <div class="container">
    <h1>Vue.js layout</h1>
    <JoList :title="listTitle" :items="files">
      <!-- eslint-disable-next-line vue/no-unused-vars -->
      <template v-slot:content="{ item }"></template>
    </JoList>
  </div>
</template>
<style lang="scss" scoped>
.container {
  max-width: 1024px;
  margin: 0 auto;
}
</style>
<script>
import api from "@/api";

export default {
  name: "Layout",
  data() {
    return {
      listTitle: "Vue.js Layout",
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
