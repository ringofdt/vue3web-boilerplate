<script>
import { useAuthStore } from '../stores/auth.store'
import SignIn from '@/components/SignIn.vue'
import SignUp from '@/components/SignUp.vue'
import { useHead } from 'unhead'
import { ref } from 'vue'
export default {
    components: {
        SignIn,
        SignUp,
    },
    setup() {
        useHead({
            title: 'Logout'
        })

        const authStore = useAuthStore()
        return {
            authStore,
        }
    },

    data() {
        return {

        };
    },
    mounted() {
        this.authStore.clear()
        this.$router.replace({ name: 'Home' })
    }
};

</script>

<template>
    <div class="card">
        <div class="card-body">
            logging out ...
        </div>
    </div>
</template>