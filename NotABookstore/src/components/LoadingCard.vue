<template>
    <div class="col">
        <div class="card h-100" aria-hidden="true">
            <img src="../assets/loading_image.png" class="card-img-top img-fit" alt="...">
            <div class="card-body">
                <h5 class="card-title placeholder-glow">
                    <span class="placeholder col-6"></span>
                </h5>
                <p class="card-text placeholder-glow">
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-4"></span>
                </p>
                <a class="btn btn-dark disabled placeholder col-6" aria-disabled="true"></a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card .img-fit {
    aspect-ratio: 2 / 3;
    object-fit: cover;
}
</style>