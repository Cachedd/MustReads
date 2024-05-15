<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
                    <router-link class="nav-link" to="/about">About</router-link>
                    <router-link class="nav-link" to="/settings">Settings</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
// export default {
//     name: 'nav-bar',
//     props: ['menu'],
// }
</script>

<style scoped>
.router-link-exact-active {
    font-weight: bolder;
}
</style>



<!-- <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">NAB</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul v-for="(menuItem, index) in menu" :key="index" class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#"> {{ menuItem }} </a>
                </li>
            </ul>
        </div>
    </div>
</nav> -->