<script>
export default {
  data() {
    return {};
  },
  props: {
    cardInfo: Object,
  },
};
</script>

<template>
  <div class="card mt-1">
    <div class="card-body ">
     
        {{ cardInfo.title }} --
        {{ cardInfo.original_title }} --
        {{ cardInfo.language }} --
        {{ cardInfo.vote }}
      

      <!--  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>-->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
