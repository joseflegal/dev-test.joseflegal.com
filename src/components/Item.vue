<template>
  <div class="item">
    <div class="picture">
      <slot name="pic"></slot>
    </div>
    <h2 class="description">
      <slot name="desc"></slot>
    </h2>
    <div class="date">
      <slot name="date"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
}
</script>

<style lang="scss" scoped>
.item {
  width: 320px;
  margin: 0 1.875rem 4rem;
  transition: opacity 0.8s ease-in-out;
}

.picture {
  height: 320px;
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: $big-spacing;
}

.picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: $modal-border-radius;
}

.description {
  font-size: $rootsize-lg;
  font-weight: $weight-bold;
  color: $josef-black;
  margin-bottom: $base-spacing;
}

.date {
  color: $josef-steel;
  font-size: $rootsize-lg;
}
</style>