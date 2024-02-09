<template>
  <div class="file-item" @mouseenter="hover = true" @mouseleave="hover = false">
    <img :src="file.src" alt="File preview" class="file-image" />
    <div class="file-info">
      <h2>{{ file.filename }}</h2>
      <div class="file-info-item">
        <span class="file-info-label">Tags: </span>
        <span>{{ file.tags }}</span>
      </div>
      <div class="file-info-item">
        <span class="file-info-label">Type: </span>
        <span>{{ file.mimetype }}</span>
      </div>
      <div class="file-info-item">
        <span class="file-info-label">Tags: </span>
        <span>{{ file.tags }}</span>
      </div>
      <div class="file-info-item">
        <span class="file-info-label">Date: </span>
        <span>{{ file.date }}</span>
      </div>
      <div class="file-info-item">
        <span>{{ file.description }}</span>
      </div>
    </div>
    <slot name="action-buttons"></slot>
  </div>
</template>

<script>
export default {
  props: {
    file: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style scoped lang="scss">
.file-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px;
  /* _variables.scss */
  border: $base-border;
  box-shadow: $shadow-base;
  transition: transform $base-duration $base-timing;

  &:hover {
    box-shadow: $shadow-hover;
    transform: translate(-10px, -3px);
  }
}

.file-info {
  margin-left: 20px;
  flex: 1;

  .file-info-item {
    margin-top: 10px;

    .file-info-label {
      font-weight: $weight-bold;
    }
  }
}

.file-image {
  width: 300px;
  object-fit: cover;
  height: 200px;
}
</style>
