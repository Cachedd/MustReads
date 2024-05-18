<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        authors: {
            type: String,
            required: true,
        },
        image_url: {
            type: String,
            required: true,
        }
    }
}
</script>


<template>
    <div class="col">
        <div class="card h-100">
            <img :src=image_url class="card-img-top img-fit" :alt="title + ' - Book Cover'">
            <div class="card-body">
                <h5 class="card-title">{{ title }}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">{{ authors }}</h6>
                <a href="#" class="btn btn-outline-primary">Favorite</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card .img-fit {
    aspect-ratio: 2 / 3;
    object-fit: cover;
}

.card-body {
    display: flex;
    height: 100%;
    flex-direction: column;
}

.card-subtitle {
    flex-grow: 1;
}
</style>