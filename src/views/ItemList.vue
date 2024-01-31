<!-- This is a reusable component that renders items from a predfined list/file -->
<template>
    <div>
      <div v-for="item in items" :key="item.id">
        <!--slot to render items -->
        <slot :item="item">
          <div>
            <h3>{{ item.name }}</h3>
            <p>Date: {{ item.date }}</p>
            <ul>
              <li v-for="tag in item.tags" :key="tag">{{ tag }}</li>
            </ul>
          </div>
        </slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      items: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  