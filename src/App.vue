<script setup>

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { useAuthStore } from './stores/auth.store';
const authStore = useAuthStore()
authStore.loadToken()
</script>

<template>
  <div class="container-lg">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

