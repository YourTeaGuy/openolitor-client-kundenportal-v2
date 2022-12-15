<template>
  <div class="h-screen">
    <Header />
    <div
      class="container mx-auto lg:grid grid-cols-4 min-h-full mt-12 sm:mt-16"
    >
      <div class="hidden lg:block col-span-1">
        <SideMenu />
      </div>
      <div class="lg:col-span-3 lg:py-1 lg:px-2 md:px-6 sm:py-6">
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
import components from "@/components";

/* export default {
  components: { Header, Footer, SideMenu },
  computed: {
    logger() {
      console.log("route name: ", this.$route.name);
    },
  },
}); */
</script>
