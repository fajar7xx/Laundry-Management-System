import API from "../utils/api";

// referensi
//github.com/garethredfern/sanctum-vue

export default {
    login(payload) {
        return API.post("/login", payload);
    },
};
