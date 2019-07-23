// Importing packages
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/views', express.static('views'));

var http = require('http');

// Window configuration for jquery
var jsdom = require("jsdom");
const {
    JSDOM
} = jsdom;
const {
    window
} = new JSDOM();
const {
    document
} = (new JSDOM('')).window;
global.document = document;
global.window = window;
var $ = require("jquery");

// Directing to mongo schemas
var User = require('./mongo/User.js');
var Service = require('./mongo/Service.js');
var Payment = require('./mongo/Payment.js');

// Pages in website
app.use('/home', (req, res) => {
    var body = req.body;

    console.log(body.username);

    // User.findOne({
    //     name: body.username,
    //     password: body.password
    // }, (err, foundAdmin) => {
    //     if (err) {
    //         res.render('error');
    //     }

    //     if (foundAdmin) {
    //         admin = foundAdmin;
    //         res.render('viewclasses', {
    //             admin: foundAdmin
    //         });
    //     } else {
    //         res.render('admin_not_found');
    //     }
    // });
});

// setting up port
app.listen(3000, () =>
    console.log(`Example app listening on port 3000!`))