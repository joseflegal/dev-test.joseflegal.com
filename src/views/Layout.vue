<template>
  <div class="container">
    <h1>A collection of Animals</h1>
    <div>
      <Kitten
        v-if="files.length"
        :nameOfFile="files[index]"
        :next="next"
        :previous="previous"
      />
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
import Kitten from "./Kitten.vue";

export default {
  name: "Layout",
  components: {
    Kitten,
  },

  data() {
    return {
      files: [],
      index: 0,
    };
  },
  methods: {
    next() {
      this.index++;
    },
    previous() {
      this.index--;
    },
  },
  created() {
    api.files.get().then((res) => {
      this.files = res;
    });
  },
};
</script>
