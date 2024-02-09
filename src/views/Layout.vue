<template>
  <div class="container">
    <h1>Vue.js layout</h1>
    <JoButton v-on:click="toggleKittensOnly">
      {{
        showKittensOnly
          ? "Show me everything!"
          : "Show me only kittens by date!"
      }}
    </JoButton>

    <JoImageCard
      v-for="file in showKittensOnly ? onlyKittensByDate : files"
      :key="file.id"
      :imageSrc="file.src"
      :altText="file.description"
    >
      <template v-slot:description>
        <p class="kitten-description">{{ file.description }}</p>
      </template>
    </JoImageCard>
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

.kitten-description {
  &:hover {
    // * Show some rainbow text when hovering over kittens/all items - would work better if I had set an isKitten flag or something instead
    background: -webkit-linear-gradient(
      45deg,
      red,
      orange,
      yellow,
      green,
      blue,
      indigo,
      violet,
      red
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>

<script>
// @ is an alias to /src
import api from "@/api";
import JoButton from "@/components/globals/JoButton";
import JoImageCard from "@/components/JoImageCard";

import { sortLatestFirst } from "@/utils";

export default {
  name: "Layout",
  components: { JoButton, JoImageCard },
  data() {
    return {
      files: [],
      showKittensOnly: false,
    };
  },
  computed: {
    onlyKittensByDate() {
      return this.files
        .filter((i) => i.tags?.includes("kitten"))
        .sort((a, b) => sortLatestFirst(a.date, b.date)); // * Some currying for some flavour
    },
  },
  created() {
    api.files.get().then((res) => {
      this.files = res;
    });
  },
  methods: {
    toggleKittensOnly() {
      this.showKittensOnly = !this.showKittensOnly;
    },
  },
};
</script>
