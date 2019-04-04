const db = require("../models");
const parser = require("../cloudinary")

// Defining methods for the productsController
module.exports = {
  findAll: function (req, res) {
    db.User.find({ "_id": req.user._id })
      .populate("products")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(422, err))
  },
  findById: function (req, res) {
    db.Product
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(422, err))
  },
  
  parseImage: parser.single("image"),
  
  create: function (req, res) {
    const product = {
      ...req.body,
      // img: req.file.url,
      // img_id: req.file.public_id
    };
    console.log(product)
    console.log(req.user)
    db.Product
      .create(product)
      .then(dbProduct => db.User.findOneAndUpdate({ _id: req.user._id }, { $push: { products: dbProduct._id } }, { new: true }))
      .then(dbUser => res.json(dbUser))
      .catch(err => res.json(422, err))
  },

  update: function (req, res) {
    db.Product
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(422, err))
  },

  remove: function (req, res) {
    db.Product
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(422, err))
  }
};
