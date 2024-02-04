<template>
  <div>
    <div class="file">
      <img :src="file.src" class="file-img" />
      <div class="file-body">
        <h2 class="description">{{ file.description }}</h2>
        <div class="tag-buttons">
          <button
            v-for="(tag, index) in file.tags.split('|')"
            :key="index"
            class="tag-button"
          >
            {{ tag }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    file: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.file-img {
  max-width: auto;
  width: auto;
  height: auto;
  max-height: auto;
  display: block;
}

.file-body {
  padding: 1rem;
}

.tag-buttons {
  display: flex;
  flex-wrap: wrap;
}

.tag-button {
  margin-right: $small-spacing;
  margin-bottom: $small-spacing;
  margin-top: $small-spacing;
  padding: $small-spacing;
  background-color: $josef-smoke;
  border: none;
  border-radius: $base-border-radius;
}
</style>
