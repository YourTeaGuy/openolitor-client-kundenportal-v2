<template>
  <header class="flex bg-green-800 h-12 sm:h-16 w-full top-0 fixed">
    <div class="bg-green-600 container mx-auto flex flex-row justify-between items-center">
      <a href="/" class="flex items-center">
        <img src="src\assets\vue.svg" class="mx-3 h-6 sm:h-9" alt="Logo" />
        <span class="self-center text-lg sm:text-xl hover:underline whitespace-nowrap dark:text-white">Mitgliederportal</span>
      </a>
      <span class="flex-col hidden lg:flex self-center text-xl mr-3 dark:text-white">Abmelden</span>
      <BurgerMenu class="flex flex-col mr-2 lg:hidden"/>
    </div>
  </header>
</template>

<script setup lang="ts">
import BurgerMenu from "./BurgerMenu.vue";
</script>