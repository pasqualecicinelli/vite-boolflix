<script>
import { store } from "../data/store";

import AppCard from "./AppCard.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: { AppCard },
};
</script>

<template>
  <div class="container">
    <AppCard
      v-for="movie in store.moviesList"
      :key="movie.id"
      :cardInfo="movie"
    />
  </div>
</template>

<style lang="scss" scoped></style>
