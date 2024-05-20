<template>
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
            <div class="card h-100 text-center">
                <div class="card-body">
                    <h5 class="card-title">Harry Potter</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">JK Rowling</h6>
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                            style="height: 100px"></textarea>
                        <label for="floatingTextarea2">Reviews</label>
                    </div>
                    <a href="#" class="btn btn-success btns">Edit</a>
                    <a href="#" class="btn btn btn-danger btns">Delete</a>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary">Last updated 3 mins ago</small>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.btns {
    margin: 10px 10px 0 0;
}
</style>