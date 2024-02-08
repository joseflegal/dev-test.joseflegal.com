<template>
    <div class="file-item">
      <img :src="file.src" :alt="file.description" class="file-image"/>
      <div class="file-info">
        <h2>{{ file.filename }}</h2>
        <p>{{ file.description }}</p>
        <span>{{ formattedDate }}</span>
        <div class="tags">
          <span v-for="tag in file.tags.split('|')" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      file: {
        type: Object,
        required: true
      }
    },
    computed: {
      formattedDate() {
        return new Date(this.file.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      }
    }
  };
  </script>
  
  <style scoped>
  .file-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .file-image {
    width: 100px;
    height: auto;
    margin-right: 20px;
  }
  
  .file-info {
    flex-grow: 1;
  }
  
  .tags {
    margin-top: 10px;
  }
  
  .tag {
    display: inline-block;
    background: #eee;
    padding: 5px 10px;
    margin-right: 5px;
    border-radius: 5px;
  }
  </style>
  