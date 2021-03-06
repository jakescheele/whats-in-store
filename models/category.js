const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: { type: String },
  subcategories: [{
    type: String
  }],
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;