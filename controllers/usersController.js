const db = require("../models");
const cloudinary = require("cloudinary");

cloudinary.config({
    cloud_name: process.env.REACT_APP_CLOUD_NAME,
    api_key: process.env.REACT_APP_API_KEY,
    api_secret: process.env.REACT_APP_API_SECRET
})

// only update & upload is  used, the rest is currently in auth.js
// passport is not defined

// Defining methods for the usersController
module.exports = {

    signup: function (req, res) {
        let user = new User();
        req.body.password = user.hashPassword(req.body.password)
        db.User.create(req.body, (err, data) => {
            if (err && err.code === 11000) {
                res.send("Email already taken")
            }
            else {
                res.send("Login succesful!")
                db.Category.create({ name: "Misc." })
                    .then(dbCategory => User.findOneAndUpdate({ _id: data._id }, { $push: { categories: dbCategory._id } }))
                    .catch(err => res.json(422, err));
            }
        })
    },

    login: function (req, res) {
        passport.authenticate('local', (err, user, info) => {
            if (err) { return next(err); }
            if (user) {
                req.login(user, (err) => {
                    if (err) { return next(err); }
                    res.json({ success: req.user ? "Yes" : "No", user: req.user });
                });
            }
            else { res.json("Server Error"); }
        })(req, res, next);
    },

    logout: function (req, res) {
        req.logout();
        res.json({ success: (req.user ? "No" : "Yes") })
    },

    test: function (req, res) {
        if (req.user)
            res.json({ shopName: req.user.shopName, email: req.user.email, description: req.user.description });
        else
            res.json("Not logged in!")
    },

    update: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.user._id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    uploadImage: function (req, res) {
        const values = Object.values(req.files)
        const promises = values.map(image => cloudinary.uploader.upload(image.path))
        Promise
            .all(promises)
            .then(results => res.json(results))
    },

}