<template>
  <div
    class="
      border-0
      bg-gray-100
      py-6
      px-2
      md:px-6
      rounded-lg
      col-span-4
      lg:col-span-3
      mb-10
    "
  >
    <div class="block md:flex justify-between">
      <div class="block">
        <h2 class="font-semibold text-2xl mb-4">Lieferung vom</h2>
        <div class="flex mb-2">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <p>27.11.22, 16:20 Uhr</p>
        </div>
        <div class="flex mb-2">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
          <p>Abholort: Schlesinger Straße 5, 167394 Funkytown</p>
        </div>
      </div>
      <div class="block md:mt-0 mt-7">
        <button class="rounded-md leading-5 bg-gray-700 py-1 px-2 text-gray-50">
          Abwesenheit eintragen
        </button>
        <p class="mt-1 text-sm md:text-right">noch 3 Tage möglich</p>
      </div>
    </div>
    <ul
      class="block w-full [&>li:nth-child(even)]:bg-gray-200 mt-5"
      id="basket"
    >
      <li class="grid grid-cols-12 py-2">
        <span class="col-span-1">recipe</span>
        <span class="col-span-7">product</span>
        <span class="col-span-2">amount</span>
        <span class="col-span-2">unit</span>
      </li>
      <li
        class="grid grid-cols-12 py-2"
        v-for="(item, index) in shares"
        :key="index"
      >
        <a
          :href="'https://meine-gemuesekueche.de/suche?q=' + item.product"
          class="col-span-1"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>
        <span class="col-span-7">{{ item.product }}</span>
        <span class="col-span-2"> {{ item.amount }}</span>
        <span class="col-span-2">{{ item.unit }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
type ShareOf = {
  product: string;
  amount: number | string;
  unit: string;
};
export default {
  props: {
    shares: {
      type: Array as PropType<ShareOf[]>,
      required: true,
    },
  },
};
</script>
<style scoped>
</style>