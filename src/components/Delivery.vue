<template>
  <div
    class="
      border-b-2 border-grey-400
      lg:border-0
      bg-gray-100
      py-6
      px-2
      md:px-6
      lg:rounded-lg
      col-span-4
      lg:col-span-3 lg:mb-10
    "
  >
    <div
      v-if="!isActive"
      @click="toggleDelivery()"
      class="w-100 flex justify-between"
    >
      <h2 class="font-semibold text-2xl cursor-pointer">
        {{ dateToString(startDate) }}
      </h2>
      <div class="lg:hidden ml-5 w-5 h-5 inline-block cursor-pointer">
        <Arrow direction="down"></Arrow>
      </div>
    </div>
    <div v-else-if="isActive" class="transition-all duration-200 ease-in-out">
      <div class="block md:flex justify-between">
        <div class="block">
          <div class="flex justify-between" @click="toggleDelivery()">
            <h2 class="font-semibold text-2xl mb-4 cursor-pointer">
              {{ dateToString(startDate) }}
            </h2>
            <div class="lg:hidden ml-5 w-5 h-5 inline-block cursor-pointer">
              <Arrow direction="up"></Arrow>
            </div>
          </div>
          <DateAndAddress
            :startDate="startDate"
            :endDate="endDate"
            :location="location"
          />
        </div>
        <div class="block md:mt-0 mt-7">
          <Btn class="btn btn-disabled">Abwesenheit eintragen</Btn>

          <p class="mt-1 text-sm md:text-right">noch 3 Tage möglich</p>
        </div>
      </div>
      <ul
        class="block w-full [&>li:nth-child(even)]:bg-gray-200 mt-5"
        id="basket"
      >
        <li class="flex justify-between py-3 px-2 font-semibold">
          <span class="col-span-1">Product/Recipe</span>
          <span class="col-span-2">Amount</span>
        </li>
        <li class="" v-for="(item, index) in shares" :key="index">
          <div
            class="flex justify-between py-3 px-2 cursor-pointer"
            @click="toggleDropdown(index)"
          >
            <span class="flex">{{ item.product }} </span>
            <span class=""
              >{{ item.amount }} {{ item.unit }}
              <div class="ml-5 w-5 h-5 inline-block cursor-pointer">
                <Arrow :direction="isActiveItem(index)"></Arrow>
                <!-- <i
                  :class="{
                    up: index == activeItem,
                    down: index != activeItem,
                  }"
                  class="arrow"
                ></i> -->
              </div>
            </span>
          </div>
          <div
            class="block py-3 px-2 pb-5"
            v-if="index == activeItem"
            @click="toggleDropdown(index)"
          >
            <p class="flex align-center text-sm justify-start">
              finde Rezepte mit {{ item.product }} auf:
            </p>
            <ul>
              <li>
                <a
                  :href="
                    'https://meine-gemuesekueche.de/suche?q=' + item.product
                  "
                  class="items-center inline"
                >
                  meine-gemuesekueche.de
                  <span class="inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>sth strange happened</div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import DateAndAddress from "../components/DateAndAddress.vue";
import Arrow from "../components/composables/Arrow.vue";
import { formatDate } from "../../lib/utils";

type Delivery = {
  product: string;
  amount: number | string;
  unit: string;
};
export default {
  data() {
    return {
      startDate: new Date(2021, 11, 1, 16, 20),
      endDate: new Date(2021, 11, 1, 19, 20),
      location: "Apfelweg 15, 50677 Köln",
      activeItem: null as number | null,
    };
  },
  props: {
    shares: {
      type: Array as PropType<Delivery[]>,
      required: true,
    },
    isActive: { type: Boolean, default: false },
  },
  methods: {
    dateToString(date: Date): string {
      return formatDate(date);
    },
    toggleDropdown(index: number) {
      if (index == this.activeItem) {
        this.activeItem = null;
      } else {
        this.activeItem = index;
      }
    },
    toggleDelivery() {
      this.$emit("toggleMe");
    },
    isActiveItem(index: number): string {
      let direction = "down";
      if (index == this.activeItem) {
        direction = "up";
      }
      return direction;
    },
  },
  mounted() {
    console.log(this.isActive);
  },

  components: { DateAndAddress, Arrow },
};
</script>
<style scoped>
a {
  @apply underline text-rose-500;
}
</style>