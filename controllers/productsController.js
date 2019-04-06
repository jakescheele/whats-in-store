const db = require("../models");
const cloudinary = require("cloudinary");
require("dotenv").config()

cloudinary.config({ 
  cloud_name: process.env.REACT_APP_CLOUD_NAME, 
  api_key: process.env.REACT_APP_API_KEY, 
  api_secret: process.env.REACT_APP_API_SECRET
})

// Defining methods for the productsController
module.exports = {
  findAll: function (req, res) {
    db.User.findOne({ _id: req.user._id })
      .populate("products")
      .then(dbModel => res.json(dbModel.products))
      .catch(err => res.json(422, err))
  },

  findById: function (req, res) {
    db.Product
      .findById(req.params.id)
      .populate("category")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(422, err))
  },

  uploadImage: function (req, res) {
    const values = Object.values(req.files)
    const promises = values.map(image => cloudinary.uploader.upload(image.path))
    Promise
      .all(promises)
      .then(results => res.json(results))
  },

  create: function (req, res) {
    // if photo has been uploaded
    // if (req.file) {
      const product = {
        name: req.body.name,
        category: req.body.category,
        // subcategory: req.body.subcategory,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
        stock: req.body.stock,
        flashSales: req.body.flashSales

      };
      console.log("==============hit the post route==========")
      console.log(product)
      console.log(req.user)
      db.Product
        .create(product)
        .then(dbProduct => db.User.findOneAndUpdate({ _id: req.user._id }, { $push: { products: dbProduct._id } }, { new: true }))
        .then(dbUser => res.json(dbUser))
        .catch(err => res.json(422, err))
    // }
  },

  update: function (req, res) {
    console.log("==============hit the put route==========")
    console.log(req.body)
    db.Product
      .findOneAndUpdate({ _id: req.params.id }, {$set:{...req.body}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(422, err))
  },
  
  remove: function (req, res) {
    db.Product
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(422, err))
  },
  lowToHigh:function(req,res){
    db.User.findOne({ _id: req.user._id })
      .populate("products").sort({price:1}).exec(function(err,data){
      console.log(data)
      res.json(data)
    })
  },
  highToLow:function(req,res){
    db.User.findOne({ _id: req.user._id })
    .populate("products").sort({price:-1}).exec(function(err,data){
        console.log(data)
        res.json(data)
      })
  },
  stockLowToHigh:function(req,res){
    db.User.findOne({ _id: req.user._id })
      .populate("products").sort({stock:1}).exec(function(err,data){
      console.log(data)
      res.json(data)
    })
  },
  stockHighToLow:function(req,res){
    db.User.findOne({ _id: req.user._id })
    .populate("products").sort({stock:-1}).exec(function(err,data){
        console.log(data)
        res.json(data)
      })
  },
  az:function(req,res){
    db.User.findOne({ _id: req.user._id })
      .populate("products").sort({name:1}).exec(function(err,data){
      console.log(data)
      res.json(data)
    })
  },
  za:function(req,res){
    db.User.findOne({ _id: req.user._id })
      .populate("products").sort({name:-1}).exec(function(err,data){
      console.log(data)
      res.json(data)
    })
  }
  
};
