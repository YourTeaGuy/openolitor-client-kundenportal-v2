<template>
  <div>
    <h1>{{ msg }}</h1>

    <div class="card">
      <button
        type="button"
        class="outline outline-2 outline-green-500 bg-slate-400 rounded-md"
        @click="count++"
      >
        count is {{ count }}
      </button>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>