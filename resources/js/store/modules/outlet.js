import API from "../../utils/api";
import OutletService from "../../services/OutletService";

const state = {
    outlets: [], //menampung data outlet yang didapatkan dari database

    // untuk menampung value dari form
    // state ini akan digunakan pada form add
    outlet: {
        code: "",
        name: "",
        status: false,
        address: "",
        phone: "",
    },
    page: 1, //untuk mencatatt pafe paginate yang sedang di akses
};

const mutations = {
    // memasukann data ke state outlets
    ASSIGN_DATA(state, payload) {
        state.outlets = payload;
    },
    // mengubah data state page
    SET_PAGE(state, payload) {
        state.page = payload;
    },
    // mengubah data state outlet
    ASSIGN_FORM(state, payload) {
        state.outlet = {
            code: payload.code,
            name: payload.name,
            status: payload.status,
            address: payload.address,
            phone: payload.phone,
        };
    },
    // reset state outlet menjadi kosong
    CLEAR_FORM(state) {
        state.outlet = {
            code: "",
            name: "",
            status: false,
            address: "",
            phone: "",
        };
    },
};

const actions = {
    // request data outlet dari server
    async getOutlets({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        try {
            const response = await API.get(
                `/outlets?page${state.page}&q=${search}`
            );
            console.group("outlets data");
            console.log("response data: ", response.data);
            console.groupEnd();
            commit("ASSIGN_DATA", response.data);
        } catch (error) {
            console.group("error for get outlets data");
            console.log(error);
            console.groupEnd();
        }
    },
    // tambah outlet
    async submitOutlet({ dispatch, commit, state }) {
        try {
            const response = await API.post("/outlets", state.outlet);
            commit("CLEAR_FORM");
            dispatch("getOutlets");
            // await dispatch("getOutlets");
            // dispatch("getOutlets").then(() => {
            //     response.data;
            // });
        } catch (error) {
            console.group("error for post outlets data");
            console.log(error);
            console.log(error.response);
            console.groupEnd();
            if (error.response.status === 422) {
                console.log("error error error");
                commit("SET_ERRORS", error.response.data.errors, {
                    root: true,
                });
            }
            throw error;
        }
    },
    async editOutlet({ comit }, payload) {
        try {
            const response = await OutletService.getOutlet(payload);
            commit("CLEAR_FORM");
        } catch (error) {
            console.group("error for edit outlet");
            console.log(error);
            console.log(error.response);
            console.groupEnd();
            throw error;
        }
    },
    async removeOutlet({ commit }, payload) {
        try {
            const response = await OutletService.deleteOutlet(payload);
            dispatch("getOutlets");
        } catch (error) {
            onsole.group("error for remove outlet");
            console.log(error);
            console.log(error.response);
            console.groupEnd();
            throw error;
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
