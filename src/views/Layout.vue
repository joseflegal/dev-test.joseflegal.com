<template>
  <div class="main-container">
    <h1>Pictures of things I like...</h1>
    <Kitten
      v-if="files.length"
      :nameOfFile="files[index]"
      :next="next"
      :previous="previous"
    />
    <div>
      <p>
        Search for a picture with a tag.
        <br />
        <em> eg. Kitten </em>
      </p>
      <div>
        <!-- <div v-if="state === 'edit'"> -->
        <input v-model="newTag" placeholder="Search" />
        <p>{{ tagsCount }}</p>
        <input type="Submit" />
      </div>
      <TagsFilter />
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-family: $heading-font-family;
  text-align: center;
}
.main-container {
  margin: 0 auto;
}
</style>

<script>
// @ is an alias to /src
import api from "@/api";
import Kitten from "./Kitten.vue";
import TagsFilter from "./TagsFilter.vue";

export default {
  name: "Layout",
  components: {
    Kitten,
    TagsFilter,
  },

  data() {
    return {
      files: [],
      index: 0,
      newTag: "",
    };
  },
  methods: {
    next() {
      this.index++;
    },
    previous() {
      this.index--;
    },
    // saveTag: function () {
    //   this.tag.push({
    //     label: this.newTag,
    //   });
    //   this.newTag = "";
    // },
  },
  computed: {
    tagsCount() {
      return this.newTag.length;
    },
  },
  created() {
    api.files.get().then((res) => {
      this.files = res;
    });
  },
};
</script>
