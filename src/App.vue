<script>
import axios from "axios";
import { store } from "./data/store";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {};
  },

  components: { AppHeader, AppMain },

  methods: {
    //Passiamo attraverso l'emit (term) che sarebbe (queryTerm)

    fetchMovies(queryTerm) {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=64c72e8d9b44f9a294aabbbf5b05fc02",
          {
            params: {
              query: queryTerm,
            },
          }
        )
        .then((response) => {
          store.moviesList = response.data.results.map((movie) => {
            const {
              id,
              title,
              original_title,
              original_language,
              vote_average,
              poster_path,
              overview,
            } = movie;
           //  console.log(movie);
            return {
              id,
              name: title,
              original_title,
              language: original_language,
              vote: Math.ceil(vote_average / 2),
              poster: poster_path,
              description:overview,
            };
          });
        });
    },

    fetchSerieTv(queryTerm) {
      axios
        .get(
          "https://api.themoviedb.org/3/search/tv?api_key=64c72e8d9b44f9a294aabbbf5b05fc02",
          {
            params: {
              query: queryTerm,
            },
          }
        )
        .then((response) => {
          store.serieTvList = response.data.results.map((serieTv) => {
            const {
              id,
              name,
              original_name,
              original_language,
              vote_average,
              poster_path,
              overview,
            } = serieTv;
            // console.log(serieTv);
            //In questo caso con map (serieTv) entriamo direttamente nell'array
            return {
              id: serieTv.id,
              name: serieTv.name,
              original_title: serieTv.original_name,
              language: serieTv.original_language,
              vote: Math.ceil(serieTv.vote_average / 2),
              poster: poster_path,
              description:overview,
            };
          });
        });
    },

    //Facciamo 2 chiamate con un solo emit
    handleQuery(queryTerm) {
      this.fetchMovies(queryTerm);
      this.fetchSerieTv(queryTerm);
    },
  },
  created() {},
};
</script>

<template>
  <AppHeader @search-title="handleQuery" />
  <div class="container-fluid px-0 pt-5">

    <AppMain />
  </div>
</template>

<style lang="scss">
@use "../src/components/style/style.scss" as *;


</style>
