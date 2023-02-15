import { defineStore } from 'pinia';
import {TokenService} from '@/services/storage.service';
import ApiService from '@/services/api.service';
import AuthService from '@/services/auth.service';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: null, 
    }),
    getters:{
        isAuthSucc(state){
            return state.user !== null ;
        }
    },
    actions: {
        async signIn(form) {
            const res = await ApiService.post('/o/signin',form)
            res.data
            
        },
        logout() {
            TokenService.removeToken();
            TokenService.removeRefreshToken();
            ApiService.removeHeader();
            ApiService.unmount401Interceptor();
            this.token = null; 
        }
    }
});
