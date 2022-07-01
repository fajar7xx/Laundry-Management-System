import RolePermissionService from "../../services/RolePermissionService";

const state = {
    roles: [],
    permissions: [],
    rolePermissions: [],
};

const mutations = {
    ASSIGN_ROLES(state, payload) {
        state.roles = payload;
    },
    ASSIGN_PERMISSION(state, payload) {
        state.permissions = payload;
    },
    ASSIGN_ROLE_PERMISSION(state, payload) {
        state.rolePermissions = payload;
    },
    CLEAR_ROLE_PERMISSION(state, payload) {
        state.rolePermissions = [];
    },
};

const actions = {
    async setRoleUser({ commit }, payload) {
        try {
            const response = await RolePermissionService.setRoleUser(payload);
            console.log(response.data);
            commit("CLEAR_ERRORS", "", { root: true });
        } catch (error) {
            console.group("error for set role user");
            console.log(error);
            console.groupEnd();

            if (error.response.status === 422) {
                console.log("error response set role user");
                commit("SET_ERRORS", error.response.data.errors, {
                    root: true,
                });
            }

            throw error;
        }
    },

    async getALLRoles({ commit }) {
        try {
            const response = await RolePermissionService.getAllRoles();
            console.log(response.data);
            commit("ASSIGN_ROLES", response.data);
        } catch (error) {
            console.group("error for get role");
            console.log(error);
            console.groupEnd();

            throw error;
        }
    },

    async getAllPermissions({ commit }) {
        try {
            const response = await RolePermissionService.getAllPermissions();
            console.log(response.data);
            commit("ASSIGN_PERMISSION", response.data);
        } catch (error) {
            console.group("error for get permissions");
            console.log(error);
            console.groupEnd();

            throw error;
        }
    },

    async getRolePermission({ commit }, payload) {
        try {
            const response = await RolePermissionService.getRolePermissions(
                payload
            );
            console.log(response.data);
            commit("CLEAR_ERRORS", "", { root: true });
            commit("ASSIGN_ROLE_PERMISSION", response.data);
        } catch (error) {
            console.group("error for get role permission");
            console.log(error);
            console.groupEnd();

            throw error;
        }
    },

    async setRolePermission({ commit }, payload) {
        try {
            const response = await RolePermissionService.setRolePermission(
                payload
            );
            console.log(response.data);
            commit("CLEAR_ERRORS", "", { root: true });
        } catch (error) {
            console.group("error for set role permission");
            console.log(error);
            console.groupEnd();

            if (error.response.status === 422) {
                console.log("error response set role permission");
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
