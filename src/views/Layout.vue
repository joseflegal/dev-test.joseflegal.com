<template>
  <div class="container">
    <h1>Vue.js layout</h1>
    <JoGallery v-bind:files="files" v-bind:tag="tag" variant="blue">
      <!-- <template v-slot:file="{ file }">
        {{ file.id }}
      </template> -->
    </JoGallery>
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
import JoGallery from "@/components/globals/JoGallery";
export default {
  name: "Layout",
  components: {
    JoGallery,
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
