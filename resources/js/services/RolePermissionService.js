import API from "../utils/api";

const RolePermissionService = {
    getAllRoles() {
        return API.get(`/roles`);
    },

    getAllPermissions() {
        return API.get(`/permissions`);
    },

    getRolePermissions(payload) {
        return API.post(`/role-permission`, payload);
    },

    setRolePermission(payload) {
        return API.post(`/set-role-permission`, payload);
    },

    setRoleUser(payload) {
        return API.post(`/set-role-user`, payload);
    },
};

export default RolePermissionService;
