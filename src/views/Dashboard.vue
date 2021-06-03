<template>
  <div class="home">
    <h1>Josef coding task</h1>
    <h2>Rendering the list of files from the API with a reusable component:</h2>
    <div class="card-wrapper">
      <ImageCard v-for="file in files" :key="file.id" class="card" :width="24">
        <img
          slot="card-img"
          class="card-img"
          :src="file.src"
          :alt="file.description"
        />
      </ImageCard>
    </div>
    <h2>
      Create a computed property that filters the files for tags including
      'kitten' then sorts them by date:
    </h2>
    <div class="cat-card-wrapper">
      <ImageCard
        v-for="file in kittenFiles"
        :key="file.id"
        :width="32"
        class="cat-card"
      >
        <img
          slot="card-img"
          class="cat-card-img"
          :src="file.src"
          :alt="file.description"
        />
      </ImageCard>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/styles/resources/_variables.scss";

.home {
  padding-left: $page-padding;
  padding-right: $page-padding;

  .card-wrapper {
    display: flex;
    flex-wrap: wrap;

    .card {
      margin-right: $small-spacing;
      margin-bottom: $small-spacing;

      .card-img {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: $base-border-radius;
        object-fit: cover;
      }
    }
  }

  .cat-card-wrapper {
    display: flex;
    flex-wrap: wrap;

    .cat-card {
      margin-right: $small-spacing;
      margin-bottom: $small-spacing;

      .cat-card-img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>

<script>
// @ is an alias to /src
import ImageCard from "@/components/ImageCard";

export default {
  components: { ImageCard },
  name: "Dashboard",
  data() {
    return {
      files: [],
    };
  },
  created() {
    // Get dashboard data.
    this.$store.dispatch("dashboard/get").then((res) => {
      console.log(res);
      this.files = res;
    });
  },
  computed: {
    /**
     * Filters 'files' data for tags including 'kitten', then sort by date.
     */
    kittenFiles() {
      return this.files
        .reduce((result, file) => {
          // Convert entire 'tags' string to lowercase in event of uppercase characters in tags.
          if (file.tags.toLowerCase().includes("kitten")) {
            result.push(file);
          }
          return result;
        }, [])
        .sort((a, b) => {
          if (a.date < b.date) {
            return -1;
          } else {
            return 0;
          }
        });
    },
  },
};
</script>
