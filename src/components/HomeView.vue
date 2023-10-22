<script setup>
import { ref, onMounted, computed, reactive } from "vue";
import { getData } from "../utils/data.utils";

import CardList from "./card-list/CardList.vue";

const monsters = reactive([]);
const search = ref("");

const fetchUsers = async () => {
  const users = await getData("https://jsonplaceholder.typicode.com/users");
  monsters.value = users;
};

onMounted(() => {
  fetchUsers();
});

const filteredMonsters = computed(() => {
  return monsters.value?.filter((monster) =>
    monster?.name?.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<template>
  <h1 class="text-white text-8xl font-semibold text-center font-bigelow">
    Monsters Rolodex
  </h1>

  <div class="flex justify-center my-8">
    <input
      type="search"
      class="w-1/3 py-2 px-4 rounded-lg"
      placeholder="Search Monsters"
      v-model="search"
    />
  </div>
  <div
    class="flex flex-wrap justify-center gap-5 my-10"
    v-if="filteredMonsters?.length"
  >
    <CardList :monsters="filteredMonsters" />
  </div>
  <div v-else class="flex flex-wrap justify-center gap-5 my-10 text-white">
    <p>Not Found Monster "{{ search }}"</p>
  </div>
</template>
