<template>
  <div
    class="min-h-screen overflow-hidden flex flex-col transition-colors duration-300"
  >
    <Header />
    <main class="flex-auto my-24 max-w-screen-xl mx-auto px-4 min-w-72">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts"></script>
