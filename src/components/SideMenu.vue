<template>
  <div class="mt-10 fixed">
    <div class="flex-col">
      <router-link
        v-for="(route, index) in menuItems"
        :key="index"
        :to="route.path"
        class="hover-indent"
        :class="{ indent: $route.path == route.path }"
        >{{ route.name }}</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      menuItems: [
        { path: "/", name: "Übersicht" },
        { path: "/Deliveries", name: "Alle Lieferungen" },
        { path: "/Invoices", name: "Rechnungen" },
        { path: "/News", name: "Neuigkeiten" },
        { path: "/Tasks", name: "Arbeitseinsätze" },
        { path: "/Settings", name: "Einstellungen" },
      ],
    };
  },
  components: {},
  updated() {
    console.log(this.$route.path);
  },
  computed: {
    isActive(routeName: string): boolean {
      if (routeName == this.$route.path) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
a {
  @apply block py-3 hover:ml-2 active:ml-5 transition-all duration-100 ease-in-out hover:duration-500;
}
.indent {
  @apply font-semibold ml-5 active:ml-5 transition-all duration-100 ease-in-out hover:duration-500;
}
</style>