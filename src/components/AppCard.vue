<script>
export default {
  data() {
    return {
      flags: ["en", "it"],
      hover: false,
      posterBase: "https://image.tmdb.org/t/p/w342/",
      imgDefault: "/img/imgDefault.jpg",
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

    poster() {
      if (!this.cardInfo.poster) {
        // console.log("se non esiste usa: " + this.imgDefault);
        return this.imgDefault;
      }
      // console.log("se esiste: " + this.cardInfo.poster);
      return this.posterBase + this.cardInfo.poster;
    },
  },
};
</script>

<template>
  <div class="card-conteiner mt-3">
    <!--Inserisco in due div distinti le Img e le descrizioni per fare l'hover-->

    <ul @mouseover="hover = true" @mouseleave="hover = false" class="card">
      <li v-show="poster()" class="card-img">
        <img :src="poster()" :alt="cardInfo.name" />
      </li>

      <div v-show="hover" class="card-description">
        <li><span>Titolo: </span> {{ cardInfo.name }}</li>
        <li><span>Titolo originale: </span> {{ cardInfo.original_title }}</li>

        <!--
V-IF NELL'ARRAY FLAGS TROVA LA LINGUA DI MOVIE.LANGUAGE ALLORA MOSTRA L'IMG 
ALTRIMENTI V-ELSE PER STAMPARE LA LINGUA CHE NON TROVA NELL'ARRAY
-->

        <li v-if="this.flags.includes(cardInfo.language)">
          <span>Language: </span>
          <img
            class="flagClass"
            :src="'../../img/' + cardInfo.language + '.png'"
            :alt="cardInfo.language"
          />
        </li>
        <li v-else="!this.flags.includes(cardInfo.language)">
          <span>Language: </span> {{ cardInfo.language }}
        </li>

        <li>
          <span>Voto: </span>
          <font-awesome-icon :icon="getStars(stars)" v-for="stars in 5" />
        </li>

        <li v-show="cardInfo.description">
          <span>Descrizione: </span>
          <p>{{ cardInfo.description }}</p>
        </li>
        <li v-show="!cardInfo.description"></li>
      </div>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 1rem;
  li {
    margin-bottom: 1rem;
  }
  span {
    text-align: center;
    font-weight: bold;
    padding: 0.5rem;
  }
}

.flagClass {
  width: 30px;
  aspect-ratio: 1;
}

.card {
  position: relative;
  padding: 0.5rem;
  width: 400px;
  height: 600px;
}

.card-img {
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.card-description {
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1rem;
}
</style>
