import axios from "axios";

const API = axios.create({
    baseURL: "/api",
    headers: {
        Authorization:
            localStorage.getItem("token") != "null"
                ? "Bearer " + JSON.stringify(localStorage.getItem("token"))
                : "",
        "content-type": "application/json",
    },
    withCredentials: true,
});

export default API;
