<template>
    <header>
        <div class="container">
            <nav class="navbar navbar-expand-sm navbar-dark">
                <a class="navbar-brand text-white" href="#">
                    <img src="./icons/book-icon.svg" alt="book icon" width="30" height="24">
                    MustReads</a>
                <button class=" navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto text-center">
                        <router-link class="nav-link text-white" aria-current="page" to="/">Home</router-link>
                        <router-link class="nav-link text-white" to="/books">Books</router-link>
                        <router-link v-if="user" class="nav-link text-white" to="/reviews">Reviews</router-link>
                        <router-link v-if="!user" class="nav-link text-white" to="/login">Login</router-link>
                        <a v-if="user" class="nav-link text-white" @click="logout">Logout</a>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
import { auth } from '@/firebase.js'
import router from '@/router'

export default {
    data() {
        return {
            user: null
        }
    },
    created() {
        auth.onAuthStateChanged(user => {
            this.user = user;
        })
    },
    methods: {
        logout() {
            auth.signOut()
            router.push('/login')
        }
    }
}
</script>

<style scoped>
.router-link-exact-active {
    font-weight: bolder;
}

header {
    background-color: #2b313e;
    padding: 5px;
    text-align: center;
}
</style>
