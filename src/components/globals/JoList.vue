<template>
  <div class="list">
    <div v-for="item in items" :key="item.id" class="list-item">
      <div class="list-item__image">
        <slot name="content" :item="item">
          <img :src="item.src" :alt="item.description" />
        </slot>
      </div>
      <div class="list-item__text">
        <slot name="content" :item="item">
          <div class="description">{{ item.description }}</div>
          <div class="filename">{{ item.filename }}</div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JoList",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  max-width: 800px;
  margin: 0 auto;

  .list-item {
    display: flex;
    align-items: center;
    padding: $base-spacing;
    border: $base-border;

    &__image {
      margin-right: $base-spacing;
      border-radius: $base-border-radius;
      box-shadow: $shadow-base;
    }

    &__text {
      flex: 1;
      line-height: $base-line-height;
      .description {
        font-weight: $weight-bold;
        color: $josef-dark-purple;
        font-size: 1.2rem;
      }

      .filename {
        font-weight: $weight-normal;
        font-size: 1rem;
      }
    }
  }
}
</style>
