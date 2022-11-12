// require mongoose library
const mongoose = require('mongoose');
// connect to database
mongoose.connect('mongodb://localhost/todo_list_db');
// acquire the connection ( if databse is connected or not)
const db = mongoose.connection;
// error if somthing goes wrong with database connection
db.on('error', console.error.bind(console, 'error connecting to db'));
// database connection is established
db.once('open', function () {
    console.log('Success fully connected to the database')
})