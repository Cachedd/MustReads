<script>
export default {
    emits: ['findClassics', 'findDystopia', 'findHistorical', 'findScienceFiction'],
    data() {
        return {
            activeGenre: ''
        }
    },
    methods: {
        findClassics() {
            this.$emit('findClassics')
        },
        findDystopia() {
            this.$emit('findDystopia')
        },
        findHistorical() {
            this.$emit('findHistorical')
        },
        findScienceFiction() {
            this.$emit('findScienceFiction')
        },
        toggleGenre(genre) {
            if (this.activeGenre === genre) {
                this.activeGenre = null
            } else {
                this.activeGenre = genre
            }
        }
    }
}
</script>

<template>
    <div class="container">
        <h2>Genres</h2>
        <div class="row">
            <div class="d-grid gap-3 col-12 col-sm-6 col-md-3 mx-auto mb-3">
                <button @click="findClassics" class="btn btn-outline-dark" type="button">Classics</button>
            </div>

            <div class="d-grid gap-3 col-12 col-sm-6 col-md-3 mx-auto mb-3">
                <button @click="findDystopia" class="btn btn-outline-dark" type="button">Dystopia</button>
            </div>
            <div class="d-grid gap-3 col-12 col-sm-6 col-md-3 mx-auto mb-3">
                <button @click="findHistorical" class="btn btn-outline-dark" type="button">Historical</button>
            </div>
            <div class="d-grid gap-3 col-12 col-sm-6 col-md-3 mx-auto mb-3">
                <button @click="findScienceFiction" class="btn btn-outline-dark" type="button">Science
                    Fiction</button>
            </div>
        </div>
    </div>
</template>