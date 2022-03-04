import API from "../utils/api";

const ProductService = {
    getProducts(page, search) {
        return API.get(`/products?page=${page}&q=${search}`);
    },

    getProduct(id) {
        return API.get(`/products/${id}`);
    },

    createProduct(payload) {
        return API.post(`/products`, payload);
    },

    updateProduct(id, payload) {
        return API.put(`/products/${id}`, payload);
    },

    deleteProduct(id) {
        return API.delete(`/products/${id}`);
    },
};

export default ProductService;
