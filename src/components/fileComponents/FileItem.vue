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

<style scoped>
.file-item {
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 20rem;
  padding: 20px;
  margin: 20px;
}

.file-image {
  width: 5%;
  height: 5%;
}
</style>
