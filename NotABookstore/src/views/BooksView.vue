<script>
import SearchBar from '@/components/SearchBar.vue'
import BookCard from '@/components/BookCard.vue'
// import filterTypes from '@/components/filterTypes.vue'
import BooksAPI from '@/services/BooksAPI.js'

export default {
  components: {
    SearchBar,
    BookCard,
    // filterTypes,
  },
  data() {
    return {
      // array to store the fetched books from the api
      fetchedBooks: [],
      // loading: true
    }
  },
  async mounted() {
    try {
      const response = await BooksAPI.getBooks();
      // console.log(response.data);
      this.fetchedBooks = response.data
      // this.loading = false
    } catch (err) {
      console.log(err);
    }
  }
}
</script>

<template>

  <div class="container">
    <h1>Book Search</h1>
    <SearchBar />
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <!-- passing in the values using props to display book cards -->
      <BookCard v-for="book in fetchedBooks" :key="book.id" :title="book.title" :authors="book.authors"
        :image_url="book.image_url" />
    </div>
  </div>

</template>

<style></style>