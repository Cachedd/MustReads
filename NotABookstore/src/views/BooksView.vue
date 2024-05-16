<script>
import searchBar from '@/components/searchBar.vue';
import bookCards from '@/components/bookCards.vue';

export default {
  components: {
    searchBar,
    bookCards
  }
}
</script>


<template>
  <div class="container">
    <h1>Book Search</h1>
    <searchBar />
    <!-- Books cards -->
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <bookCards />
      <bookCards />
      <bookCards />
      <bookCards />
    </div>


  </div>
</template>

<style></style>