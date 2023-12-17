<template>
  <div v-for="monster in monsters">
    <Card :monster="monster" />
  </div>
</template>

<script setup>
import Card from "../card/CardItem.vue";

const props = defineProps({
  monsters: {
    type: Array,
    required: true,
  },
});
</script>
