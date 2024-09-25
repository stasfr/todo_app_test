<template>
  <div
    class="p-4 bg-neutral text-neutral-content rounded flex justify-between border-neutral border-2"
    :class="{ 'border-success': todo.isDone }"
  >
    <div class="flex flex-col justify-between">
      <span
        class="badge badge-primary text-transparent h-2 w-10"
        :class="{ 'badge-error': todo.isImportant }"
      ></span>
      <TodoCardTitle :todo="todo" v-model="isEditing" />
      <div class="text-xs">
        {{ formatDate(todo.endDate) }}
      </div>
    </div>

    <div class="flex flex-col items-center gap-4">
      <div class="dropdown dropdown-end">
        <div
          tabindex="0"
          role="button"
          class="p-2 size-8 hover:bg-primary rounded hover:text-primary-content"
        >
          <DotsIcon />
        </div>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li @click="isEditing = !isEditing">
            <a>Edit</a>
          </li>
          <li @click="todoStore.toggleImportant(todo.id)">
            <a>Toggle Label</a>
          </li>
          <li @click="todoStore.removeTodo(todo)"><a>Delete</a></li>
        </ul>
      </div>
      <input
        type="checkbox"
        v-model="isChecked"
        class="checkbox hover:checkbox-primary"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Todo } from "../../types/todo.ts";
import { useTodoStore } from "../../stores/todo.ts";

const props = defineProps<{
  todo: Todo;
}>();

const todoStore = useTodoStore();

const isChecked = ref<boolean>(props.todo.isDone);
const isEditing = ref<boolean>(false);

function formatDate(date: number): string {
  const d = new Date(date);
  return `${d.getDate()}.${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${d.getFullYear()}`;
}

watch(isChecked, () => {
  todoStore.toggleTodo(props.todo.id);
});
</script>
