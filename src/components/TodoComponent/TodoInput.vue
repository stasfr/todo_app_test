<template>
  <form action="" class="join" @keydown="handleKeyDown">
    <input
      type="text"
      placeholder="Type here"
      class="input input-bordered w-full max-w-xs join-item"
      v-model="todoTitle"
    />
  </form>
</template>

<script setup lang="ts">
import { useTodoStore } from "@/stores/todo";
import { Todo } from "@/src/types";
const todoStore = useTodoStore();

const todoTitle = ref<string>();

const newTodo = ref<Todo>();

function handleKeyDown(event: KeyboardEvent) {
  if (event.key === "Enter") {
    addTodo();
  }
}

function addTodo() {
  newTodo.value = {
    title: todoTitle.value,
  };
  todoStore.addTodo(newTodo.value);
  todoTitle.value = "";
}
</script>
