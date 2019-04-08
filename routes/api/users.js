const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("../../server")

router.route("/login")
    .post(usersController.login);

router.route("/signup")
    .post(usersController.signup);

router.route("/logout")
    .post(usersController.logout);

router.route("/test")
    .get(usersController.test);

router.route("/update")
    .put(usersController.update);

router.route("/update")
    .put(usersController.update)


module.exports = router;