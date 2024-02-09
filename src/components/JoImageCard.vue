<template>
  <div class="jo-image-card">
    <div class="jic-image-container">
      <img
        class="jic-image"
        :src="imageSrc"
        :alt="altText"
        title="Rub mouse over picture to pet"
      />
    </div>
    <slot name="description"><p>There is nothing to say about this kitten</p></slot>
  </div>
</template>

<script>
export default {
  name: "JoImageCard",
  props: {
    imageSrc: {
      type: String,
      required: false,
    },
    altText: {
      type: String,
      required: true, // * Force the accessibility! lol
    },
  },
  methods: {},
};
</script>

<style lang="scss">
.jo-image-card {
  @include base-transition-duration;
  box-shadow: $shadow-base;

  height: 24rem;

  padding: $base-spacing;
  border: $base-border;
  border-radius: $base-border-radius;
  margin-bottom: $base-spacing;

  display: flex;
  flex-direction: column;

  transition-property: box-shadow;

  box-shadow: $shadow-base;

  &:hover {
    box-shadow: $shadow-hover;
  }
}

.jic-image-container {
  cursor: grab; // * To pet the kittens!!

  height: percentage(2/3);

  border-radius: $base-border-radius;
  margin-bottom: $base-spacing;

  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
}

.jic-image {
  width: 100%;
}
</style>
