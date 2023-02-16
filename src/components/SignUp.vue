<template>
    <div id="signUpForm" class="card my-2 p-2">
        <form class="text-start" @submit.prevent="signUp">
            <div class="mb-3">
                <label for="signUpInputName" class="form-label">Name</label>
                <input type="text" v-model="name" class="form-control" id="signUpInputName" aria-describedby="nameHelp">
                <div id="nameHelp" class="form-text"></div>
            </div>
            <div class="mb-3">
                <label for="signUpInputEmail1" class="form-label">Email address</label>
                <input type="email" v-model="email" class="form-control" id="signUpInputEmail1"
                    aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text"></div>
            </div>
            <div class="mb-3">
                <label for="signUpInputPassword1" class="form-label">Password</label>
                <input type="password" v-model="password" class="form-control" id="signUpInputPassword1">
            </div>
            <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary">Sign Up</button>
            </div>
        </form>
    </div>
</template>

<script>

import { useAuthStore } from "@/stores";

export default {
    setup() {
        const authStore = useAuthStore();
        return { authStore };
    },
    data() {
        return {
            name: "",
            email: "",
            password: "",
        };
    },
    methods: {
        async signUp() {
            await this.authStore.signUp({
                fullname: this.name,
                email: this.email,
                password: this.password,
            });
        },
    },
};
</script>

<style scoped>
#signUpForm {
    max-width: 400px;
}
</style>