import LaundryTypeService from "../../services/LaundryTypeService";

const state = {
    laundryTypes: [],
    meta: [],
    page: 1,
    totalRows: 0,
    perPage: 0,
};

const mutations = {
    ASSIGN_DATA(state, payload) {
        state.laundryTypes = payload;
    },
    SET_PAGE(state, payload) {
        state.page = payload;
    },
    SET_TOTAL_ROWS(state, payload) {
        state.totalRows = payload;
    },
    SET_PER_PAGE(state, payload) {
        statusbar.perPage = payload;
    },
    SET_META(state, payload) {
        state.meta = payload;
    },
};

const actions = {
    async getLaundryType({ commit }, payload) {
        try {
            const response = await LaundryTypeService.getLaundryType();
            commit("ASSIGN_DATA", response.data.data);
            // commit("SET_TOTAL_ROWS", response.data.meta.total);
            // commit("SET_PER_PAGE", response.data.meta.per_page);
            // commit("SET_META", response.data.meta);
        } catch (error) {
            console.group("error for get laundry type");
            console.log(error);
            console.groupEnd();
            throw error;
        }
    },

    async addLaundryType({ commit }, payload) {
        try {
            const response = await LaundryTypeService.createLaundryType(
                payload
            );
        } catch (error) {
            console.group("error for add laundry type");
            console.log(error);
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
};
const getters = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
