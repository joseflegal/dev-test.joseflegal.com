<template>
  <div class="container">
    <h1>Vue.js layout</h1>
    <!-- Render the files data with a resuable component (a list or card up to you!) -->

    <section class="articles">
      <File v-for="(item, index) in filteredFiles" :item="item" :tags="item.tags" :imageSrc="item.src" :description="item.description" :index="index" :key="item.id">
        <h2>{{item.filename}}</h2>
        <a>{{item.mimetype}}</a>
      </File>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.container {
  max-width: 1024px;
  margin: 0 auto;
}
.articles {
  display: grid;
  max-width: 1200px;
  margin-inline: auto;
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
import File from "@/components/File.vue";

export default {
  name: "Layout",
  components: {
    File,
  },
  data() {
    return {
      files: [],
    };
  },
  created() {
    api.files.get().then((res) => {
      this.files = res;
    });
  },
  computed: {
    filteredFiles() {
      return this.files.filter((file) => file.tags.includes('kitten')).sort((a,b) => a.date - b.date);
    }
  }
};
</script>
