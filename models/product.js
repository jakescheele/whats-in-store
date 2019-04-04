const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const productSchema = new Schema({
  name: { type: String, required: true },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  },
  subcategory: { type: String },
  img: { type: String },
  img_id: {type: String},
  price: { type: Number, required: true },
  description: { type: String },
  stock: { type: Array },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;