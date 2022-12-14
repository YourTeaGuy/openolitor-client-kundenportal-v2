<template>
  <ViewHeadline text="Neuigkeiten" />
  <Label text="label" />
  <NewsCard />
  <NewsCard />
  <NewsCard />
</template>

<script lang="ts">
import Vue from "vue";
import Label from "../components/composables/Label.vue";
import NewsCard from "../components/NewsCard.vue";
import ViewHeadline from "../components/composables/ViewHeadline.vue";
import Btn from "../components/composables/Btn.vue";

export default {
  components: { NewsCard, ViewHeadline, Label, Btn},
}
</script>