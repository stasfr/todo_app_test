<template>
  <div>Todo List: {{ todoStore.todosCount }}</div>
  <div class="space-y-4">
    <TodoCard v-for="todo in todoStore.todos" :key="id" :todo="todo" />
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from "@/stores/todo";
const todoStore = useTodoStore();

todoStore.getTodosFromStorage();
</script>
