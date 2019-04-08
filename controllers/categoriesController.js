const db = require("../models");

// Defining methods for the categoriesController
module.exports = {
  findAll: function (req, res) {
    db.User
      .findOne({_id: req.user._id})
      .populate("categories")
      .then(user => res.json(user.categories))
      .catch(err => res.status(422, err)) 
  },
  findById: function (req, res) {
    db.Category
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422, err));
  },
  create: function (req, res) {
    console.log("here",req.body)
    db.Category
      .create(req.body).then(dbModel =>{
        db.User.findOneAndUpdate({_id:req.user._id},{$push:{categories:dbModel._id}})
        .then(data=>{
          res.json(data)
        }).catch(err=>res.status(500,err))
      }).catch(err=>res.status(500,err))
  },
  update: function (req, res) {
    console.log(req.body)
    db.Category
      .findOneAndUpdate({ _id: req.body.id },{name:req.body.name})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Category
      .findByIdAndRemove(req.params.id)
      // .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createSub:function(req,res){
    console.log("\n\n\n =========================")
    console.log(req.body)
    db.Category.findOneAndUpdate({_id:req.body.id},{$push:{subcategories:req.body.name}})
    .then(dbModel=>res.json(dbModel)).catch(err=>res.json(err))
  },
  deleteSub:function(req,res){
    console.log(req.body)
    db.Category.findOneAndUpdate({_id:req.body.id},{$pull:{subcategories:req.body.name}})
    .then(dbModel=>res.json(dbModel)).catch(err=>res.json(err))
  },
  updateSub: function (req, res) {
    console.log(req.body)
    db.Category
      .findOneAndUpdate({_id:req.body.id},{$pull:{subcategories:req.body.from}})
      .then(function(data){
        res.json(data)
        db.Category.findOneAndUpdate({_id:req.body.id},{$push:{subcategories:req.body.name}})
          .then(dbModel=>res.json(dbModel)).catch(err=>res.json(err))
      }).catch(err => res.status(422).json(err));
  },


  updateCat: function (req, res) {
    console.log(req.body)
      db.Category
      .findOneAndUpdate({ _id: req.body._id }, {$set:{...req.body}})
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  },
};
