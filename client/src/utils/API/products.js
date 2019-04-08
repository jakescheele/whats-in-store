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
        console.log("Hello! I'm here in the utils!")
        let product = {
            name: productData.name,
            category: productData.category,
            // subcategory: productData.subcategory,
            image: productData.image,
            price: productData.price,
            description: productData.description,
            stock: productData.stock,
            flashSales: productData.flashSales, 
            totalStock: totalStock(productData)
        }
        // if product already exists, update
        if (productData.productid){
        console.log("Updating product!")
        console.log(product)

        return axios.put("/api/products/" + productData.productid, product);}
        // else create new product
        else{
        console.log("Creating product!")
        console.log(product)

        return axios.post("/api/products", product);

        }
    },
    
};


function totalStock(product) {
    var total = 0;

    if (product.hasOwnProperty("stock")) {
        for (let i in product.stock) {
            total += parseInt(product.stock[i].stock)
        }
    }


    return total;
}
