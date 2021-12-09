<template>
  <div class="container">
    <h1>Vue.js layout</h1>
    <!-- Render the files data with a resuable component (a list or card up to you!) -->
    <pre>// TODO: replace this block 👇 with a resusable component that renders elements from the files array 
      <code>
        <Kitten 
        :nameOfFile="files[index]" 
        :next="next"
        :previous="previous"
        />
  
      </code>
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
