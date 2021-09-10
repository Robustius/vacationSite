// Axios with Interceptor for JWT

import axios from "axios";

// creating axios instance:
const jwtAxios = axios.create();

// Adding a request interceptor to it:
jwtAxios.interceptors.request.use(request => {

    // If user logged in:
    if (localStorage.loginData) {
        const loginData=JSON.parse(localStorage.loginData)
        // Add the token to request headers:
        request.headers = {
            authorization: "Bearer " + loginData.token
        };
    }
    
    return request;
});

export default jwtAxios;