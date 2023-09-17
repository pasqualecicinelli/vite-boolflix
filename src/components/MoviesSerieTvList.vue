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
    <AppCard :cardInfoMovie="store.moviesList" :cardInfoTv="store.serieTvList"/>

    
  </div>
</template>

<style lang="scss" scoped></style>
