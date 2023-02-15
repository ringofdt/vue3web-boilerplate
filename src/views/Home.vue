<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import { useHead } from 'unhead'
useHead({
    title: 'Home'
})
</script>

<template>
    <div class="card text-center">
        <div class="card-body">

            <h3>This is Home ! </h3>
        </div>
    </div>
</template>



<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>