import { defineStore } from 'pinia';
import {TokenService} from '@/services/storage.service';
import ApiService from '@/services/api.service';


export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: null, 
        signIn : {
            err: null,
            processing: false,
        },
        signUp : {
            err: null,
            processing: false,
            succ: false,
        },
        token: null,
    }),
    getters:{
        signInErr(state){
            return state.signIn.err;
        },
        isSigningIn(state) {
            return state.signIn.processing
        },
        signUpErr(state){
            return state.signUp.err;
        },
        signUpSucc(state){
            return state.signUp.succ;
        },
        isSigningUp(state) {
            return state.signUp.processing
        },
        isAuthSucc(state) {
            return state.token ? true : false 
        }
    },
    actions: {
        async doSignIn(form) {
            console.debug('doSignIn: ',form)
                this.clear()
                this.signIn.processing = true
                await ApiService.post('/user/login',form)
                .then((res)=>{
                    console.debug(res.data)
                    this.signIn.err = res.data.error ? res.data.error : null
                    this.setToken(res.data.access_token)
                }).catch((e)=>{
                    console.error(e.response)
                    this.signIn.err = e.response.statusText
                }).finally(()=>{
                    this.signIn.processing = false
                    if (this.signIn.err) {
                        this.unsetToken()
                    }
                })
                
            
        },
        async doSignUp(form) {
            this.clear()
            this.signUp.processing = true
            await ApiService.post('/user/signup',form)
            .then((res)=>{
                console.debug(res.data)
                this.signUp.err = res.data.error ? res.data.error : null
                this.signUp.succ = true;
            }).catch((e)=>{
                console.error(e.response)
                this.signUp.err = e.response.statusText
            }).finally(()=>{
                this.signUp.processing = false
            })
        },
        setToken(token){
            console.debug('setToken: ',token)
            if (token) {
                TokenService.saveToken(token)
                this.token = token
            }
        },
        resetSignUp(){
            this.signUp = {
                err: null,
                processing: false,
                succ: false,
            }
        },
        resetSignIn(){
            this.signIn = {
                err: null,
                processing: false,
            }
        },
        clear() {
            this.$reset()
            TokenService.removeToken()
        },
        loadToken(){
            const token = TokenService.getToken()
            if (token) {
                this.token = token 
            }
        }
    }
});
