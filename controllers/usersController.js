const db = require("../models");
const parser = require("../cloudinary")

// Defining methods for the usersController
module.exports = {
    // signup: function (req, res) {
    //     db.User
    //         .create(req.body)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    // login: function (req, res) {
    //     db.User
    //         .findById(req.body.id)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    // logout: function (req, res) {
    //     db.User
    // },


    parseImage: parser.single("image"),
    update: function (req, res) {
        const user = {
            ...req.body,
            shopLogo: req.file.url,
            logo_id: req.file.public_id
          };
        db.User
            .findOneAndUpdate({ _id: req.params.id }, user)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}