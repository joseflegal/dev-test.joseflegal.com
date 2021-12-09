<template>
  <div class="kitten-box-container">
    <img
      :src="nameOfFile.src"
      alt="nameOfFile.description"
      class="picture-style"
    />
    <div class="picture-description">{{ nameOfFile.description }}</div>
    <!-- <ul>
      <li>Tags: {{ nameOfFile.tags }}</li>
      <li>Date: {{ nameOfFile.date }}</li>
    </ul> -->

    <div class="button-pictures">
      <button
        @click="previous"
        class="button-images-each"
        variant="outline-primary"
        href="#"
      >
        Previous
      </button>
      <button
        @click="next"
        class="button-images-each"
        variant="outline-primary"
        href="#"
      >
        Next
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.kitten-box-container {
  border: 8px solid #6134c6;
  border-radius: 50px;
  margin: 0 auto;
  max-width: 600px;
}
.picture-style {
  padding: 20px;
  display: block;
  margin: 0 auto;
  border-radius: 30px;
}
.picture-description {
  font-family: $base-font-family;
  font-weight: $weight-bold;
  text-align: center;
}
.button-pictures {
  display: block;
  text-align: center;
}
.button-images-each {
  margin: 10px;
  font-size: 1.0625rem;
  background: #6134c6;
  color: #fff;
  padding: 0 1.875rem;
  line-height: 3rem;
  border-width: 0;
  border-radius: 100px;
  text-align: center;
}
</style>

<script>
export default {
  props: {
    nameOfFile: Object,
    next: Function,
    previous: Function,
  },
};
</script>
