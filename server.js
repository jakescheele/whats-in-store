// Require dependencies
const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes")

const app = express();

// Serve static assets
if (process.env.NODE_ENV === "production") {
 app.use(express.static("client/build"));
};
// Set up dependencies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret:"secretSauce",
  saveUninitialized:false,
  resave:false
}))
app.use(passport.initialize())
app.use(passport.session());

// Add routes
app.use(routes);
const passportRote = require("./routes/auth")(passport);
require("./passport")(passport);
app.use('/auth', passportRote);

// Connect to mongo db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/reactreadinglist");

// Listener
app.listen(PORT, function () {
    console.log(`API Server listening on PORT ${PORT}`)
});
