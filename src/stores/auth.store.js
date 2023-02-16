import { defineStore } from 'pinia';
import {TokenService} from '@/services/storage.service';
import ApiService from '@/services/api.service';


export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: null, 
        err : null,
        token: null,
    }),
    getters:{
        errmsg(state){
            return state.err;
        },
        isAuthSucc(state) {
            return state.token ? true : false 
        }
    },
    actions: {
        async signIn(form) {
            console.debug('signIn: ',form)
            
                await ApiService.post('/user/login',form)
                .then((res)=>{
                    console.debug(res.data)
                    this.err = res.data.error ? res.data.error : null
                    this.token = res.data.access_token ? res.data.access_token : null
                }).catch((e)=>{
                    console.error(e.response)
                    this.err = e.response.data
                }).finally(()=>{
                    if (this.err) {
                        this.token = null
                    }
                })
                
            
        },
        async signUp(form) {
            return await ApiService.post('/user/signup',form)
            .then((res)=>{
                console.debug(res.data)
                return res.data
            }).catch((e)=>{
                console.error(e)
                throw(e)
            })
        },
        clear() {
            this.$reset()
        }
    }
});
