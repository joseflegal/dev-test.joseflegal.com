<template>
  <div class="container">
    <!-- Render the files data with a resuable component (a list or card up to you!) -->
    <!-- <pre>// TODO: replace this block 👇 with a resusable component that renders elements from the files array  -->
    <div :key="file.id" v-for="(file, index) in kittens">
      <HorizontalSection :direction="index % 2 == 1 ? 'left' : 'right'">
        <img :src="`${file.src}`" />
        <h1>{{ file.description }}</h1>
      </HorizontalSection>
    </div>
    <!-- </pre> -->
  </div>
</template>
<style lang="scss" scoped>
  .container {
    max-width: 100%;
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
  import HorizontalSection from "../components/HorizontalSection";

  export default {
    name: "Layout",
    components: {
      HorizontalSection,
    },
    computed: {
      kittens() {
        return this.files.filter((file) => {
          return file.tags.split("|").includes("kitten");
        });
      },
      files(){
        return this.$store.getters["files/getFiles"];
      },
    },
    created() {
      this.$store.dispatch("files/getAll");
    },
  };
</script>
