<script>
import axios from "axios";
import { store } from "./data/store";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      apiMovies:
        "https://api.themoviedb.org/3/search/movie?api_key=64c72e8d9b44f9a294aabbbf5b05fc02&query=anelli",
      store,

      apiSerieTv:
        "https://api.themoviedb.org/3/search/tv?api_key=64c72e8d9b44f9a294aabbbf5b05fc02&query=anelli",
    };
  },
  conta: 0,
  components: { AppHeader, AppMain },

  methods: {
    //Passiamo attraverso l'emit (term) che passiamo con (queryTerm)

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
             // poster_path,
            } = movie;
           //   console.log(movie);
            return {
              id,
              title,
              original_title,
              language: original_language,
              vote: vote_average,
             // poster: "https://image.tmdb.org/t/p/w300/" + poster_path,
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
            const { id, name, original_name, original_language, vote_average } =
              serieTv;
         // console.log(serieTv);
            //In questo caso con map (serieTv) entriamo direttamente nell'array
            return {
              id: serieTv.id,
              name: serieTv.name,
              original_name: serieTv.original_name,
              language: serieTv.original_language,
              vote: serieTv.vote_average,
            };
          });
        });
    },
  },
  created() {},
};
</script>

<template>
  <div class="container-fluid">
    <AppHeader @start-search="fetchMovies" @start-tv-search="fetchSerieTv" />

    <AppMain />
  </div>
</template>

<style lang="scss"></style>
