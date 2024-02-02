<template>
  <div class="" style="margin-left:0px; margin-right: 0px;">
    <!-- Render the files data with a resuable component (a list or card up to you!) -->
    <!-- <pre>// TODO: replace this block 👇 with a resusable component that renders elements from the files array  -->
    <div :key="file.id" v-for="(file, index) in kittens" style="">
      <HorizontalSection :direction="index % 2 == 1 ? 'left' : 'right'">
        <img :src="`${file.src}`"/>
        <h1>{{ file.description }}</h1>
      </HorizontalSection>
    </div>
    <!-- </pre> -->
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
import HorizontalSection from "../components/HorizontalSection";

export default {
  name: "Layout",
  data() {
    return {
      files: [],
    };
  },
  components: {
    HorizontalSection,
  },
  computed: {
    kittens(){
      let kittens = this.files.filter((file) => {
        return file.tags.split("|").includes("kitten");
      });
      return kittens;
    },
  },
  created() {
    api.files.get().then((res) => {
      this.files = res;
    });
  },
};
</script>
