<template>
  <h2 class="text-lg">Todo List: {{ todoStore.todosCount }}</h2>

  <div class="grid grid-cols-1 gap-4">
    <TodoCard v-for="todo in todoStore.todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from "../../stores/todo.ts";
const todoStore = useTodoStore();
</script>
