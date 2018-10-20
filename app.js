const express = require('express');
const bodyParser = require('body-parser');
const cupon = require('./routes/cupon.route');
const mongoose = require('mongoose');

// Database connection
let dev_db_url = 'mongodb://root:root123@ds135233.mlab.com:35233/cupones';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// initialize express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/cupones', cupon);

app.listen(process.env.PORT || 3001, () => {
    console.log('Server is up and running on port numner ' + port);
});