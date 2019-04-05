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
    console.log(req.user)
    const product = {
      name:req.body.name,
      category:req.body.category,
      price:req.body.price
      // img: req.file.url,
      // img_id: req.file.public_id
    };
    console.log("creating")
    db.Product
      .create(product
      ,(err,dbProduct) => console.log(dbProduct), db.User.findOneAndUpdate({_id:req.user.id}, { $push: { products: dbProduct._id } }, { new: true }))
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
  },
  addProduct:function(product,done){
    db.Category.find({name:product.category},
        function(err,Cat){
          console.log(err);
            if(err)done(err)
            else if(Cat){
                db.subCategory.find({name:product.subCategory},function(err,sub){
                  if(err)throw err;
                  else if(sub){
                    db.Product.insertOne(product,inserted=>done(inserted))
                  }
                  else{
                    db.Subcategory.create({
                      name:product.subCategory,
                      Category:Cat["_id"]
                    },(err,datt)=>{
                      if(err)throw err;
                      product.subCategory=datt["_id"]
                      product.category=Cat["_id"]
                      db.Product.insertOne(product,inserted=>done(inserted))
                    })
                  }
                })
                
            }
            else{
                db.Category.create({
                  name:product.Category,
                },function(err,cata){
                  if(err)throw err;
                  db.Subcategory.create({
                    name:product.subCategory,
                    Category:cata["_id"]
                  },(err,datt)=>{
                    if(err)throw err;
                    product.subCategory=datt["_id"]
                    product.category=cata["_id"]
                    db.Product.insertOne(product,inserted=>done(inserted))
                  })
                })
            }
        })
  },
};
