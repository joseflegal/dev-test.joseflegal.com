<template>
    <div>
        <h1>
            <slot></slot>
        </h1>
      <ul>
        <li v-for="file in files" :key="file.id">
          <img :src="file.src" alt="file.description" />
          <p>{{ file.description }}</p>
          <p>{{ file.filename }}</p>
          <!-- Add additional file details as needed -->
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      files: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styling as needed */
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 20px;
  }
  </style>
  