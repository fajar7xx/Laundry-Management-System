import { reject } from "lodash";
import API from "../../utils/api";

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
            API.post("/login", payload)
                .then((response) => {
                    if (response.data.status === "success") {
                        let token = response.data.data;
                        localStorage.setItem("token", token);
                        commit("SET_TOKEN", token, { root: true });
                    } else {
                        commit(
                            "SET_ERRORS",
                            {
                                invalid: "user didnt match",
                            },
                            { root: true }
                        );
                    }
                    //JANGAN LUPA UNTUK MELAKUKAN RESOLVE AGAR DIANGGAP SELESAI
                    resolve(response.data);
                })
                .catch((error) => {
                    if (error.response.status === 422) {
                        commit("SET_ERROS", error.response.data.errors, {
                            root: true,
                        });
                    }
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
