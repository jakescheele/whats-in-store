// Dependencies
var express = require("express");
var mongoose = require("mongoose");
var routes = require("./routes");

var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/whats-in-store");

// Routes
app.use(routes);


// Listener
app.listen(PORT, function() {
    console.log("Server listening on port " + PORT);
  });
  