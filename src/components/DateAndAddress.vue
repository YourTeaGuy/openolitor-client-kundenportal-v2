<template>
  <div class="mt-4">
    <div class="flex mb-2 items-center">
      <svg
        class="w-6 h-6 mr-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <p v-if="endDate != undefined && isMultiDay">
        {{ dateToString(startDate) }}
        {{ timeToString(startDate) }} -
        {{ dateToString(endDate) }}
        {{ timeToString(endDate) }}
      </p>
      <p v-else>
        {{ dateToString(startDate, true) }}<br />
        {{ timeToString(startDate) }}
        <span v-if="endDate"> - {{ timeToString(endDate) }} Uhr</span>
      </p>
    </div>
    <div class="flex mb-2 items-center">
      <svg
        class="w-6 h-6 mr-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        ></path>
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        ></path>
      </svg>
      <div class="block">
        <p>{{ location.street }} {{ location.streetNo }}</p>

        <p>{{ location.postalCode }}, {{ location.city }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { formatTime, formatDate } from "../../lib/utils";
type Address = {
  street: string;
  streetNo: string;
  postalCode: string;
  city: string;
};
export default {
  data() {
    return {};
  },
  props: {
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: false,
    },
    location: {
      type: Object as PropType<Address>,
      required: true,
    },
  },
  computed: {
    isMultiDay(): boolean {
      if (this.endDate) {
        let formattedStartDate = new Date(this.startDate);
        let formattedEndDate = new Date(this.endDate);
        formattedStartDate.setHours(0, 0, 0);
        formattedEndDate.setHours(0, 0, 0);

        if (formattedEndDate > formattedStartDate) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
  },
  methods: {
    timeToString(date: Date): string {
      return formatTime(date);
    },
    dateToString(date: Date, stringified?: boolean): string {
      return formatDate(date, stringified);
    },
  },
};
</script>