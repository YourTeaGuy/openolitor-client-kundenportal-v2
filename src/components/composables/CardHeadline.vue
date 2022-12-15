<!-- reihenfolge ist mit absicht geändert, sonst gibts fehler! -->

<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({

  })
</script>

<template>
  <div>
    <h2 class="font-semibold text-2xl cursor-pointer">
      <slot/>
    </h2>
  </div>
</template>