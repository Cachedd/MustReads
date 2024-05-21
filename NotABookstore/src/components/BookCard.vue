<script>
import router from '@/router'
import { auth } from '@/firebase'
import { db } from '@/firebase';
import { serverTimestamp, addDoc, collection } from 'firebase/firestore';

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
    },
    methods: {
        async addBooks() {
            if (auth.currentUser) {
                await addDoc(collection(db, 'reviews'), {
                    userId: `${auth.currentUser.uid}`,
                    title: this.title,
                    author: this.authors,
                    comment: '',
                    time: serverTimestamp()
                })
            } else {
                router.push("/login")
            }
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
                <a @click="addBooks" class="btn btn-outline-dark">Favorite</a>
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