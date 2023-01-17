<script>
import Card from "../card/CardView.vue";

export default {
  props: {
    monsters: {
      type: Object,
      required: true,
    },
  },
  components: { Card },
};
</script>

<template>
  <div v-for="monster in monsters" >
    <Card :monster="monster" />
  </div>
</template>