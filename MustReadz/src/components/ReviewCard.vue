<script>
import { db } from '@/firebase';
import { serverTimestamp, setDoc, deleteDoc, doc } from 'firebase/firestore';

let createdId = 0

export default {
    props: {
        title: String,
        author: String,
        timestamp: String,
        reviewId: String,
        comments: String
    },
    data() {
        return {
            comment: this.comments,
            createdId: `${createdId++}`
        }
    },
    methods: {
        async deleteReview() {
            await deleteDoc(doc(db, 'reviews', this.reviewId))
        },
        async saveReview() {
            await setDoc(doc(db, 'reviews', this.reviewId), {
                comment: this.comment,
                time: serverTimestamp()
            }, { merge: true })
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
                        :id="createdId + 'textArea'" style="height: 100px"></textarea>
                    <label :for="createdId + 'textArea'">Reviews</label>
                </div>
                <a @click="saveReview" class="btn btn-success btns">Save</a>
                <a @click="deleteReview" class="btn btn-danger btns">Delete</a>
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