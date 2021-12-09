<template>
  <div class="kitten-box-container">
    <b-jumbotron>
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

          <div class="label-align">
            <b-button @click="previous" variant="outline-primary" href="#"
              >Previous</b-button
            >
            <b-button @click="next" variant="outline-primary" href="#"
              >Next</b-button
            >
          </div>
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
