<template>
  <div class="kitten-box-container">
    <b-jumbotron header="A collection of Animals">
      <div>
        <b-jumbotron>
          <template #lead>
            <ul>
              <li>Description: {{ nameOfFile.description }}</li>
              <li>Filename: {{ nameOfFile.filename }}</li>
              <li>Mimetype: {{ nameOfFile.mimetype }}</li>
              <li>Tags: {{ nameOfFile.tags }}</li>
              <li>Date: {{ nameOfFile.date }}</li>
              <li>SRC: {{ nameOfFile.src }}</li>
            </ul>
          </template>

          <hr class="my-4" />

          <b-button @click="previous" variant="primary" href="#"
            >Previous</b-button
          >
          <b-button @click="next" variant="success" href="#">Next</b-button>
        </b-jumbotron>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  props: {
    nameOfFile: Object,
    next: Function,
    previous: Function,
  },
};
</script>
