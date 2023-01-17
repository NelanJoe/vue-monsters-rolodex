<script>
import CardList from "./card-list/CardList.vue";

export default {
  data() {
    return {
      search: "",
      monsters: [],
    };
  },
  methods: {
    async getMonsters() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      this.monsters = data;
    },
  },
  mounted() {
    this.getMonsters();
  },
  computed: {
    filterMonsters() {
      return this.monsters.filter((monster) =>
        monster.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  components: { CardList },
};

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
  <div class="flex flex-wrap justify-center gap-5 my-10">
    <CardList :monsters="filterMonsters" />
  </div>
</template>
