<template>
  <div class="home">
    <h1>Josef coding task</h1>
    <!-- Render the files data with a resuable component (a list or card up to you!) -->
    <pre>// TODO: replace this block 👇 with a resusable component that renders elements from the files array 
      <Gallery>My Gallery</Gallery>
    </pre>
  </div>
</template>
<style lang="scss" scoped>
.home {
 }
 pre,code{
  overflow-x: auto;
  white-space: pre-wrap;
  line-break: anywhere;
}
</style>

<script>
// @ is an alias to /src
import Gallery from "@/components/Gallery.vue"
export default {
  name: "Dashboard",
  components: {
    Gallery
  },
  created() {
    this.$store.dispatch("gallery/get").then((res) => {
      console.log(res);
    });
  },
};
</script>
