<template>
  <div class="bar-section">
    <img :src="`${record.src}`" />
  </div>
</template>

<script>
export default {
  name: "BarSection",
  props: {
    record: Object,
  },
}
</script>