import axios from "axios";

export default {
    // PRODUCTS
    // Gets all products
    getProducts: function () {
        return axios.get("/api/products");
    },
    // Gets the product with the given id
    getProduct: function (id) {
        return axios.get("/api/products/" + id);
    },
    // Deletes the product with the given id
    deleteProduct: function (id) {
        return axios.delete("/api/products/" + id);
    },
    // Saves a product to the database
    saveProduct: function (productData) {
        // if product already exists, update
        if (productData._id)
        return axios.put("/api/products/" + productData._id, productData);
        // else create new product
        else
        return axios.post("/api/products", productData);
    }
};
