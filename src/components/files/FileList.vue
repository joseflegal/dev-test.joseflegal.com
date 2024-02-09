<template>
  <div>
    <div class="action-container">
      <div class="search-container">
        <JoInputField
          label="search"
          name="searchTag"
          v-model="searchTag"
          icon="fa-search"
          placeholder="Search by tag"
          :hideLabel="true"
        />
      </div>
      <div class="add-container">
        <JoButton variant="outline" @click="clearSearch">Clear</JoButton>
        <JoButton @click="showAddFileDialog">Add File</JoButton>
      </div>
    </div>
    <transition-group name="fade" tag="div" class="file-list">
      <FileItem
        v-for="file in filteredFiles"
        :key="file.id"
        :file="file"
        class="file-item"
      >
        <template v-slot:action-buttons>
          <div class="file-item-action-buttons">
            <JoCircleButton
              class="file-item-action-button"
              icon="fa-edit"
              title="Edit"
              size="small"
              @click="showEditFileDialog(file)"
            />
            <JoCircleButton
              class="file-item-action-button"
              icon="fa-trash"
              title="Trash"
              size="small"
              @click="deleteFile(file.id)"
            />
          </div>
        </template>
      </FileItem>
    </transition-group>

    <EditFileModal
      v-if="showEditFileModal"
      :file="editFile"
      @close="showEditFileModal = false"
      @add="addFile"
      @update="updateFile"
    />
  </div>
</template>

<script>
import FileItem from "./FileItem.vue";
import EditFileModal from "./EditFileModal.vue";

export default {
  components: {
    FileItem,
    EditFileModal,
  },
  props: {
    files: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      searchTag: "kitten",
      showEditFileModal: false,
      editFile: null,
    };
  },
  computed: {
    filteredFiles: function () {
      return (this.files ?? [])
        .filter(
          (file) =>
            !this.searchTag ||
            (this.searchTag && file.tags.includes(this.searchTag))
        )
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    },
  },
  methods: {
    clearSearch() {
      this.searchTag = "";
    },
    showAddFileDialog() {
      this.editFile = null;
      this.showEditFileModal = true;
    },
    showEditFileDialog(file) {
      this.editFile = file;
      this.showEditFileModal = true;
    },
    deleteFile(id) {
      this.$store.dispatch("files/remove", id).then((res) => {
        console.log(res);
        this.$emit("reload");
      });
    },
    addFile(newFileData) {
      this.editFile = null;
      this.showEditFileModal = false;
      this.$store.dispatch("files/create", newFileData).then((res) => {
        console.log(res);
        this.$emit("reload");
      });
    },
    updateFile(updatedFileData) {
      this.editFile = null;
      this.showEditFileModal = false;
      this.$store.dispatch("files/updateOne", updatedFileData).then((res) => {
        console.log(res);
        this.$emit("reload");
      });
    },
  },
};
</script>

<style scoped lang="scss">
.action-container {
  display: flex;

  .search-container {
    flex: 1;
    margin-right: 10px;
  }
}

.fade-enter-active,
.fade-leave-active {
  /* _variables.scss */
  transition: opacity $base-duration $base-timing;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.file-item {
  /* _variables.scss */
  background-color: $base-background-color;
  margin-top: $small-spacing / 2;

  /* CSS for odd items */
  &:nth-child(odd) {
    background-color: $secondary-background-color;
  }
}

.file-item {
  .file-item-action-buttons {
    position: absolute;
    right: 20px;
    display: none;

    .file-item-action-button {
      padding: 0px;
      margin: 10px;
      opacity: 0.3;

      &:hover {
        opacity: 1;
      }
    }
  }

  &:hover .file-item-action-buttons {
    display: flex;
  }
}
</style>
