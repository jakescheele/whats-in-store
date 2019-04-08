const router = require("express").Router();
const categoriesController = require("../../controllers/categoriesController");

// Matches with "/api/categories"
router.route("/")
    .get(categoriesController.findAll)
    .post(categoriesController.create)
// Matches with "/api/category/:id"
router.route("/:id")
.get(categoriesController.findById);
//matches with assgined route
router.route("/update").post(categoriesController.update)
router.route("/create").post(categoriesController.create)
router.route("/delete").post(categoriesController.remove)
router.route("/createsub").post(categoriesController.createSub)
router.route("/deletesub").post(categoriesController.deleteSub)
router.route("/updatesub").post(categoriesController.updateSub)

module.exports = router;

// New subcategory
// POST "/api/subcategory"

// Update subcategory
// PUT "/api/subcategory/:id"

// Delete subcategory
// DELETE "api/subcategory/:id"