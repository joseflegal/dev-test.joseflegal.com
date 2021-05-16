<template>
  <div class="home">
    <h1>Josef Dashboard</h1>
    <!-- Render the files data with a resuable component (a list or card up to you!) -->
  </div>
</template>

<script>
// @ is an alias to /src
import api from "@/api";

export default {
  name: "Home",
  data() {
    return {
      files: null,
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
