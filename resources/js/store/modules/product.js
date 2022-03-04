import ProductService from "../../services/ProductService";

const state = {
    products: [],
    meta: [],
    page: 1,
    totalRows: 0,
    perPage: 0,
};

const mutations = {
    ASSIGN_DATA(state, payload) {
        state.products = payload;
    },
    SET_PAGE(state, payload) {
        state.page = payload;
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
    async getProducts({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        try {
            const response = await ProductService.getProducts(
                state.page,
                search
            );
            commit("ASSIGN_DATA", response.data);
            commit("SET_TOTAL_ROWS", response.data.meta.total);
            commit("SET_PER_PAGE", response.data.meta.per_page);
            commit("SET_META", response.data.meta);
        } catch (error) {
            console.group("error for get products");
            console.log(error);
            console.groupEnd();
            throw error;
        }
    },
    async removeProduct({ dispatch }, id) {
        try {
            const response = await ProductService.deleteProduct(id);
            dispatch("getProducts");
        } catch (error) {
            console.group("error for remove product");
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
