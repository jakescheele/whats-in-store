const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { type: String },
  subcategories: {
    type: Schema.Types.ObjectId,
    ref: "Subcategory"
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;