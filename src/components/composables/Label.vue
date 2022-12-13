<!-- reihenfolge ist mit absicht geändert, sonst gibts fehler! -->
<!-- todo: basis css hinzufügen mit tailwind, damit die anordnung einigermaßen funktioniert -->

<script lang="ts">
import { defineComponent } from "vue";
import LabelPopUp from "./LabelPopUp.vue";
export default defineComponent({
  props: [
    "text"
  ],
  components: { LabelPopUp },
  setup() {
    let popUpVisibility = false;
    const toggleVisibility = () => popUpVisibility = !popUpVisibility;
    return {popUpVisibility, toggleVisibility};
  }
})


</script>

<template>
  <div>
    <div @click="toggleVisibility">
    {{ text }}
    </div>
    <div>
      <LabelPopUp description-text="Kontaktmöglichkeit:" content-list="<!-- todo: liste mocken/erstellen -->" visible=""/>
    </div>
  </div>
<template/>