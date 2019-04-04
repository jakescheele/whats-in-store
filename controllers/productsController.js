const db = require("../models");
const parser = require("../cloudinary")

// Defining methods for the productsController
module.exports = {
  findAll: function (req, res) {
    db.User.find({ "_id": req.user._id})
      .populate("products")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Product
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  parseImage: parser.single("image"),
  create: function (req, res) {
    // if photo has been uploaded
    if (req.file) {
    const product = {
      ...req.body,
      img: req.file.url,
      img_id: req.file.public_id
    }}
    else const product = req.body

    db.Product
      .create(product)
      .then(dbProduct =>  db.User.findOneAndUpdate({_id:req.user._id}, { $push: { products: dbProduct._id } }, { new: true }))
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Product
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Product
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
