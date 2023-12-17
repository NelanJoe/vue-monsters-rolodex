<template>
  <section>
    <h1 class="font-bigelow text-white text-8xl font-semibold text-center">
      Monsters Rolodex
    </h1>
  </section>

  <section class="flex justify-center items-center my-8">
    <input
      type="search"
      class="w-full py-2 px-4 rounded-lg max-w-2xl"
      placeholder="Search Monsters"
      v-model="search"
    />
  </section>

  <section>
    <div
      class="flex flex-wrap justify-center gap-5"
      v-if="filteredMonsters?.length"
    >
      <CardList :monsters="filteredMonsters" />
    </div>
    <div v-else class="flex flex-wrap justify-center gap-5">
      <p class="text-white font-semibold text-xl">
        Not Found Monster "{{ search }}"
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed, reactive } from "vue";
import { getData } from "../utils/data.utils";

import CardList from "../components/card-list/CardList.vue";

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
