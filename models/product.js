const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
  name: { type: String, required: true },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  },
  subcategory: { type: String },
  image: { type: Object },
  price: { type: String, required: true },
  description: { type: String },
  stock: { type: Array },
  totalStock:{ type: Number},
  flashSales: {type: Object}

});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;

// flashSales: {
// 	checked	boolean
// 	starttime	date
// 	endtime	date
// 	price	number
// }