const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/whats-in-store"
);

const categorySeed = {
    
}

const subcategorySeed = {

}

db.Book
  .remove({})
  .then(() => {
      db.Category.collection.insertMany(categorySeed);
      db.Subcategory.collection.insertMany(subcategorySeed);
  })
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });