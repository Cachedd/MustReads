<script>
export default {
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
        }
    }
}
</script>

<template>
    <div class="container filter">
        <h2>Genres</h2>
        <div class="row">
            <div class="d-grid gap-3 col-3 mx-auto">
                <button @click="findClassics" class="btn btn-primary" type="button">Classics</button>
            </div>
            <div class="d-grid gap-3 col-3 mx-auto">
                <button @click="findDystopia" class="btn btn-primary" type="button">Dystopia</button>
            </div>
            <div class="d-grid gap-3 col-3 mx-auto">
                <button @click="findHistorical" class="btn btn-primary" type="button">Historical</button>
            </div>
            <div class="d-grid gap-3 col-3 mx-auto">
                <button @click="findScienceFiction" class="btn btn-primary" type="button">Science Fiction</button>
            </div>
        </div>
    </div>
</template>