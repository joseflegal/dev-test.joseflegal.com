<template>
    <div :class="`horizontal-section ${direction}`">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: "HorizontalSection",
  props: {
    direction: {
      type: String,
      default: "right",
    },
  },
};
</script>

<style lang="scss" scoped>
.left {
  background-color: $josef-purple;
  flex-direction: row;

  img {
    border: 5px solid $josef-white;
    margin-left: 100px;
  }

  h1 {
    color: $josef-white;
  }
}

.right {
  background-color: $josef-white;
  flex-direction: row-reverse;

  img {
    border: 5px solid $josef-purple;
    margin-right: 100px;
  }

  h1 {
    color: $josef-black;
  }
}

.horizontal-section {
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;

  h1 {
    font-weight: 800;
    letter-spacing: 0rem;
    font-size: 22px;
    font-family: "Helvetica", sans-serif;
  }
}

img {
  margin: 80px 45px 80px 45px;
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 2rem;
}
</style>
