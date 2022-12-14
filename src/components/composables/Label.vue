<!-- reihenfolge ist mit absicht geändert, sonst gibts fehler! -->
<!-- todo: basis css hinzufügen mit tailwind, damit die anordnung einigermaßen funktioniert -->

<script lang="ts">
import { defineComponent } from "vue";
import LabelPopUp from "./LabelPopUp.vue";
export default defineComponent({
  props: {text: String},
  components: { LabelPopUp },
  setup() {
    let popUpVisibility = false;
    const toggleVisibility = () => popUpVisibility = !popUpVisibility;
    return {popUpVisibility, toggleVisibility};
  }
})


</script>

<template>
  <div class="bg-green-300">
    <div @click="toggleVisibility">
    {{ text }}
    </div>
    <div>
      <LabelPopUp description="Kontaktmöglichkeit:" contact=123 is-visible="false"/>
    </div>
  </div>
</template>