import axios from "axios";
import TokenService from "../services/TokenService";

// consssst localStorageService = LocalStorageService.getService();
const tokenService = TokenService.getService();
const API = axios.create({
    baseURL: "/api",
    headers: {
        // Authorization:
        //     localStorage.getItem("token") != "null"
        //         ? "Bearer " + JSON.stringify(localStorage.getItem("token"))
        //         : "",
        // Authorization:
        //     localStorage.getItem("token") != "null"
        //         ? `Bearer ${localStorage.getItem("token")}`
        //         : "",
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    withCredentials: true,
});

API.interceptors.request.use(
    (config) => {
        // const token = localStorageService.getAccessToken();
        const token = tokenService.getAccessToken();
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

// API.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         const originalRequest = error.config;
//         if (error.response.status === 401 && !originalRequest._retry) {
//             originalRequest._retry = true;
//             return API.post("/auth/token", {
//                 refresh_token: localStorageService.getRefreshToken(),
//             }).then((res) => {
//                 if (res.status === 201) {
//                     // 1 put token to localstorage
//                     localStorageService.setToken(res.data);

//                     // 2 change authorization header
//                     API.defaults.headers.common[
//                         "Authorization"
//                     ] = `Bearer ${localStorageService.getAccessToken()}`;

//                     // 3 return original request object with axios
//                     return API(originalRequest);
//                 }
//             });
//         }
//         return Promise.reject(error);
//     }
// );

export default API;
