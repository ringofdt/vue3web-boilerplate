<script setup>
import router from '@/router'
import { useAuthStore } from '@/stores'
const authStore = useAuthStore();

</script>

<template>
    <nav id="nav" class="navbar navbar-expand-sm bg-body-tertiary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
                aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarToggler">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'About' }">About</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav d-flex">
                    <li v-if="authStore.isAuthSucc" class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'Logout' }">Logout</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

