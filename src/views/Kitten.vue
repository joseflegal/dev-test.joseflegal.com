<template>
  <div class="kitten-box-container">
    <img
      :src="nameOfFile.src"
      alt="nameOfFile.description"
      class="picture-style"
    />
    <ul class="picture-description">
      <li>Tags: {{ nameOfFile.tags }}</li>
      <li>Description: {{ nameOfFile.description }}</li>
      <li>Date: {{ nameOfFile.date }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.kitten-box-container {
  border: 1px solid $josef-grey;
  border-radius: 50px;
  margin-bottom: 16px;
  padding-bottom: 16px;
  max-width: 400px;
  background: $josef-purple-soft-dark;
}
.picture-style {
  padding: 16px;
  display: block;
  margin: 0 auto;
  border-radius: 30px;
}
.picture-description {
  font-family: $base-font-family;
  font-weight: $weight-bold;
  text-align: center;
}
</style>

<script>
export default {
  props: {
    nameOfFile: Object,
  },
};
</script>