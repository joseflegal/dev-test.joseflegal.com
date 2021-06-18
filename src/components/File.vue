<template>
  <div class="file-card">
    <span class="file-id">{{ fileId }}</span>
    <img class="file-imgage" :src="fileSource" :alt="fileName" />
    <slot class="file-description" name="fileDescription" />
    <span class="file-mime-type">{{ fileMimeType }}</span>
    <span class="file-tags">{{ fileTags }}</span>
    <span class="file-date">{{ fileDate }}</span>
  </div>
</template>
<script>
export default {
  name: "file-item",
  props: {
    fileId: {
      type: String,
      default: null,
    },
    fileName: {
      type: String,
      default: null,
    },
    fileMimeType: {
      type: String,
      default: null,
    },
    fileTags: {
      type: String,
      default: null,
    },
    fileDate: {
      type: String,
      default: null,
    },
    fileSource: {
      type: String,
      default: null,
    },
  },
};
</script>
<style lang="scss" scoped>
.file-card {
  font-weight: $weight-bold;
  color: $josef-white;
  background-color: $josef-green-deep;
  border-radius: $modal-border-radius;
  line-height: $base-line-height;
  font-size: 2rem;
  padding: 1.2em 1.325em 1.1625em;
  margin-bottom: 1rem;
}
.file-id {
  visibility: hidden;
}
.file-imgage {
  max-height: 300px;
}
.file-description {
}
.file-mime-type {
  visibility: hidden;
}
.file-tags {
  float: right;
  box-shadow: $shadow-base;
}
.file-date {
  visibility: hidden;
}
</style>
