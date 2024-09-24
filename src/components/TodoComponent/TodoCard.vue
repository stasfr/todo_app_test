<template>
  <div
    class="p-4 bg-neutral text-neutral-content rounded flex gap-8 justify-between"
  >
    <div>
      <h2 class="font-bold">{{ todo.title }}</h2>
      <p>{{ todo.text }}</p>
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
          <li><a>Edit</a></li>
          <li><a>Delete</a></li>
          <li><a>Archive</a></li>
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
import { Todo } from "/src/types";
import { useTodoStore } from "/src/stores/todo";

const props = defineProps<{
  todo: Todo;
}>();

const todoStore = useTodoStore();

const isChecked = ref<boolean>(props.todo.isDone);

watch(isChecked, () => {
  todoStore.toggleTodo(props.todo.id);
});
</script>
