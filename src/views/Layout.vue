<template>
    <div class="container">
      <div>
        <p>
          Search for a picture with a tag.
          <br />
          <em> eg. Kitten </em>
        </p>
        <div>
          <input v-model="newTag" placeholder="Search" />
          <p>{{ tagsCount }}</p>
          <p>Are you searching for {{ newTag }} ?</p>
        </div>
      </div>
     <Kitten
      v-for="file in filterByTerm" 
      :key="file.id"
      :nameOfFile="file"
      :next="next"
      :previous="previous"
    />
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
      newTag: "",
      tags: [
        {
          tag: "Kitten",
        },
      ],
    };
  },
  computed: {
    filterByTerm() {
      return this.files.filter(car => {
        return car.tags.toLowerCase().includes(this.newTag);
      });
    }
  },
  created() {
    api.files.get().then((res) => {
      this.files = res;
    });
  },
};
</script>
