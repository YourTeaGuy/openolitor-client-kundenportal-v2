<!-- reihenfolge ist mit absicht geändert, sonst gibts fehler! -->

<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    props: [
      'text'
    ]
  })
</script>

<template>
  <div>
    <button @click="$emit('clicked')">
      {{ text }}
    </button>
  </div>
</template>