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
      arrayMovies: [],
    };
  },
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
          console.log(response.data.results);
          store.moviesList = response.data.results.map((movie) => {
            const {
              id,
              title,
              original_title,
              original_language,
              vote_average,
            } = movie;
            return {
              id,
              title,
              original_title,
              language: original_language,
              vote: vote_average,
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
    <AppHeader @start-search="fetchMovies" />

    <AppMain />
  </div>
</template>

<style lang="scss"></style>
