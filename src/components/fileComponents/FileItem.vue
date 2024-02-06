<template>
  <div class="file-item">
    <h3>{{ file }}</h3>
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
  width: 300px;
  padding: 20px;
  margin: 20px;
}
</style>
