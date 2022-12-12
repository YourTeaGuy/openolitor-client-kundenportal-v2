<template>
  <div></div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
type Task = {
  title: string;
  address: {
    street: string;
    streetNo: string;
    postalCode: string;
    city: string;
  };
  categories: string[];
  participants: string[];
  requiredParticipants: number;
  text: string;
};
export default {
  props: {
    task: {
      type: Object as PropType<Task>,
      required: true,
    },
  },
};
</script>