<template>
  <div class="container">
    <h1>Vue.js layout</h1>
    <!-- Render the files data with a resuable component (a list or card up to you!) -->
    <div>
      <h2>Filtered and Sorted Files</h2>
      <ItemList :items="filteredAndSortedFiles">
        <!-- Customized rendering for each item -->
        <template v-slot="{ item }">
          <div class="item-container">
            <ul>
              <p class="date-style">Date: {{ item.date }}</p>
              <li class="item-style">{{ item.tags }}</li>
            </ul>
          </div>
        </template>
      </ItemList>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  max-width: 1024px;
  margin: 0 auto;
}

.item-container {
  display: flex;
  align-items: center;
}

.date-style {
  color: $josef-purple;
}

.item-style {
  color: $josef-dark-purple;
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
import ItemList from "./ItemList.vue";

export default {
    name: "Layout",
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
    components: { ItemList },

    computed: {
      // filter list and render items with 'kitten' tag and sort the rendered lists with date 
      filteredAndSortedFiles() {
        return this.files
        .filter(file => file.tags.includes('kitten'))
        .sort((a, b) => new Date(b.date) - new Date(a.date));
      }
    }
};
</script>
