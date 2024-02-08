<template>
  <div class="file-item">
    <slot name="image" class="file-image"></slot>
    <br />
    <slot name="description" class="file-description"></slot>
    <br />
    <slot name="date" class="file-date"></slot>
  </div>
</template>

<script>
export default {
  props: {
    file: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.file-item {
  border: $base-border;
  border-radius: $base-border-radius;
  box-shadow: $shadow-base;
  background-color: $josef-purple-pale;
  width: 20rem;
  padding: $base-spacing;
  margin: $base-spacing 0 $base-spacing 0;

  @media only screen and (max-width: $medium-screen) {
    width: 15rem;
  }

  @media only screen and (max-width: $small-screen) {
    width: 10rem;
  }
}

.file-image {
  width: 100%;
  height: auto;
  margin-bottom: $base-spacing;
}

.file-date {
  color: $josef-grey;
}
</style>
