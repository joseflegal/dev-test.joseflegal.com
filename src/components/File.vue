<template>
  <article>
    <figure>
      <img :src="imageSrc" :alt="description">
    </figure>
    <div class="article-body">
      <slot />
    </div>
  </article>
</template>
<script>
export default {
  name: "File",
  props: {
    description: {
      type: String,
      default: null,
    },
    imageSrc: {
      type: String,
      default: null,
    },
  }
}
</script>
<style lang="scss" scoped>

article {
  position: relative;
  max-width: 400px;
  margin-inline: auto;
  border-radius: 16px;
  overflow: hidden;
  padding-bottom: 20px;
  box-shadow: none;
  background: $base-background-color;
}

/* basic article styling */
article h2 {
  margin: 0 0 18px 0;
  font-family: $heading-font-family;
  font-size: 1.9rem;
  letter-spacing: 0.06em;
  color: black;
}

article a {
  display: block;
  font-family: $base-font-family;
}

figure {
  margin: 0;
  padding: 0;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.article-body {
  background-color: $josef-sky;
}

</style>