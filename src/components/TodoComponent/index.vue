<template>
  <div class="space-y-4">
    <TodoInput />
    <TodoList v-if="!loading" />
    <TodoListLoading v-else />
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from "../../stores/todo.ts";
const todoStore = useTodoStore();

const loading = ref<boolean>(false);

function fetchTodos() {
  loading.value = true;
  todoStore.getTodosFromStorage();
  loading.value = false;
}

onMounted(() => {
  fetchTodos();
});
</script>
