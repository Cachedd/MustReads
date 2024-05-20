<script>
import firebase from "firebase/compat/app"
import "firebase/compat/auth"

export default {
    data() {
        return {
            email: '',
            password: '',
            xhrRequest: false
        }
    },
    methods: {
        signupRequest() {
            this.xhrRequest = true
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    this.$router.replace('/reviews')
                },
                    (err) => {
                        this.xhrRequest = false
                        alert(`Error - ${err.message}`)
                    })
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
                        <label for="password">Password</label>
                        <input v-model="password" type="password" id="password" class="form-control form-control-lg">
                    </div>
                    <div class="text-center">
                        <button v-if="!xhrRequest" class="btn btn-primary btn-lg">
                            Sign Up
                        </button>
                        <button v-if="xhrRequest" class="btn btn-primary btn-lg">
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