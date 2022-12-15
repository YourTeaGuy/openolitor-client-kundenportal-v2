<template>
  <!--   <div class="container mx-auto grid grid-cols-4 gap-4">
    <div class="bg-gray-400 hidden lg:block h-64">menu placeholder</div>
    <div class="col-span-3">anteil</div>
  </div> -->
  <div class="lg:py-1 lg:px-2 md:px-6 sm:py-6">
    <ViewHeadline text="Alle Lieferungen" />
    <div v-for="(share, index) in allShares" :key="index">
      <Delivery
        @toggleMe="toggleDelivery(index)"
        :shares="share"
        :isActive="checkIndex(index)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ViewHeadline from "../components/composables/ViewHeadline.vue";
import Delivery from "../components/Delivery.vue";
export default {
  data() {
    return {
      activeItem: 0 as number | null,
      allShares: [
        [
          { product: "Tomaten", amount: 0.5, unit: "kg" },
          { product: "Kohl", amount: 1, unit: "Kopf" },
          { product: "Feldsalat", amount: 200, unit: "g" },
          { product: "Karotten", amount: 3, unit: "Stück" },
          { product: "Kohlrabi", amount: 2, unit: "kg" },
          { product: "buschige Freilandeier", amount: 5, unit: "Eier" },
          { product: "grobe Auberginenpaste", amount: 1, unit: "Glas" },
          { product: "Pastinaken", amount: "3-4", unit: "Stück" },
          { product: "Asia-Salat Mix", amount: 3, unit: "Handvoll" },
          { product: "Schwarzwurzel", amount: 3, unit: "Stück" },
          { product: "Knoblauch", amount: 1, unit: "Stück" },
        ],
        [
          { product: "Tomaten", amount: 0.5, unit: "kg" },
          { product: "Kohl", amount: 1, unit: "Kopf" },
          { product: "Feldsalat", amount: 200, unit: "g" },
          { product: "Karotten", amount: 3, unit: "Stück" },
          { product: "Kohlrabi", amount: 2, unit: "kg" },
          { product: "buschige Freilandeier", amount: 5, unit: "Eier" },
          { product: "grobe Auberginenpaste", amount: 1, unit: "Glas" },
          { product: "Pastinaken", amount: "3-4", unit: "Stück" },
          { product: "Asia-Salat Mix", amount: 3, unit: "Handvoll" },
          { product: "Schwarzwurzel", amount: 3, unit: "Stück" },
          { product: "Knoblauch", amount: 1, unit: "Stück" },
        ],
        [
          { product: "Tomaten", amount: 0.5, unit: "kg" },
          { product: "Kohl", amount: 1, unit: "Kopf" },
          { product: "Feldsalat", amount: 200, unit: "g" },
          { product: "Karotten", amount: 3, unit: "Stück" },
          { product: "Kohlrabi", amount: 2, unit: "kg" },
          { product: "buschige Freilandeier", amount: 5, unit: "Eier" },
          { product: "grobe Auberginenpaste", amount: 1, unit: "Glas" },
          { product: "Pastinaken", amount: "3-4", unit: "Stück" },
          { product: "Asia-Salat Mix", amount: 3, unit: "Handvoll" },
          { product: "Schwarzwurzel", amount: 3, unit: "Stück" },
          { product: "Knoblauch", amount: 1, unit: "Stück" },
        ],
      ],
    };
  },
  components: { Delivery, ViewHeadline },
  methods: {
    toggleDelivery(index: number) {
      console.log("hi there", index);
      if (index == this.activeItem) {
        this.activeItem = null;
      } else {
        this.activeItem = index;
      }
    },
    msgreceived(index: number) {
      console.log("got message", index);
    },
    checkIndex(index: number): boolean {
      if (index == this.activeItem) {
        console.log(index, "is true");
        return true;
      } else {
        console.log(index, "is false");
        return false;
      }
    },
  },
  watch: {
    isActiveItem(index: number): boolean {
      if (index == this.activeItem) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>