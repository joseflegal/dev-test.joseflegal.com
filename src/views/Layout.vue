<template>
  <div class="main-container">
    <h1>Pictures of things I like...</h1>
    <Kitten
      v-if="files.length"
      :nameOfFile="files[index]"
      :next="next"
      :previous="previous"
    />
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-family: $heading-font-family;
  text-align: center;
}
.main-container {
  margin: 0 auto;
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
