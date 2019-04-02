const router = require("express").Router();
const productRoutes = require("./products");
const categoryRoutes = require("./categories");
// const subcategoryRoutes = require("./subcategories");

router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);

module.exports = router;
