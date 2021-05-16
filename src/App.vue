<template>
  <div id="app" class="app">
    <div class="sidebar-container">
      <Sidebar></Sidebar>
    </div>
    <main class="main-container">
      <div v-if="!loaded" class="loader-wrapper">
        <Loader />
      </div>
      <router-view v-else />
    </main>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar.vue";
import Loader from "@/components/Loader.vue";
import api from "@/api";

export default {
  components: {
    Sidebar,
    Loader,
  },
  data() {
    return {
      loaded: false,
    };
  },
  created() {
    this.$store.dispatch("user/get").then((res) => {
      console.log(res);
      this.loaded = true;
    });

    console.log(
      api.files.get().then((res) => {
        console.log(res);
      })
    );
  },
};
</script>
<style lang="scss">
.app {
  display: flex;
}

.sidebar-container {
  flex: 0 0 350px;
}

.main-container {
  flex: 1 1 auto;
  height: 100vh;
  padding: $base-spacing;
}

.loader-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
