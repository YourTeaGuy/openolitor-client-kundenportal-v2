<!-- reihenfolge ist mit absicht geändert, sonst gibts fehler! -->
<!-- todo: basis css hinzufügen mit tailwind, damit die anordnung einigermaßen funktioniert -->

<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    props: ['descriptionText', 'contentList', 'visible']
  })
</script>

<template>
  <div>
    <h3> <!-- stylen wir mit html oder nicht? -->
      {{ descriptionText }}
    </h3>
    <ul v-for="item in contentList">
      <li>
        {{item}}
      </li>
    </ul>
  </div>
<template/>