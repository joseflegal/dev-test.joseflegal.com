<template>
  <div class="card" :style="cssProps">
    <slot name="card-img"></slot>
  </div>
</template>

<style lang="scss" scoped>
@import "src/styles/resources/_variables.scss";

.card {
  position: relative;

  width: var(--width);
  min-width: var(--min-width);
  max-width: var(--max-width);

  height: auto;
  min-height: var(--min-height);
  max-height: var(--max-height);

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
}
</style>

<script>
export default {
  props: {
    /**
     * The width percentage size the card will try to expand to.
     */
    width: {
      type: Number,
      default: 25,
    },
    /**
     * The minimum width (px) of the card.
     */
    minWidth: {
      type: Number,
      default: 300,
    },
    /**
     * The maximum width (px) of the card.
     */
    maxWidth: {
      type: Number,
      default: 500,
    },
    /**
     * The minimum height (px) of the card.
     */
    minHeight: {
      type: Number,
      default: 300,
    },
    /**
     * The maximum height (px) of the card.
     */
    maxHeight: {
      type: Number,
      default: 500,
    },
  },
  computed: {
    /**
     * Converting the component's properties to CSS, for use in CSS.
     */
    cssProps() {
      return {
        "--width": this.width + "%",
        "--min-width": this.minWidth + "px",
        "--max-width": this.maxWidth + "px",
        "--min-height": this.minHeight + "px",
        "--max-height": this.maxHeight + "px",
      };
    },
  },
};
</script>
