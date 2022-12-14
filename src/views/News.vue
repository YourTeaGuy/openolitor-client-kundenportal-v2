<template>
  <ViewHeadline>Alle Neuigkeiten</ViewHeadline>
  <NewsCard />
  <NewsCard />
  <NewsCard />
</template>

<script lang="ts">
import NewsCard from "../components/NewsCard.vue";
import ViewHeadline from "../components/composables/ViewHeadline.vue";
export default {
  components: {NewsCard, ViewHeadline}
}
</script>