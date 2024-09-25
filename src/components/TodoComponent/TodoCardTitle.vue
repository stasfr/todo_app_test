<template>
  <input
    v-if="isEditing"
    type="text"
    v-model="dynamicTitle"
    @keypress.enter="setNewTitle"
    :class="{ 'border-error': isError }"
    class="border-neutral border-2 focus:outline-none w-full"
  />
  <h2
    v-else
    class="font-bold line-clamp-1 border-neutral border-2"
    :class="{ 'line-through': todo.isDone }"
  >
    {{ dynamicTitle }}
  </h2>
</template>

<script setup lang="ts">
import type { Todo } from "../../types/todo.ts";
import { useTodoStore } from "../../stores/todo.ts";

const todoStore = useTodoStore();

interface Props {
  todo: Todo;
}

const props = defineProps<Props>();

const dynamicTitle = ref<string>(props.todo.title);
const isEditing = defineModel<boolean>();
const isError = ref<boolean>(false);

function setNewTitle() {
  if (dynamicTitle.value) {
    todoStore.setNewTitle(props.todo, dynamicTitle.value);
    isEditing.value = false;
  } else {
    isError.value = true;
  }
}
watch(dynamicTitle, () => {
  isError.value = dynamicTitle.value === "";
});
</script>
