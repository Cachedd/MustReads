<script>
import ReviewCard from '@/components/ReviewCard.vue';
import { db, auth } from '@/firebase.js'
import { where, query, collection, getDocs, onSnapshot } from "firebase/firestore"

export default {
    components:
    {
        ReviewCard
    },
    data() {
        return {
            reviews: []
        }
    },
    methods: {
        async getReviews() {
            const currentUser = auth.currentUser.uid
            const reviewQuery = await getDocs(query(collection(db, 'reviews'), where('userId', '==', `${currentUser}`)))

            reviewQuery.forEach((doc) => {
                this.reviews.push({
                    id: doc.id,
                    title: doc.data().title,
                    author: doc.data().author,
                    comment: doc.data().comment,
                    time: doc.data().time.toDate().toLocaleString()
                })
            })

            // listener for deletion of reviews for real time update
            onSnapshot(collection(db, 'reviews'), (snapshot) => {
                snapshot.docChanges().forEach(change => {
                    if (change.type === 'removed') {
                        this.reviews = this.reviews.filter(review => review.id !== change.doc.id)
                    }
                })
            }, (error) => {
                console.log(error)
            })
        }
    },
    created() {
        this.getReviews()
    }
}
</script>

<template>
    <div class="container">
        <h1>Reviews</h1>
        <p class="lead">Start favoriting books to fill up this space to write reviews for your books! 📚</p>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <ReviewCard v-for="review in reviews" :key="review.id" :reviewId="review.id" :title="review.title"
                :author="review.author" :timestamp="review.time" :comments="review.comment" />
        </div>
    </div>
</template>

<style scoped></style>