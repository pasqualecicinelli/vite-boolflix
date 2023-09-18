<script>
import axios from "axios";

export default {
  data() {
    return {
      term: "",

      emit: ["search-title"],
    };
  },
};
</script>

<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand">BOOLFLIX</a>

      <form
        @submit.prevent="$emit('search-title', term)"
        class="d-flex"
        role="search"
      >
        <input
          v-model="term"
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-dark" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<style lang="scss" scoped>


a {
  color: red;
  font-size: 1.25rem;
  font-weight: bold;
  padding-left:1rem ;
}
</style>
