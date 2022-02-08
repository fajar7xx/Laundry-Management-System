import CourierService from "../../services/CourierService";

const state = {
    couriers: [],
    meta: [],
    courier: {
        name: "",
        email: "",
        password: "",
        role: "",
        photo: "",
        outlet_id: "",
    },
    page: 1,
    id: "",
    totalRows: 0,
    perPage: 0,
};

const mutations = {
    ASSIGN_DATA(state, payload) {
        state.couriers = payload;
    },
    SET_PAGE(state, payload) {
        state.page = payload;
    },
    SET_ID_UPDATE(state, payload) {
        state.id = payload;
    },
    SET_TOTAL_ROWS(state, payload) {
        state.totalRows = payload;
    },
    SET_PER_PAGE(state, payload) {
        state.perPage = payload;
    },
    SET_META(state, payload) {
        state.meta = payload;
    },
};

const actions = {
    async getCouriers({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        try {
            const response = await CourierService.getCouriers(
                state.page,
                search
            );
            // console.group("fetching data");
            // console.log(response.data);
            // console.log(response.data.meta);
            // console.groupEnd();
            commit("ASSIGN_DATA", response.data);
            commit("SET_TOTAL_ROWS", response.data.meta.total);
            commit("SET_PER_PAGE", response.data.meta.per_page);
            commit("SET_META", response.data.meta);
        } catch (error) {
            console.group("error for get couriers data");
            console.log(error);
            console.groupEnd();
            throw error;
        }
    },
    async submitCourier({ dispatch, commit }, payload) {
        try {
            const response = await CourierService.createCourier(payload);
            dispatch("getCouriers");
        } catch (error) {
            console.group("error for post courier data");
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
    // payload letakkan pada paremeter ke2
    async getCourier({}, id) {
        try {
            // console.group("get courier detail");
            // console.log(id);
            // console.groupEnd;
            const response = await CourierService.getCourier(id);
            return response.data;
        } catch (error) {
            console.group("error for get courier");
            console.log(error);
            console.log(error.response);
            console.groupEnd();
            throw error;
        }
    },
    async updateCourier({ state }, payload) {
        try {
            const response = await CourierService.updateCourier(
                state.id,
                payload
            );
            return response.data;
        } catch (error) {
            console.group("error for update courier");
            console.log(error);
            console.log(error.response);
            console.groupEnd();
            throw error;
        }
    },
    async removeCourier({ dispatch }, id) {
        try {
            const response = await CourierService.deleteCourier(id);
            dispatch("getCouriers");
        } catch (error) {
            console.group("error for remove courier");
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
