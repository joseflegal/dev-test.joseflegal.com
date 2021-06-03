<template>
  <div class="home">
    <Header title="Pets">
      <div class="filter-container">
        <JoButton 
          class="button"
          v-for="item in tags"
          :key="item.title"
          :iconLeft="item.icon ? 'fa-' + item.icon : ''"
          :style="
            item.title === selectedTag
              ? {
                  background: 'hsla(0, 0%, 100%, 0.1)',
                  outline: '0 none',
                }
              : {}
          "
          @click.native="handleClickFilterItem(item)"
        >
          {{ item.title }}
        </JoButton>
      </div>
    </Header>

    <div class="list">
      <Item v-for="item in filteredFiles" :key="item.id">
        <slot name="desc"></slot>
        <template v-slot:desc>
          {{ item.description }}
        </template>
        <template v-slot:pic>
          <img :src="item.src" />
        </template>
        <template v-slot:date>
          {{ item.dateStr }}
        </template>
      </Item>
    </div>
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

.filter-container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  padding-bottom: 30px;
}

.list {
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  justify-content: center;
  margin-top: 80px;
}
.button {
  text-transform: capitalize;
}
</style>

<script>
// @ is an alias to /src
import api from "@/api";
import Item from "@/components/Item";
import Header from "@/components/Header";
import JoButton from "@/components/globals/JoButton.vue";

export default {
  components: {
    Header,
    Item,
    JoButton,
  },
  data() {
    return {
      files: [],
      tags: [
        { title: "All" },
        { title: "kitten", icon: "cat" },
        { title: "puppy", icon: "dog" },
        { title: "elvis", icon: "ghost" },
      ],
      selectedTag: "All",
    };
  },
  computed: {
    filteredFiles() {
      const files = [];
      for (const file of this.files) {
        if (
          this.selectedTag === "All" ||
          file.tags.split("|").includes(this.selectedTag)
        ) {
          files.push(file);
        }
      }

      const sortedFiles = files
        .sort((a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf())
        .map((file) => {
          file.dateStr = new Date(file.date).toLocaleDateString();
          return file;
        });
      return sortedFiles;
    },
  },
  methods: {
    handleClickFilterItem(tag) {
      const { title } = tag;
      this.selectedTag = title;
      this.filterFiles();
    },
  },
  created() {
    api.files.get().then((res) => {
      console.log(res);
      this.files = res;
    });
  },
};
</script>
