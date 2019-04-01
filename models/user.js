const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: {type: String, required: true },
  shopName: {type: String},
  products: [{
    type: Schema.Types.ObjectId,
    ref: "Product"
  }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;