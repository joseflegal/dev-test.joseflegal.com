<template>
  <div class="list-container">
    <div v-for="item in items" :key="item.id">
      <div class="list-item">
        <slot name="content" :item="item">
          <!-- Default slot content -->
          <img :src="item.src" alt="Image" />
          <div>{{ item.description }}</div>
          <div>{{ item.filename }}</div>
        </slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-container {

}
.list-item {
  /* Add your ListItem styling here */
}
</style>

<script>
export default {
  name: "List",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>