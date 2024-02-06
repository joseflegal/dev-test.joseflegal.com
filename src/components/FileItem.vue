<template>
  <div class="file-item">
    <img :src="file.src" :alt="file.description" class="file-image" />
    <div class="file-info">
      <h2>{{ file.filename }}</h2>
      <p>{{ file.description }}</p>
      <p>Uploaded on: {{ formatDate(file.date) }}</p>
      <!-- Slot for additional content -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FileItem",
  props: {
    file: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate(dateStr) {
      const date = new Date(dateStr);
      return date.toLocaleDateString();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/resources/_variables.scss";
.file-item {
  display: flex;
  align-items: center;
  background-color: $base-background-color;
  border-radius: $base-border-radius;
  box-shadow: $shadow-base;
  padding: $small-spacing;
  margin-bottom: $base-spacing;
  transition: box-shadow $base-duration $base-timing;

  &:hover {
    box-shadow: $shadow-hover;
  }

  .file-image {
    width: auto; // Adjust the width as necessary
    max-width: 100%; // Ensure it is responsive and doesn't overflow
    max-height: 100px; // Set a smaller maximum height
    object-fit: cover; // This will cover the area, potentially cropping the image
    border-radius: $base-border-radius;
    margin-right: $small-spacing;
  }

  .file-details {
    flex: 1;

    .file-title {
      font-family: $heading-font-family;
      font-weight: $weight-bold;
      color: $base-font-color; // Replace with your actual color variable for text
      margin-bottom: $small-spacing / 2;
    }

    .file-description {
      font-family: $base-font-family;
      color: $base-font-color; // Replace with your actual color variable for text
      margin-bottom: $small-spacing / 2;
    }

    .file-date {
      font-family: $base-font-family;
      color: $base-font-color; // Replace with your actual color variable for text
      font-size: smaller;
    }
  }
}
</style>
