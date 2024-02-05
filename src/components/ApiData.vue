<template>
    <div class = "card">
        <div class = "card-content">
            <ul>
                <li v-for="item in files" :key="item.id">
                    <slot name="item" :file="item" ></slot>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        files: Array,
    },
}

</script>

<style>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 16px;
}

.card-content {
  padding: 16px;
}

.card-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 16px;
}
</style>

