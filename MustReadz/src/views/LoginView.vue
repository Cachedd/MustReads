<script>
import { auth } from '@/firebase.js'
import { signInWithEmailAndPassword } from 'firebase/auth';
import router from '@/router';

export default {
    data() {
        return {
            email: '',
            password: '',
            xhrRequest: false,
            err: ''
        }
    },
    methods: {
        loginRequest() {
            this.xhrRequest = true
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then(
                    () => {
                        router.push("/reviews")
                    }
                )
                .catch((error) => {
                    this.xhrRequest = false;
                    console.log(error.code)
                    // Since only invalid credentials is provided to protect users from email enumeration attacks
                    this.err = "Email or password was incorrect"
                })
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-5 m-auto">
                <h1>Log In</h1>
                <form id="login-form" @submit.prevent="loginRequest">
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input v-model="email" type="email" id="email" class="form-control form-control-lg">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input v-model="password" type="password" id="password" class="form-control form-control-lg">
                    </div>
                    <p v-if="err" v-color="'red'" class="fst-italic">{{ err }}</p>
                    <div class="col-sm-12 text-center">
                        <button type="submit" v-if="!xhrRequest" class="btn btn-primary btn-lg">
                            Login
                        </button>
                        <button type="submit" v-if="xhrRequest" class="btn btn-primary btn-lg">
                            <span class="spinner-border spinner-border-sm"></span>
                            Logging In
                        </button>
                        <div class="form-group mt-3">
                            <p>Don't have an account? <router-link to="/register">Sign Up</router-link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
button {
    margin-top: 10px;
}

.container {
    margin-top: 8%;
    position: relative;
    top: -3px;
}
</style>