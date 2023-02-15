
import axios from 'axios'
import router from '@/router'
import { TokenService } from './storage.service'


const ApiService = {

    // Stores the 401 interceptor position so that it can be later ejected when needed
    _401interceptor: null,
    _ajax: null,

    init(baseURL) {
        this._ajax = axios.create({
            baseURL: baseURL,
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        });
        if (TokenService.getToken()) {
            this.setHeader()
            this.mount401Interceptor()
        }
    },

    setHeader() {
        const accessToken = TokenService.getToken()
        if (accessToken) {
            this._ajax.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
            this._ajax.defaults.headers.common["x-access-token"] = accessToken;
        }
    },

    removeHeader() {
        this._ajax.headers = {}
    },

    get(resource) {
        return this._ajax.get(resource)
    },

    post(resource, data) {
        return this._ajax.post(resource, data)
    },

    put(resource, data) {
        return this._ajax.put(resource, data)
    },

    delete(resource) {
        return this._ajax.delete(resource)
    },
    customRequest(data) {
        return this._ajax(data)
    },
    
    mount401Interceptor() {
        this._401interceptor = this._ajax.interceptors.response.use(
            response => response,
            error => {
                const { config, response } = error
                console.error(response)
                if (response.status === 401) {
                    if (
                        !Object.prototype.hasOwnProperty.call(config, "NotRedirect401") ||
                        config.NotRedirect401 !== true
                    ) {
                        router.replace({name: 'Logout'})
                    }
                }
                return Promise.reject(error)
            }
        )

        // this._401interceptor = this._ajax.interceptors.response.use(
        //     (res) => {
        //       return res;
        //     },
        //     async (err) => {
        //       const originalConfig = err.config;
          
        //       if (err.response) {
        //         // Access Token was expired
        //         if (err.response.status === 401 && !originalConfig._retry) {
        //           originalConfig._retry = true;
          
        //           try {
        //             const rs = this._ajax.post('/o/token/', {
        //                 grant_type: "refresh_token",
        //                 refresh_token: TokenService.getRefreshToken(),
        //             });
        //             const { refreshToken, accessToken } = rs.data;
        //             TokenService.saveRefreshToken(refreshToken);
        //             TokenService.saveToken(accessToken);
        //             this.setHeader();
        //             return this._ajax(originalConfig);
        //           } catch (_error) {
        //             if (_error.response && _error.response.data) {
        //               return Promise.reject(_error.response.data);
        //             }
          
        //             return Promise.reject(_error);
        //           }
        //         }
          
        //         if (err.response.status === 403 && err.response.data) {
        //           return Promise.reject(err.response.data);
        //         }
        //       }
          
        //       return Promise.reject(err);
        //     }
    },

    unmount401Interceptor() {
        // Eject the interceptor
        this._ajax.interceptors.response.eject(this._401interceptor)
    },
    
   
   
}

export default ApiService