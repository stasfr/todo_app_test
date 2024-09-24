<template>
  <header class="absolute w-full left-0 top-0 z-50 border-b-2 border-neutral">
    <div
      class="flex min-h-16 items-center justify-between max-w-screen-xl mx-auto px-4"
    >
      <RouterLink to="/"> TodoApp </RouterLink>

      <ul class="menu menu-horizontal lg:menu-horizontal rounded-box space-x-2">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/todo">Todos</RouterLink></li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts"></script>
