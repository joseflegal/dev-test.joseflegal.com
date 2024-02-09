<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <h1>{{ mode === "edit" ? "Edit File" : "Add File" }}</h1>
      <form @submit.prevent="handleSubmit">
        <JoInputField
          name="filename"
          label="File Name"
          v-model="formData.filename"
          placeholder="Enter file name"
          required
        />

        <JoInputField
          name="description"
          label="Description"
          v-model="formData.description"
          placeholder="Enter description"
          required
        />

        <JoInputField
          name="tags"
          label="Tags"
          v-model="formData.tags"
          placeholder="Separate tags with |"
          required
        />

        <JoInputField
          name="src"
          label="Source"
          :value="formData.src"
          placeholder="Select file"
          required
          width="100%"
          @click="clickFilePicker"
        />

        <input
          type="file"
          ref="filePicker"
          accept="image/*"
          style="display: none"
          @change="changeFileSource"
        />
        <div class="button-group">
          <JoButton variant="outline" @click="closeModal">Cancel</JoButton>
          <JoButton type="submit" iconRight="fa-save">
            {{ mode === "edit" ? "Update" : "Add" }}
          </JoButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    file: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      formData: {
        id: this.file ? this.file.id : this.generateId(),
        filename: this.file ? this.file.filename : "",
        description: this.file ? this.file.description : "",
        tags: this.file ? this.file.tags : "",
        src: this.file ? this.file.src : "",
        mimetype: this.file ? this.file.mimetype : "",
        date: this.file ? this.file.date : "",
      },
      mode: this.file ? "edit" : "create",
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    handleSubmit() {
      if (this.mode === "create") {
        this.formData.date = new Date().toISOString();
        this.$emit("add", this.formData);
      } else if (this.mode === "edit") {
        this.$emit("update", this.formData);
      }
      this.closeModal();
    },
    clickFilePicker() {
      this.$refs.filePicker.click();
    },
    changeFileSource() {
      const file = this.$refs.filePicker.files[0];
      this.formData.src = file.name;
      // Todo: (with server) Need To upload image and get image info from server here.
      this.formData.filename = file.name;
      this.formData.mimetype = file.type;
    },
    generateId() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          var r = (Math.random() * 16) | 0,
            v = c === "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        }
      );
    },
  },
};
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  /* _variables.scss */
  border-radius: $modal-border-radius;
  width: 400px;

  .button-group {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
