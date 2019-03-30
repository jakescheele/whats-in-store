const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  },
  subcategory: {
    type: Schema.Types.ObjectId,
    ref: "Subcategory"
  },
  price: { type: Number, required: true },
  description: { type: String },
  stock: { type: Array },
});

const User = mongoose.model("User", userSchema);

module.exports = User;