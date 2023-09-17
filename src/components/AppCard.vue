<script>
export default {
  data() {
    return {
      flags: ["en", "it"],
    };
  },

  props: {
    cardInfoMovie: Array,
    cardInfoTv: Array,
  },
};
</script>

<template>
  <div class="card-conteiner mt-1">

    <h3 v-if="cardInfoTv.length == 0">Non ci sono Movie</h3>
    <h3 v-else>Movie</h3>

    <div class="card-body" v-for="movie in cardInfoMovie" :key="movie.id">
      <ul class="card">
        <li>Titolo: {{ movie.title }}</li>
        <li>Titolo originale: {{ movie.original_title }}</li>
<!--
SE NELL'ARRAY FLAGS TROVA LA LINGUA DI MOVIE.LANGUAGE ALLORA MOSTRA L'IMG 
ALTRIMENTI FACCIO UN ALTRO V-SHOW PER STAMPARE LA LINGUA CHE NON TROVA NELL'ARRAY
-->
        <li v-show="this.flags.includes(movie.language)">
          <img
            class="flagClass"
            :src="'../../img/' + movie.language + '.png'"
            :alt="movie.language"
          />
        </li>
        <li v-show="!this.flags.includes(movie.language)">
          {{ movie.language }}
        </li>

        <li>Voto: {{ movie.vote }}</li>

        <!-- <img :src="movie.poster" alt="" />-->

        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>-->

      </ul>
    </div>

    <h3 v-if="cardInfoMovie.length == 0">Non ci sono Serie tv</h3>
    <h3 v-else>Serie tv</h3>

    <div class="card-body" v-for="serieTv in cardInfoTv" :key="serieTv.id">
      <ul class="card">
        <li>Titolo: {{ serieTv.name }}</li>
        <li>Titolo Originale: {{ serieTv.original_name }}</li>
        <li v-show="this.flags.includes(serieTv.language)">
          <img
            class="flagClass"
            :src="'../../img/' + serieTv.language + '.png'"
            :alt="serieTv.language"
          />
        </li>
        <li v-show="!this.flags.includes(serieTv.language)">
          {{ serieTv.language }}
        </li>
        <li>Voto: {{ serieTv.vote }}</li>

        <!-- <img :src="serieTv.poster" alt="" />-->

        <!--   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>-->
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 1rem;
}

.flagClass {
  width: 30px;
  aspect-ratio: 1;
}
</style>
