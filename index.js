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
var Interest = require('./mongo/Interest.js');

// Pages in website
app.use('/home', (req, res) => {
    Service.find((err, services) => {
        if (err) {
            res.type('html').status(500);
            res.send('Error: ' + err);
        } else if (services.length == 0) {
            res.type('html').status(200);
            res.send('There are no services');
        } else {
            // var set2 = new Set()
            // questions.forEach(function (question) {
            //     if (question.course == req.params.class) {
            //         set2.add(question)
            //     }
            // });
            services.forEach(s => {
                console.log(s.toString());
            });

            console.log(services.toString());

            res.render('home', {
                serviceList: services
            });
            // console.log(req.params.class);
            // res.render('questions', {
            //     questions: set2,
            //     course: req.params.class
            // });
        }
    });
});

app.use('/service', (req, res) => {
    res.render('service');
});

app.use('/newuser', (req, res) => {
    var body = req.body;

    var newUser = new User({
        firstName: body.firstname,
        lastName: body.lastname,
        email: body.email,
        phoneNumber: body.phonenumber,
    });

    newUser.save(function (err) {
        if (err) {
            res.render('error');
        } else {
            res.render('service');
        }
    });
});

app.use('/newservice', (req, res) => {
    var body = req.body;

    var newService = new Service({
        keywords: body.keywords.split(" "),
        description: body.description,
        rate: body.rate,
    });

    newService.save(function (err) {
        if (err) {
            res.render('error');
        } else {
            res.render('service');
        }
    });
});

app.use('/newtransaction', (req, res) => {
    var body = req.body;

    var newInterest = new Interest({
        email: body.email,
        activity: 'TESTING'
    });

    newInterest.save(function (err) {
        if (err) {
            res.render('error');
        } else {
            res.render('home');
        }
    });
});


// app.use('/home', (req, res) => {
//     var body = req.body;

//     console.log(body.username);

//     // User.findOne({
//     //     name: body.username,
//     //     password: body.password
//     // }, (err, foundAdmin) => {
//     //     if (err) {
//     //         res.render('error');
//     //     }

//     //     if (foundAdmin) {
//     //         admin = foundAdmin;
//     //         res.render('viewclasses', {
//     //             admin: foundAdmin
//     //         });
//     //     } else {
//     //         res.render('admin_not_found');
//     //     }
//     // });
// });

// setting up port
app.listen(3000, () =>
    console.log(`Example app listening on port 3000!`))