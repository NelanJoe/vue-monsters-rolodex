<script>
export default {
  props: {
    monster: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="card">
    <img
      :src="`https://robohash.org/${monster.id}?set=set2&size=180x180`"
      :alt="monster.name"
    />
    <h2 class="text-2xl font-semibold">{{ monster.name }}</h2>
    <a
      class="text-[14px] italic cursor-pointer text-blue-400 font-medium"
      type="email"
      :href="`mailto:${monster.email}`"
    >
      {{ monster.email }}
    </a>
  </div>
</template>

<style lang="postcss">
.card {
  @apply w-[320px] h-[320px] flex flex-col justify-center items-center bg-white p-2 space-y-3 rounded-md transition-transform hover:scale-110 ease-in-out duration-500;
}
</style>
