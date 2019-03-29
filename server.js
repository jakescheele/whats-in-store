// Require dependencies
const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes")
const app = express();

// Set up dependencies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve static assets
if (process.env.NODE_ENV === "production") {
 app.use(express.static("client/build"));
};

// Add routes
app.use(routes);

// Connect to mongo db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Listener
app.listen(PORT, function () {
    console.log(`API Server listening on PORT ${PORT}`)
});
