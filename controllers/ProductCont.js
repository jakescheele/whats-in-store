var db = require("../models")
module.exports={
    addProduct:function(product,done){
        db.Category.find({name:product.Category},
            function(err,data){
                if(err)done(err)
                else if(data){
                    db.Product.insertOne(product)
                    .then(data=>done(data))
                }
                else{
                    
                }
            })
    },
    findById: function (query, done) {
        db.Category
          .findById({name:query})
          .then(dbModel => done(dbModel))
          .catch(err => res.status(422).json(err));
      },



}