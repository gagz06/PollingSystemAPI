const express = require('express');
const db = require('./config/mongoose');
const app = express();

const port = 8000;

app.use('/', require('./routes'));

app.listen(port,function(err){
if (err) {
    console.log(`Error in running the server: ${err}`);
}
console.log(`Server running on port => ${port}`);
});
