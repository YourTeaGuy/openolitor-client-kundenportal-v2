<template>
  <div>
    <Header />

    <div class="flex flex-row bg-red-500 container mx-auto justify-between">

      <div class="flex-col hidden lg:flex bg-green-300 w-64 p-8 max-h-screen">
        <SideMenu />
      </div>
      
      <div class="flex flex-col bg-green-400 grow p-8 max-h-screen">
        <router-view />
      </div>

    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import SideMenu from "./components/SideMenu.vue";
</script>
