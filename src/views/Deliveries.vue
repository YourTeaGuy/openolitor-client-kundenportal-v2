<template>
  <!--   <div class="container mx-auto grid grid-cols-4 gap-4">
    <div class="bg-gray-400 hidden lg:block h-64">menu placeholder</div>
    <div class="col-span-3">anteil</div>
  </div> -->
  <div class="container mx-auto py-1 px-2 md:px-6 sm:py-6">
    <h2 class="font-semibold text-3xl mb-4">Alle Lieferungen:</h2>
    <div v-for="(share, index) in allShares" :key="index">
      <Delivery :shares="share" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Delivery from "../components/Delivery.vue";
import Share from "../components/Share.vue";

export default {
  data() {
    return {
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
  components: { Delivery, Share },
};
</script>