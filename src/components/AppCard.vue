<script>
export default {
  data() {
    return {
      flags: ["en", "it"],
    };
  },

  props: {
    cardInfo: Object,
  },
  methods: {
    getStars(stars) {
      return stars <= this.cardInfo.vote
        ? "fa-solid fa-star"
        : "fa-regular fa-star";
    },
  },
};
</script>

<template>
  <div class="card-conteiner mt-1">
    <div class="card-body">
      <ul class="card">
        <li>Titolo: {{ cardInfo.name }}</li>
        <li>Titolo originale: {{ cardInfo.original_title }}</li>

        <!--
SE NELL'ARRAY FLAGS TROVA LA LINGUA DI MOVIE.LANGUAGE ALLORA MOSTRA L'IMG 
ALTRIMENTI FACCIO UN ALTRO V-SHOW PER STAMPARE LA LINGUA CHE NON TROVA NELL'ARRAY
-->

        <li v-show="this.flags.includes(cardInfo.language)">
          <img
            class="flagClass"
            :src="'../../img/' + cardInfo.language + '.png'"
            :alt="cardInfo.language"
          />
        </li>
        <li v-show="!this.flags.includes(cardInfo.language)">
          {{ cardInfo.language }}
        </li>

        <li>
          <font-awesome-icon :icon="getStars(stars)" v-for="stars in 5" />
        </li>

        <li>Voto: {{ cardInfo.vote }}</li>

        <li v-show="cardInfo.poster" class="card-img">
          <img :src="cardInfo.poster" :alt="cardInfo.name" />
        </li>

        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>-->
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
