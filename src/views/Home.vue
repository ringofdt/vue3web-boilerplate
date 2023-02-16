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
            title: 'Home'
        })
        const modeSignIn = "SignIn"
        const modeSignUp = "SignUp"
        const authStore = useAuthStore()
        return {
            modeSignIn,
            modeSignUp,
            authStore,
        }
    },

    data() {
        return {
            mode: this.modeSignIn,
        };
    },
    computed: {
        isSignInMode() {
            return this.mode === this.modeSignIn
        },
        isSignUpMode() {
            return this.mode === this.modeSignUp
        },

    },
    methods: {
        SignInMode() {
            this.mode = this.modeSignIn
        },
        SignUpMode() {
            this.mode = this.modeSignUp
        },

    },
};

</script>

<template>
    <div class="card text-center">
        <div class="card-body">
            <h3>This is Home ! </h3>

            <div v-if="!authStore.isAuthSucc" id="sign-in-pane" class="mx-auto">
                <div>

                    <!-- Tab panes -->

                    <Transition>
                        <component :is="mode" class="tab"></component>
                    </Transition>
                    <button v-show="!isSignInMode" type="button" class="btn btn-sm btn-link link-secondary"
                        @click="SignInMode">
                        Alreday have an account
                    </button>
                    <button v-show="!isSignUpMode" type="button" class="btn btn-sm btn-link link-secondary"
                        @click="SignUpMode">
                        Register a new aacount
                    </button>
                </div>

            </div>

            <div v-if="authStore.isAuthSucc" class="alert alert-info" role="alert">
                Welcome !
            </div>
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

#sign-in-pane {
    width: 400px;
}

.v-enter-active {
    transition: opacity 0.5s ease;
}

.v-leave-active {
    transition: opacity 0s;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>