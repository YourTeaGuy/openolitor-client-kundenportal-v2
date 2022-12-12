<template>
  <div class="w-full h-full fixed bg-gray-100/90 top-0 left-0 z-[1]">
    <div class="h-100 flex h-screen justify-center items-center">
      <ul class="block text-center my-auto">
        <li
          class="block py-7 w-full"
          v-for="(route, index) in menuItems"
          :key="index"
        >
          <router-link
            :to="route.path"
            class="text-2xl leading-10"
            :class="{ 'font-semibold': $route.path == route.path }"
            @click="$emit('toggleMobileMenu')"
            >{{ route.name }}</router-link
          >
        </li>
      </ul>
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
};
</script>

