import AuthService from "../../services/AuthService";
import TokenService from "../../services/TokenService";

const tokenService = TokenService.getService();

const state = {};

const mutations = {};

const actions = {
    // submit({ commit }, payload) {
    //     // reset local storage
    //     localStorage.setItem("token", null);
    //     // RESET STATE TOKEN MENJADI NULL
    //     //KARENA MUTATIONS SET_TOKEN BERADA PADA ROOT STORES, MAKA DITAMBAHKAN PARAMETER
    //     //{ root: true }
    //     commit("SET_TOKEN", null, { root: true });

    //     //KITA MENGGUNAKAN PROMISE AGAR FUNGSI SELANJUTNYA BERJALAN KETIKA FUNGSI INI SELESAI
    //     return new Promise((resolve, reject) => {
    //         //MENGIRIM REQUEST KE SERVER DENGAN URI /login
    //         //DAN PAYLOAD ADALAH DATA YANG DIKIRIMKAN DARI COMPONENT LOGIN.VUE
    //         AuthService.login(payload)
    //             .then((response) => {
    //                 if (response.data.status === "success") {
    //                     let token = response.data.token;
    //                     let user = response.data.data;
    //                     // console.log(token);
    //                     localStorage.setItem("token", token);
    //                     commit("SET_TOKEN", token, { root: true });
    //                     commit("SET_USER", user, { root: true });
    //                 } else {
    //                     commit(
    //                         "SET_ERRORS",
    //                         {
    //                             invalid: response.data.message,
    //                         },
    //                         { root: true }
    //                     );
    //                 }
    //                 // JANGAN LUPA UNTUK MELAKUKAN RESOLVE AGAR DIANGGAP SELESAI
    //                 resolve(response.data);
    //             })
    //             .catch((error) => {
    //                 if (error.response.status === 422) {
    //                     console.group("error login");
    //                     console.log(error.response.data.errors);
    //                     console.log(error.response.data);
    //                     console.groupEnd();
    //                     commit("SET_ERRORS", error.response.data.errors, {
    //                         root: true,
    //                     });
    //                 }
    //             });
    //     });
    // },
    async submit({ commit }, credentials) {
        tokenService.resetToken();
        commit("SET_TOKEN", null, { root: true });
        try {
            const response = await AuthService.login(credentials);
            if (response.data.status === "success") {
                let token = response.data.token;
                let user = response.data.data;
                tokenService.setToken(token);
                commit("SET_TOKEN", token, { root: true });
                commit("SET_USER", user, { root: true });
            } else {
                console.log("gagal login");
                commit(
                    "SET_ERRORS",
                    { invalid: response.data.message },
                    { root: true }
                );
            }
        } catch (error) {
            if (error.response.status === 422) {
                console.group("login error");
                console.log(error.response);
                console.log(error.response.data.errors);
                console.log(error.response.data);
                console.groupEnd();
                commit("SET_ERRORS", error.response.data.errors, {
                    root: true,
                });
            }
        }
    },
    // logout({ commit }) {
    //     console.log("logout vuex");
    //     return new Promise((resolve, reject) => {
    //         AuthService.logout()
    //             .then((response) => {
    //                 // console.log();
    //                 // commit("CLEAR_TOKEN", null, { root: true });
    //                 commit("CLEAR_USER_DATA", null, { root: true });
    //                 resolve(response.data);
    //             })
    //             .catch((error) => {
    //                 console.group("logout error");
    //                 console.log(error);
    //                 console.groupEnd;
    //             });
    //     });
    // },
    async logout({ commit }) {
        console.log("logout dari vuex");
        try {
            const response = await AuthService.logout();
            console.log(response.data.message);
            commit("CLEAR_USER_DATA", null, { root: true });
        } catch (error) {
            console.group("logout error");
            console.log(error);
            console.groupEnd;
        }
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
