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

// global controller
app.get('/*',function(req,res,next){
    
    if (!req.header('bonita-token') || (req.header('bonita-token') !== 'B0N!T4T0K3N')) {
        return res.status(403).send('Acceso denegado');
    }
    next();
});

app.use('/cupones', cupon);

let port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});