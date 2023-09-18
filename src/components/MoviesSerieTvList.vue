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
    <!--Passo i dati con le props -->
    <section>
      
      <h3 v-if="store.moviesList.length == 0">Non ci sono Movie</h3>
      <h3 v-else>Movie</h3>

      <AppCard
        v-for="movie in store.moviesList"
        :key="movie.id"
        :cardInfo="movie"
      />
    </section>

    <section>
      <h3 v-if="store.serieTvList.length == 0">Non ci sono Serie tv</h3>
      <h3 v-else>Serie tv</h3>

      <AppCard
        v-for="serieTv in store.serieTvList"
        :key="serieTv.id"
        :cardInfo="serieTv"
      />
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
