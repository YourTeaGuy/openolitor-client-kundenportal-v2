<template>
  <i
    class="arrow"
    :class="{
      up: direction == 'up',
      down: direction == 'down',
      right: direction == 'right',
      left: direction == 'left',
    }"
  ></i>
</template>

<script lang="ts">
import Vue from "vue";
export default {
  props: {
    direction: {
      type: String,
      default: "down",
    },
  },
};
</script>

<style scoped>
.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  position: relative;
  z-index: 0;
  padding: 3px;
}

.arrow.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  position: relative;
  z-index: 0;
}

.arrow.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  position: relative;
  z-index: 0;
}

.arrow.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  position: relative;
  z-index: 0;
}

.arrow.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  position: relative;
  z-index: 0;
}
</style>