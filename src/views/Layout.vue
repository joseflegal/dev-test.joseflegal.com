<template>
  <div>
    <api-data :files="filterImagesByKittensAndSortItByDate">
      <template v-slot:item="{ file }">
        <div>
          <strong>{{ file.description }}</strong>
          <p></p>
          <img :src = "file.src" />
        </div>
      </template>
    </api-data>
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
import ApiData from "@/components/ApiData.vue"

export default {
  name: "List",
  data() {
    return {
      files: [],
      filteredData: [],
    };
  },
  created() {
    api.files.get().then((res) => {
      this.files = res;
    });
  },
  components: {
    ApiData,
  },

  computed: {
    filterImagesByKittensAndSortItByDate() {
      // Filter images by type 'kitten'
      const kittenFiles = this.files.filter(file => file.tags.includes('kitten'));
      // Sort images by date in ascending order
      const sortedFiles = kittenFiles.sort((elementOne, elementTwo) => new Date(elementOne.date) - new Date(elementTwo.date));
      
      return sortedFiles;
    },
  },
};
</script>
