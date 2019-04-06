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
        // let product = {
        //     name: productData.name,
        //     category: productData.category,
        //     // subcategory: productData.subcategory,
        //     // image: productData.image,
        //     price: productData.price,
        //     description: productData.description,
        //     stock: productData.stock
        // }
        // if product already exists, update
        if (productData.productid){
        console.log("Updating product!")
        return axios.put("/api/products/" + productData.productid, productData);}
        // else create new product
        else{
        console.log("Creating product!")
        return axios.post("/api/products", productData);


        }
    },
    
};
