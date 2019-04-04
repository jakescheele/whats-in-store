const router = require("express").Router();
const productRoutes = require("./products");
const categoryRoutes = require("./categories");
const userRoutes = require("./users");
// const subcategoryRoutes = require("./subcategories");

router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);
router.use("/users", userRoutes)

module.exports = router;
