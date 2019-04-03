const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Categories collection and inserts the categories below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/whats-in-store"
);

const categorySeed = [
    { name: 'Clothing',
      subcategories: ["T-Shirts", "Hoodies", "Shorts", "Hats"]
    },
    { name: 'Accessories',
      subcategories: ["Pendants", "Masks", "Pashminas"]
    }
]

const productSeed = [
  { name: ""

  }
]


db.Category
  .remove({})
  .then(() => {
      db.Category.collection.insertMany(categorySeed);
  })
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });