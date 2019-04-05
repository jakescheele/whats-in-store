const mongoose = require("mongoose");
var bcrypt=require("bcrypt");
let Schema = mongoose.Schema;

let userSchema = new Schema({
  email: { type: String, required: true, unique:true},
  password: { type: String, required: true },
  description: {type: String, required: true },
  shopName: {type: String},
  shopLogo: {type: String},
  logo_id: {type: String,},
  products: [{
    type: Schema.Types.ObjectId,
    ref: "Products"
  }],
  categories:[{
    type:[String],
    ref:'Category'
  }]
});
userSchema.methods.hashPassword=password=>{
  return bcrypt.hashSync(password,bcrypt.genSaltSync(10))
}
userSchema.methods.comparePassword=(password,hash)=>{
  return bcrypt.compareSync(password,hash)
}

let User = mongoose.model("User", userSchema);

module.exports = User;