<template>
  <h2 class="color-primary">header</h2>
  <div>{{ test }}</div>
</template>

<script setup lang="ts">
const test = ref<string>("test");
</script>
