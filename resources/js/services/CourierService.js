import API from "../utils/api";

const HEADERS = {
    headers: {
        "Content-Type": "multipart/form-data",
    },
};

const CourierService = {
    getCouriers(page, search) {
        return API.get(`/couriers?page=${page}&q=${search}`);
    },

    getCourier(id) {
        return API.get(`/couriers/${id}`);
    },

    createCourier(payload) {
        return API.post(`/couriers`, payload, HEADERS);
    },

    updateCourier(id, payload) {
        // return API.put(`/couriers/${id}`, payload, HEADERS);
        // pakai post untuk handle updata formdata
        return API.post(`/couriers/${id}`, payload, HEADERS);
    },

    deleteCourier(id) {
        return API.delete(`/couriers/${id}`);
    },
};

export default CourierService;
