<script>
import { db } from '@/firebase';
import { deleteDoc, doc } from 'firebase/firestore';

export default {
    props: {
        title: String,
        author: String,
        timestamp: String,
        reviewId: String
    },
    data() {
        return {
            comment: ''
        }
    },
    methods: {
        async deleteReview() {
            // registering realtime listener for the changes on current doc
            await deleteDoc(doc(db, 'reviews', this.reviewId))
        }
    }
}
</script>


<template>
    <div class="col">
        <div class="card h-100 text-center">
            <div class="card-body">
                <h5 class="card-title">{{ title }}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">{{ author }}</h6>
                <div class="form-floating">
                    <textarea v-model="comment" class="form-control" placeholder="Leave a comment here"
                        id="floatingTextarea2" style="height: 100px"></textarea>
                    <label for="floatingTextarea2">Reviews</label>
                </div>
                <a href="#" class="btn btn-success btns">Save</a>
                <a @click="deleteReview" class="btn btn btn-danger btns">Delete</a>
            </div>
            <div class="card-footer">
                <small class="text-body-secondary">Last updated {{ timestamp }}</small>
            </div>
        </div>
    </div>
</template>

<style scoped>
.btns {
    margin: 10px 10px 0 0;
}
</style>