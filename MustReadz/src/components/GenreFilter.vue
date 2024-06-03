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
    }
}
</script>

<template>
    <div class="container">
        <h2>Genres</h2>
        <div class="row">
            <div class="d-grid gap-3 col-12 col-sm-6 col-md-3 mx-auto mb-3">
                <input @click="findClassics" type="radio" class="btn-check" name="genres" id="classics"
                    autocomplete="off">
                <label class="btn btn-outline-dark" for="classics">Classics</label>
            </div>

            <div class="d-grid gap-3 col-12 col-sm-6 col-md-3 mx-auto mb-3">
                <input @click="findDystopia" type="radio" class="btn-check" name="genres" id="dystopia"
                    autocomplete="off">
                <label class="btn btn-outline-dark" for="dystopia">Dystopia</label>
            </div>
            <div class="d-grid gap-3 col-12 col-sm-6 col-md-3 mx-auto mb-3">
                <input @click="findHistorical" type="radio" class="btn-check" name="genres" id="historical"
                    autocomplete="off">
                <label class="btn btn-outline-dark" for="historical">Historical</label>
            </div>
            <div class="d-grid gap-3 col-12 col-sm-6 col-md-3 mx-auto mb-3">
                <input @click="findScienceFiction" type="radio" class="btn-check" name="genres" id="sciencefiction"
                    autocomplete="off">
                <label class="btn btn-outline-dark" for="sciencefiction">Science
                    Fiction</label>
            </div>
        </div>
    </div>
</template>