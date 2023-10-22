<script setup>
import Card from "../card/CardView.vue";

const props = defineProps({
  monsters: Object,
});
</script>

<template>
  <div v-for="monster in monsters">
    <Card :monster="monster" />
  </div>
</template>
