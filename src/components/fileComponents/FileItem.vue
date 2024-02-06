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
