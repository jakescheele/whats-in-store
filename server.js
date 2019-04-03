const express = require('express');
const mongoose = require('mongoose');
var logger = require("morgan");
const passport=require("passport");
const session=require("express-session");
const cookieParser=require("cookie-parser");
const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const PORT= process.env.PORT || 3000;
const app = express();
// Set up dependencies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
// Serve static assets
if (process.env.NODE_ENV === "production") {
 app.use(express.static("client/build"));
};
//mongoo stuff
app.use(logger("dev"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/project3",{ useNewUrlParser: true });
mongoose.connection.once("open",function(){
  console.log("conneciton has been made")
}).on("error",function(err){
  console.log("connection error: \n",err)
});

app.use(session({
  secret:"secretSauce",
  saveUninitialized:false,
  resave:false
}))
app.use(passport.initialize())
app.use(passport.session());

// Add routes
// app.use(routes);
const passportRote = require("./routes/auth")(passport);
require("./passport")(passport);
app.use('/auth', passportRote);

// Listener
app.listen(PORT, function () {
    console.log(`API Server listening on PORT ${PORT}`)
});
