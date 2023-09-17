<script>
import axios from "axios";

export default {
  data() {
    return {
      term: "",
    };
  },

  methods: {
    searchTitle() {
      // Emetti il primo evento con il valore 'term'
      this.$emit("start-search", this.term);

      // Emetti il secondo evento con lo stesso valore 'term'
      this.$emit("start-tv-search", this.term);
    },
  },
};
</script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand">Navbar</a>
      `
      <form @submit.prevent="searchTitle" class="d-flex" role="search">
        <input
          v-model="term"
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
