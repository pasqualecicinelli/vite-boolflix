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
    <h3 v-if="store.moviesList.length == 0">Non ci sono Movie</h3>
    <h3 v-else>Movie</h3>

    <!--Passo i dati con le props -->
    <section>
      <AppCard
        v-for="movie in store.moviesList"
        :key="movie.id"
        :cardInfo="movie"
      />
    </section>

    <h3 v-if="store.serieTvList.length == 0">Non ci sono Serie tv</h3>
    <h3 v-else>Serie tv</h3>
    <section>
      <AppCard
        v-for="serieTv in store.serieTvList"
        :key="serieTv.id"
        :cardInfo="serieTv"
      />
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "../components/style/partials/mixins" as *;

section{
  @include center();
}


</style>
