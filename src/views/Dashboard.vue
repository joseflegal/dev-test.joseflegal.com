<template>
  <div class="home">
    <h1>Josef coding task</h1>
    <!-- Render the files data with a resuable component (a list or card up to you!) -->
    <pre>// TODO: replace this block 👇 with a resusable component that renders elements from the files array 
      <code>files:
      {{files}}</code>
    </pre>
  </div>
</template>
<style lang="scss" scoped>
.home {
 }
 pre,code{
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
  name: "Dashboard",
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
