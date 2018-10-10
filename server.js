/*****************************************************************************
*  WEB322 – Assignment2 
*  I declare that this assignment is my own work in accordance with Seneca 
*  Academic Policy. No part of this assignment has been copied manually or 
*  electronically from any other source (including web sites) or distributed 
*  to other students. 
*  
*  Name:         Kenneth Yue 
*  Student ID:   1227932176 
*  Date:         September 25, 2018 
* 
*  Online (Heroku) URL: https://shrouded-badlands-69336.herokuapp.com/
* 
*****************************************************************************/  

var service = require('./data-service.js')
var express = require("express");
var app = express();
var path = require("path");
var HTTP_PORT = process.env.PORT || 8080;

// for css
app.use(express.static('public'));

// setting up default route
app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname,"/views/home.html"));
});

// setting up route for /about
app.get("/about", function(req,res) {
    res.sendFile(path.join(__dirname,"/views/about.html"));
});

// route for /employees
app.get("/employees", function(req,res) {
    service.getAllEmployees()
    .then(function(value) {
        res.json(value);
    })
    .catch(function(err) {
        res.json({message: err});
    });
    
});

// route for /managers
app.get("/managers", function(req,res) {
    service.getManagers()
    .then(function(value) {
        res.json(value);
    })
    .catch(function(err) {
        res.json({message: err});
    });
});

// route for /departments
app.get("/departments", function(req,res) {
    service.getDepartments()
    .then(function(value) {
        res.json(value);
    })
    .catch(function(err) {
        res.json({message: err});
    });
});

// setting up route for /employees/add
app.get("/employees/add", function(req,res) {
    res.sendFile(path.join(__dirname,"/views/addEmployee.html"));
});

// setting up route for /images/add
app.get("/images/add", function(req,res) {
    res.sendFile(path.join(__dirname,"/views/addImage.html"));
});

// 404 message
app.use(function(req,res,next) {
    res.status(404).send('404: Page not found');
});

// setup listen
service.initialize()
.then(function(msg) {
    console.log(msg);
    app.listen(HTTP_PORT);
})
.catch(function(err) {
    console.log(err);
});
