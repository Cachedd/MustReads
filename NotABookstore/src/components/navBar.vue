<template>
    <header>
        <div class="container">
            <nav class="navbar navbar-expand-sm navbar-light">
                <a class="navbar-brand" href="#">
                    <img src="./icons/book-icon.svg" alt="book icon" width="30" height="24">
                    MustReads</a>
                <button class=" navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto text-center">
                        <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
                        <router-link class="nav-link" to="/books">Books</router-link>
                        <router-link v-if="user" class="nav-link" to="/reviews">Reviews</router-link>
                        <router-link v-if="!user" class="nav-link" to="/login">Login</router-link>
                        <a v-if="user" class="nav-link" @click="logout">Logout</a>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
import firebase from 'firebase/compat/app'
import "firebase/compat/auth"

export default {
    data() {
        return {
            user: null
        }
    },
    created() {
        // checks if user object is present and display the nav links
        firebase.auth().onAuthStateChanged(user => {
            this.user = user
        })
    },
    methods: {
        logout() {
            firebase.auth().signOut()
            this.$router.replace('/login')
        }
    }
}
</script>

<style scoped>
.router-link-exact-active {
    font-weight: bolder;
}
</style>
