import API from "../../utils/api";
import AuthService from "../../services/AuthService";

const state = {};
const mutations = {};
const actions = {
    submit({ commit }, payload) {
        // reset local storage
        localStorage.setItem("token", null);
        // RESET STATE TOKEN MENJADI NULL
        //KARENA MUTATIONS SET_TOKEN BERADA PADA ROOT STORES, MAKA DITAMBAHKAN PARAMETER
        //{ root: true }
        commit("SET_TOKEN", null, { root: true });

        //KITA MENGGUNAKAN PROMISE AGAR FUNGSI SELANJUTNYA BERJALAN KETIKA FUNGSI INI SELESAI
        return new Promise((resolve, reject) => {
            //MENGIRIM REQUEST KE SERVER DENGAN URI /login
            //DAN PAYLOAD ADALAH DATA YANG DIKIRIMKAN DARI COMPONENT LOGIN.VUE
            // API.post("/login", payload)
            //     .then((response) => {
            //         if (response.data.status === "success") {
            //             let token = response.data.token;
            //             let user = response.data.data;
            //             console.log(token);
            //             localStorage.setItem("token", token);
            //             commit("SET_TOKEN", token, { root: true });
            //             commit();
            //         } else {
            //             commit(
            //                 "SET_ERRORS",
            //                 {
            //                     // invalid: "user didnt match",
            //                     invalid: response.data.message,
            //                 },
            //                 { root: true }
            //             );
            //         }
            //         //JANGAN LUPA UNTUK MELAKUKAN RESOLVE AGAR DIANGGAP SELESAI
            //         resolve(response.data);
            //     })
            //     .catch((error) => {
            //         if (error.response.status === 422) {
            //             console.log(error.response.data.errors);
            //             console.log(error.response.data);
            //             commit("SET_ERRORS", error.response.data.errors, {
            //                 root: true,
            //             });
            //         }
            //     });
            AuthService.login(payload)
                .then((response) => {
                    // console.log(response.data);
                    // console.log(response.data.status);
                    if (response.data.status === "success") {
                        let token = response.data.token;
                        let user = response.data.data;
                        // console.log(token);
                        localStorage.setItem("token", token);
                        commit("SET_TOKEN", token, { root: true });
                        commit("SET_USER", user, { root: true });
                    } else {
                        commit(
                            "SET_ERRORS",
                            {
                                invalid: response.data.message,
                            },
                            { root: true }
                        );
                    }
                    // JANGAN LUPA UNTUK MELAKUKAN RESOLVE AGAR DIANGGAP SELESAI
                    resolve(response.data);
                })
                .catch((error) => {
                    // console.log("error");
                    // console.log(error);
                    if (error.response.status === 422) {
                        console.log(error.response.data.errors);
                        console.log(error.response.data);
                        commit("SET_ERRORS", error.response.data.errors, {
                            root: true,
                        });
                    }
                });
        });
    },
    logout({ commit }) {
        console.log("logout vuex");
        return new Promise((resolve, reject) => {
            API.get("/logout")
                .then((response) => {
                    console.log();
                    // localStorage.removeItem("token");
                    // commit("CLEAR_TOKEN", null, { root: true });
                    commit("CLEAR_USER_DATA", null, { root: true });
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log("logout error");
                    console.log(error);
                });
        });
    },
};
const getters = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
