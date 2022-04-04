<template>
  <div class="jo-gallary">
    <div class="responsive" v-for="file in filesByTag" v-bind:key="file.id">
      <slot name="file" v-bind:file="file">
        <div class="card" v-bind:title="file.description">
          <img v-bind:src="file.src" />
          <div
            v-bind:class="{
              name: true,
              'is-blue': variant === 'blue',
              'is-gradient': variant === 'gradient',
              'is-outline': variant === 'outline',
            }"
          >
            {{ file.filename }}
          </div>
        </div>
      </slot>
    </div>
    <div class="clearfix"></div>
  </div>
</template>
<style lang="scss" scoped>
.jo-gallary {
  width: 100%;
  .responsive {
    padding: 0 6px;
    width: 25%;
    float: left;
    @media only screen and (max-width: 1024px) {
      width: 50%;
      margin: 6px 0;
    }
    @media only screen and (max-width: 768px) {
      width: 100%;
      margin: 6px 0;
    }
    .card {
      width: 100%;
      img {
        width: 100%;
        height: auto;
        vertical-align: middle;
        border-style: none;
        object-fit: cover;
        aspect-ratio: 4 / 3;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }
      .name {
        padding: 10px;
        text-align: center;
        background-color: $josef-purple;
        color: $josef-white;
        font-family: $base-font-family;
        font-weight: $weight-bold;
        line-height: 1;
        font-size: 1rem;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
        border-bottom: 1px solid transparent;
        &.is-blue {
          background-color: $josef-sky;
          color: $josef-black;
        }
        &.is-gradient {
          background-color: $josef-black;
          background-image: $josef-gradient;
          background-repeat: no-repeat;
          background-position: 50% 50%;
          background-size: 105% 105%;
          background-clip: border-box;
          color: $josef-black;
        }
        &.is-outline {
          background-color: transparent;
          color: $josef-purple;
          border-color: $josef-purple;
        }
      }
    }
  }
}
</style>
<script>
export default {
  name: "Table",
  props: {
    files: {
      type: Array,
      default: () => [],
    },
    tag: {
      type: String,
      default: "kitten",
    },
    variant: {
      type: String,
      default: "",
      validator: (value) => {
        return ["", "blue", "gradient", "outline"].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    filesByTag() {
      return this.files
        .filter((file) => file.tags.includes(this.tag))
        .map((file) => {
          return {
            ...file,
            tags: file.tags.split("|").join(", "),
            date: new Date(file.date),
          };
        })
        .sort((a, b) => b.date - a.date);
    },
  },
};
</script>
