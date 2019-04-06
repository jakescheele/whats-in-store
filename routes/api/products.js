const router = require("express").Router();
const productsController = require("../../controllers/productsController");

// Matches with "/api/products"
router.route("/")
    .get(productsController.findAll)
    .post(productsController.create);
    
// Matches with "/api/products/:id"
router.route("/:id")
    .get(productsController.findById)
    .put(productsController.update)
    .delete(productsController.remove);


// Matches with "/api/products/uploadImage"
router.route("/uploadImage")
    .post(productsController.uploadImage)

router.route("/filter/lth").get(productsController.lowToHigh)
router.route("/filter/htl").get(productsController.highToLow)
router.route("/filter/shtl").get(productsController.stockHighToLow)
router.route("/filter/slth").get(productsController.stockLowToHigh)
router.route("/filter/az").get(productsController.az)
router.route("/filter/za").get(productsController.za)


module.exports = router;