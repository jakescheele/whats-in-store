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
    }
]

const productSeed = [
  { name: "T-Benz Elephant T-Shirt",
    category: "Clothing",
    subcategory: "T-Shirts",
    price: 35,
    stock: {
      "XS": 1,
      "S" : 2,
      "M" : 5,
      "L" : 8,
      "XL": 3,
      "XXL":1
    }
  },
  { name: "Entheos Logo T-Shirt",
    category: "Clothing",
    subcategory: "T-Shirts",
    price: 30,
    stock: {
      "XS": 2,
      "S" : 1,
      "M" : 2,
      "L" : 0,
      "XL": 1,
      "XXL":0
    }
  },
  { name: "Blue Papa Bear Hoodie",
    category: "Clothing",
    subcategory: "Hoodies",
    price: 70,
    stock: {
      "XS": 4,
      "S" : 4,
      "M" : 5,
      "L" : 3,
      "XL": 2,
      "XXL":0
    }
  }
]


db.Category
  .remove({})
  .then(() => {
      db.Category.collection.insertMany(categorySeed);
      db.Product.collection.insertMany(productSeed);
  })
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });