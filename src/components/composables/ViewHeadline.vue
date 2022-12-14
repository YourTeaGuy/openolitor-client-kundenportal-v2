<!-- reihenfolge ist mit absicht geändert, sonst gibts fehler! -->

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: ['text']
})
</script>

<template>
  <div>
    <h2 class="font-semibold text-xl py-6 px-2 block lg:hidden">
      {{ text }}
    </h2>
  </div>
</template>