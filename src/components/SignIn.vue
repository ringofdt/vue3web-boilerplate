<template>
    <div id="signInForm" class="card my-2 p-2">
        <form class="text-start" @submit.prevent="signIn">
            <div class="mb-3">
                <label for="signInInputEmail1" class="form-label">Email address</label>
                <input type="email" v-model="email" class="form-control" id="signInInputEmail1"
                    aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="signInInputPassword1" class="form-label">Password</label>
                <input type="password" v-model="password" class="form-control" id="signInInputPassword1"
                    autocomplete="off">
            </div>
            <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary">Sign In</button>
            </div>
        </form>
        <div v-if="authStore.signInErr" class="alert alert-danger mt-2" role="alert">
            {{ authStore.signInErr }}
        </div>
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
            email: "",
            password: "",
        };
    },
    methods: {
        async signIn() {
            await this.authStore.doSignIn({
                email: this.email,
                password: this.password,
            });
        },
    },
    mounted() {
        this.authStore.resetSignIn()
    }
};
</script>

<style scoped>
#signInForm {
    max-width: 400px;
}
</style>