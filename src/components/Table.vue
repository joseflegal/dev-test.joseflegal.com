<template>
  <div class="table">
    <table>
      <tr>
        <th>File Name</th>
        <th>Description</th>
        <th>Mimetype</th>
        <th>Tags</th>
        <th>Date</th>
        <th>Thumbnail</th>
      </tr>
      <tr v-for="file in filesByTag" v-bind:key="file.id">
        <td>{{ file.filename }}</td>
        <td>{{ file.description }}</td>
        <td>{{ file.mimetype }}</td>
        <td>{{ file.tags }}</td>
        <td>{{ file.date.toISOString().split("T")[0] }}</td>
        <td><img v-bind:src="file.src" /></td>
      </tr>
    </table>
  </div>
</template>
<style lang="scss" scoped>
.table {
  display: block;
  overflow-x: auto;
}

table {
  font-size: 1rem;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  margin: 0;
  display: table;
  border: 1px solid $josef-iron;
  table-layout: auto;

  tr {
    border-bottom: 1px solid $josef-grey;

    &:nth-child(odd) {
      background-color: $josef-white;
    }

    &:nth-child(even) {
      background-color: $josef-purple-pale;
    }
  }

  th {
    display: table-cell;
    padding: 8px;
    text-align: left;
    background-color: $josef-purple;
    color: $josef-white;
  }

  td {
    display: table-cell;
    max-width: 200px;
    height: 120px;
    padding: 8px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    // white-space: nowrap;

    img {
      float: left;
      width: 100px;
      height: 100px;
      object-fit: cover;
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
