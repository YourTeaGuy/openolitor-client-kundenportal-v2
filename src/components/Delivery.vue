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
        <DateAndAddress :date="date" :location="location" />
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
import DateAndAddress from "../components/DateAndAddress.vue";
type Delivery = {
  product: string;
  amount: number | string;
  unit: string;
};
export default {
  data() {
    return {
      date: new Date(20222, 12, 22, 16, 20),
      location: "Apfelweg 15, 50677 Köln",
    };
  },
  props: {
    shares: {
      type: Array as PropType<Delivery[]>,
      required: true,
    },
  },
  components: { DateAndAddress },
};
</script>
<style scoped>
</style>