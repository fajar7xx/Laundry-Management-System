import API from "../utils/api";

// referensi
//github.com/garethredfern/sanctum-vue

// export default {
//     login(payload) {
//         return API.post("/login", payload);
//     },
// };

const AuthService = {
    login(credentials) {
        return API.post("/login", credentials);
    },

    logout() {
        return API.get("/logout");
    },
};

export default AuthService;
