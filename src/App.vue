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
  },
};
</script>
<style lang="scss">
.app {
  display: flex;
  max-width: 100%;
  width: 100%;
}

.sidebar-container {
  flex: 0 0 350px;
}

.main-container {
  flex: 1 1 auto;
}

.loader-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
