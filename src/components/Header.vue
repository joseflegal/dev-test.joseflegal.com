<template>
  <div class="header-container">
    <h1>{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.header-container {
  background-color: $highlight-color;
  height: 300px;
  display: flex;
  align-content: center;
  align-items: center;
  flex-flow: column nowrap;
  padding-top: 90px;
  justify-content: space-between;

  h1 {
    font-size: 3.5rem;
    text-align: center;
    line-height: $heading-line-height;
    letter-spacing: -0.03em;
    font-weight: $weight-bold;
    color: $josef-white;
  }
}
</style>