<template>
  <form
    action=""
    class="text-center space-y-2"
    @keypress.enter.prevent="addTodo"
  >
    <input
      type="text"
      placeholder="What to do..."
      class="input input-bordered w-full max-w-xs"
      :class="{ 'input-error': isError }"
      v-model="todoTitle"
    />
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text" :class="{ 'text-error': isImportant }"
          >Important</span
        >
        <input
          type="checkbox"
          class="toggle"
          checked="checked"
          v-model="isImportant"
          :class="{ 'checkbox-error': isImportant }"
        />
      </label>
    </div>
  </form>

  <div class="join flex justify-center">
    <button class="btn btn-primary join-item" @click="addTodo">Add</button>
    <button class="btn btn-primary join-item" @click="todoStore.clearDoneTodos">
      Clear Done
    </button>
    <button class="btn btn-primary join-item" @click="todoStore.clearTodos">
      Clear all
    </button>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from "../../stores/todo.ts";

const todoStore = useTodoStore();

const todoTitle = ref<string>();
const isImportant = ref<boolean>(false);

const isError = ref<boolean>(false);

function addTodo() {
  if (todoTitle.value) {
    todoStore.addTodo(todoTitle.value, isImportant.value);
    todoTitle.value = "";
  } else {
    isError.value = true;
  }
}

watch(todoTitle, () => {
  isError.value = todoTitle.value === "";
});
</script>
