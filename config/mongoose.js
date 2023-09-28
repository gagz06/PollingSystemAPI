// Import the Mongoose library for MongoDB interaction
const mongoose = require("mongoose");

// Load environment variables from a .env file
require("dotenv").config();

// Connect to the MongoDB database using the URI from the environment variables
// You should have a MONGODB_CONNECT_URI variable defined in your .env file
mongoose.connect(process.env.MONGODB_CONNECT_URI);

// If you're using a local MongoDB server, you can uncomment this line and provide the appropriate URI
// mongoose.connect("mongodb://0.0.0.0/polling_system");

// Get a reference to the MongoDB connection object
const db = mongoose.connection;

// Listen for errors during the connection process
db.on("error", console.error.bind(console, "Error connecting to db"));

// Once the connection is open, log a success message
db.once("open", function () {
  console.log("Connected to MongoDB");
});

// Export the db object for use in other parts of your application
module.exports = db;
