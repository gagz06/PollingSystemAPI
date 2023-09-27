const mongoose = require("mongoose");
require("dotenv").config();

//cloud
//mongoose.connect(process.env.MONGODB_CONNECT_URI);

//local
mongoose.connect("mongodb://0.0.0.0/polling_system");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to db"));

db.once("open", function () {
  console.log("Connected to MongoDB");
});
module.exports = db;
