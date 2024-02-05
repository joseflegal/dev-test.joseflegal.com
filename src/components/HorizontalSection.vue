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
  @media only screen and (max-width: $medium-screen) {
    .left, .right {
      flex-direction: column;
    }
  }

  @media only screen and (min-width: $medium-screen-up) {
    .left {
      flex-direction: row;

      img {
        margin-left: 8em;
      }
    }

    .right {
      flex-direction: row-reverse;

      img {
        margin-right: 8em;
      }
    }
  }

  .left {
    background-color: $josef-purple;

    img {
      border: 5px solid $josef-white;
    }

    h1 {
      color: $josef-white;
    }
  }

  .right {
    background-color: $josef-white;

    img {
      border: 5px solid $josef-purple;
    }

    h1 {
      color: $josef-black;
    }
  }

  .horizontal-section {
    width: 100%;
    height: 40em;
    display: flex;
    align-items: center;
    min-width: 30em; 

    h1 {
      font-weight: $weight-bold;
      letter-spacing: 0rem;
      font-size: 1.6em;
      font-family: $base-font-family;
      margin: 0 2em;
    }
  }

  img {
    margin-top: 4em;
    margin-bottom: 4em;
    width: 20em;
    height: 20em;
    object-fit: cover;
    border-radius: 2rem;
  }
</style>
