import ApiService from "./api.service";
import TokenService from "./storage.service";

class AuthenticationError extends Error {
    constructor(errorCode, message) {
        super(message);
        this.name = this.constructor.name;
        this.message = message;
        this.errorCode = errorCode;
    }
}


const AuthService = {

    async signIn(form) {
        const requestData = {
            method: 'POST',
            url: "/o/auth/signin",
            data: form,
        }
        console.debug(requestData)
        return await ApiService.post(requestData)
            .then((response) => {
                return response.data
            }).catch((e) => {
                console.error(e)
                if (e.response.status === 401) {
                    throw new AuthenticationError(
                        e.response.status,
                        e.response.data
                    );
                }
                throw (e)
            })
    },
    

};

export default AuthService;

export { AuthService, AuthenticationError };
