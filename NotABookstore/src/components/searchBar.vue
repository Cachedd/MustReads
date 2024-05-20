<script>
export default {
    data() {
        return {
            searchTerm: ''
        }
    },
    methods: {
        searchBooks() {
            // call the method and pass the search term to the booksapi file
            this.$emit('search', this.searchTerm)
        }
    }
}
</script>

<template>
    <div class="input-group mb-3">
        <input v-model="searchTerm" @keyup.enter="searchBooks" type="text" class="form-control"
            placeholder="Search for a book" aria-label="SearchBooks" aria-describedby="button-addon2">
        <button @click="searchBooks" class="btn btn-outline-dark" type="button" id="button-addon2">Search</button>
    </div>
</template>

<style></style>