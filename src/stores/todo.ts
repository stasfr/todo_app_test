import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Todo } from "@/types/todo";
import { ExpiringStorage } from "@/utils/ExpiringStorage";

export const useTodoStore = defineStore("todoStore", () => {
  const todos = ref<Todo[]>([]);

  const todosCount = computed(() => todos.value.length);

  function addTodo(todo: Todo): void {
    todo.id = Date.now().toString();
    todo.isDone = false;
    todo.startDate = Date.now();
    todo.endDate = todo.startDate + 1000 * 60 * 60 * 24;
    todo.label = "basic";
    todos.value.push(todo);

    ExpiringStorage.set("todos", todos.value);
  }

  function removeTodo(todo: Todo): void {
    todos.value = todos.value.filter((t) => t.id !== todo.id);

    ExpiringStorage.set("todos", todos.value);
  }

  function getTodosFromStorage(): void {
    const cachedTodos = ExpiringStorage.get<Todo[]>("todos");
    if (cachedTodos) {
      todos.value = cachedTodos;
    }
  }

  function setTodosToStorage(): void {
    ExpiringStorage.set("todos", todos.value);
  }

  function clearTodos(): void {
    todos.value = [];
    setTodosToStorage();
  }

  function getTodoById(id: string): Todo | undefined {
    return todos.value.find((t) => t.id === id);
  }

  function updateTodo(todo: Todo): void {
    const index = todos.value.findIndex((t) => t.id === todo.id);
    if (index !== -1) {
      todos.value[index] = todo;
    }
    setTodosToStorage();
  }

  function toggleTodo(id: string): void {
    const todo = getTodoById(id);
    if (todo) {
      todo.isDone = !todo.isDone;
      updateTodo(todo);
    }
  }

  return {
    todos,
    addTodo,
    removeTodo,
    todosCount,
    getTodosFromStorage,
    setTodosToStorage,
    clearTodos,
    getTodoById,
    updateTodo,
    toggleTodo,
  };
});
