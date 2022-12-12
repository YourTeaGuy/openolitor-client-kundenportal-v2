<template>
  <header class="flex bg-blue-500 h-12 sm:h-16 w-full top-0 fixed">
    <div class="bg-blue-500 container mx-auto flex flex-row justify-between items-center">
      <a href="/" class="flex items-center">
        <img src="src\assets\vue.svg" class="mx-3 h-6 sm:h-9" alt="Logo" />
        <span class="self-center text-lg sm:text-xl hover:underline whitespace-nowrap text-white">Mitgliederportal</span>
      </a>
      <span class="flex-col hidden lg:flex self-center text-xl mr-3 text-white">Abmelden</span>
      <BurgerMenu class="flex flex-col lg:hidden"/>
    </div>
  </header>
</template>

<script setup lang="ts">
import BurgerMenu from "./BurgerMenu.vue";
</script>