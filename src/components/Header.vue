<template>
  <header class="flex bg-blue-500 h-12 sm:h-16 w-full top-0 fixed">
    <div
      class="
        bg-blue-500
        container
        mx-auto
        flex flex-row
        justify-between
        items-center
      "
    >
      <a href="/" class="flex items-center">
        <img src="src\assets\vue.svg" class="mx-3 h-6 sm:h-9" alt="Logo" />
        <span
          class="
            self-center
            text-lg
            sm:text-xl
            hover:underline
            whitespace-nowrap
            text-white
          "
          >Mitgliederportal</span
        >
      </a>
      <span class="flex-col hidden lg:flex self-center text-xl mr-3 text-white"
        >Abmelden</span
      >
      <BurgerMenu class="z-50 lg:hidden" @click="toggleMenu()" />
      <MobileMenu
        class="z-40"
        @toggleMobileMenu="toggleMenu()"
        v-if="menuOpen"
      ></MobileMenu>
    </div>
  </header>
</template>

<script  lang="ts">
import BurgerMenu from "./BurgerMenu.vue";
import MobileMenu from "./MobileMenu.vue";

export default {
  data() {
    return {
      menuOpen: false as boolean,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
  components: {
    BurgerMenu,
    MobileMenu,
  },
};
</script>