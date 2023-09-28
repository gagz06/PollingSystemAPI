// Import the Express.js framework
const express = require('express');

// Import the Mongoose database connection from './config/mongoose'
const db = require('./config/mongoose');

// Create an Express application
const app = express();

// Define the port to listen on
const port = 8000;

// Middleware: Parse incoming request bodies
app.use(express.urlencoded());

// Middleware: Mount routes from './routes' for handling incoming requests
app.use('/', require('./routes'));

// Start the server and listen on the specified port
app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server running on port => ${port}`);
});
