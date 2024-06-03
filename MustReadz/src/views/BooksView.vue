<script>
import SearchBar from '@/components/SearchBar.vue'
import BookCard from '@/components/BookCard.vue'
import LoadingCard from '@/components/LoadingCard.vue'
import BooksAPI from '@/services/BooksAPI.js'
import Paginate from 'vuejs-paginate-next'
import GenreFilter from '@/components/GenreFilter.vue'

export default {
  components: {
    SearchBar,
    BookCard,
    LoadingCard,
    paginate: Paginate,
    GenreFilter
  },
  data() {
    return {
      // array to store the fetched books from the api
      fetchedBooks: [],
      loading: true,
      perPage: 12,
      currentPage: 1
    }
  },
  async mounted() {
    try {
      const response = await BooksAPI.getBooks();
      this.fetchedBooks = response.data
      this.loading = false
    } catch (err) {
      console.log(err);
    }
  },
  computed: {
    // returns data according to page number
    paginateBooks() {
      let current = this.currentPage * this.perPage
      let start = current - this.perPage
      return this.fetchedBooks.slice(start, current)
    },
    getPageCount() {
      return Math.ceil(this.fetchedBooks.length / this.perPage)
    }
  },
  methods: {
    clickCallback(pageNum) {
      this.currentPage = Number(pageNum)
    },
    async fetchData(apiCall) {
      try {
        this.loading = true;
        const response = await apiCall()
        // check if we recieved the response
        if (response) {
          this.fetchedBooks = response.data;
        } else {
          console.error("Invalid response from API");
        }
      } catch (err) {
        console.error(err);
        alert('Fetching data failed!');
      } finally {
        this.loading = false;
      }
    },
    async searchBooks(searchTerm) {
      await this.fetchData(() => BooksAPI.searchBooks(searchTerm))
    },
    async getClassics() {
      await this.fetchData(BooksAPI.getClassics)
    },
    async getDystopia() {
      await this.fetchData(BooksAPI.getDystopia)
    },
    async getHistorical() {
      await this.fetchData(BooksAPI.getHistorical)
    },
    async getScienceFiction() {
      await this.fetchData(BooksAPI.getScienceFiction)
    }
  }
}
</script>

<template>
  <main>
    <div class="container">
      <h1>Book Search</h1>
      <SearchBar @search="searchBooks" />
      <div>
        <GenreFilter @findClassics="getClassics" @findDystopia="getDystopia" @findHistorical="getHistorical"
          @findScienceFiction="getScienceFiction" />
      </div>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <template v-if="loading">
          <LoadingCard v-for="i in 12" :key="i" />
        </template>
        <template v-else>
          <!-- passing in the values using props to display book cards -->
          <BookCard v-for="book in paginateBooks" :key="book.id" :title="book.title" :authors="book.authors"
            :image_url="book.image_url" />
        </template>
      </div>
      <!-- Vue Paginate -->
      <paginate :page-count="getPageCount" :page-range="4" :margin-pages="2" :click-handler="clickCallback"
        :prev-text="'Prev'" :next-text="'Next'" :container-class="'pagination'" :page-class="'page-item'">
      </paginate>
    </div>
  </main>
</template>

<style scoped>
.pagination {
  margin-top: 10px;
}

.container .filter {
  margin-bottom: 10px;
}
</style>