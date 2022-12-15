<template>
  <div class="relative">
    <!-- <div class="item-box item-box-hover" v-if="!isActive" @click="toggleTask()">
      <div class="w-100 flex justify-between hover:cursor-pointer">
        <h2 class="txt-headline-component cursor pointer">1.12.1111</h2>
        <div class="lg:hidden ml-5 w-5 h-5 inline-block cursor-pointer">
          <Arrow direction="down"></Arrow>
        </div>
      </div>
    </div>
    <div v-else class="item-box">
      <div class="w-100 flex justify-between hover:cursor-pointer">
        <h2 class="txt-headline-component cursor pointer">1.12.1111</h2>
        <div class="lg:hidden ml-5 w-5 h-5 inline-block cursor-pointer">
          <Arrow direction="down"></Arrow>
        </div>
      </div>
      <p>some content</p>
    </div> -->
    <a
      onclick="event.stopPropagation()"
      target="_blank"
      href="https://www.google.de"
      class="
        btn
        absolute
        right-4
        top-4
        z-10
        hover:scale-[1.03] hover:shadow-md
        bg-red-500
      "
      v-if="task.participants.length < task.requiredParticipants"
    >
      participants required
    </a>
    <div
      class="item-box item-box-hover"
      :class="{ 'no-corners-bottom, item-box-active': isActive }"
      @click="toggleTask()"
    >
      <div class="w-100 flex justify-between hover:cursor-pointer">
        <h2 class="txt-headline-component cursor pointer truncate">
          {{ task.title }}
        </h2>

        <div class="lg:hidden ml-5 w-5 h-5 inline-block cursor-pointer">
          <Arrow direction="down"></Arrow>
        </div>
      </div>
    </div>
    <div
      v-if="isActive"
      onclick="event.stopPropagation()"
      class="item-box no-corners-top"
    >
      <DateAndAddress
        :start-date="task.startDate"
        :endDate="task.endDate"
        :location="task.address"
      ></DateAndAddress>
      <div class="flex items-baseline">
        <span class="mr-2 mt-4">Kategorien: </span>
        <span
          class="category"
          v-for="category in task.categories"
          :key="category"
        >
          {{ category }}</span
        >
      </div>
      <div class="mt-4">
        <span
          >{{ task.participants.length }} von
          {{ task.requiredParticipants }} benötigten Teilnehmer*innen:
        </span>
      </div>
      <p class="mt-4">
        Beschrieb: <br />
        {{ task.text }}
      </p>
      <div class="flex mt-4">
        <div class="btn bg-gray-500 cursor-pointer mr-3">button 1</div>
        <div class="btn bg-gray-500 cursor-pointer mr-3">button 1</div>
        <div class="btn bg-gray-500 cursor-pointer mr-3">button 1</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import Arrow from "../components/composables/Arrow.vue";
import DateAndAddress from "../components/DateAndAddress.vue";
type Task = {
  title: string;
  startDate: Date;
  endDate?: Date;
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
  components: {
    Arrow,
    DateAndAddress,
  },
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    task: {
      type: Object as PropType<Task>,
      required: true,
    },
  },
  methods: {
    toggleTask() {
      this.$emit("toggleTask");
    },
  },
};
</script>