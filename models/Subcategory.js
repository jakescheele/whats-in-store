const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subcategorySchema = new Schema({
  name: { type: String },
  Category:{ type: String}
});

const Subcategory = mongoose.model("Subcategory", subcategorySchema);

module.exports = Subcategory;