<script>
import { auth } from '@/firebase.js'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import router from '@/router';

export default {
    data() {
        return {
            email: '',
            password1: '',
            password2: '',
            err: '',
            xhrRequest: false
        }
    },
    methods: {
        signupRequest() {
            this.err = ''
            this.comparePasswords()
            if (!this.err) {
                this.xhrRequest = true
                createUserWithEmailAndPassword(auth, this.email, this.password1)
                    .then(() => {
                        router.push("/reviews");
                    })
                    .catch((error) => {
                        this.xhrRequest = false;
                        switch (error.code) {
                            case "auth/email-already-in-use":
                                this.err = "Account already exists with this email"
                                break;
                            case "auth/weak-password":
                                this.err = "Password needs to be atleast 6 characters long"
                                break;
                            default:
                                this.err = "Email or password was incorrect"
                                break;
                        }
                    })
            }
        },
        comparePasswords() {
            if (this.password1 != this.password2) {
                this.err = "Passwords don't match"
            }
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-5 m-auto">
                <h1>Create An Account</h1>
                <form id="signup-form" @submit.prevent="signupRequest">
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input v-model="email" type="email" id="email" class="form-control form-control-lg">
                    </div>
                    <div class="form-group">
                        <label for="password1">Password</label>
                        <input v-model="password1" type="password" id="password1" class="form-control form-control-lg">
                    </div>
                    <div class="form-group">
                        <label for="password2">Confirm Password</label>
                        <input v-model="password2" type="password" id="password2" class="form-control form-control-lg">
                    </div>
                    <p v-if="err" v-color="'red'" class="fst-italic">{{ err }}</p>
                    <div class="text-center">
                        <button type="submit" v-if="!xhrRequest" class="btn btn-primary btn-lg">
                            Sign Up
                        </button>
                        <button type="submit" v-if="xhrRequest" class="btn btn-primary btn-lg">
                            <span class="spinner-border spinner-border-sm"></span>
                            Signing up
                        </button>
                        <div class="form-group mt-3">
                            <p>Already have an account? <router-link to="/login">Log In</router-link></p>
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
}

.btn-spin {
    position: relative;
    top: -3px;
}
</style>