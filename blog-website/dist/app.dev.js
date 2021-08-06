"use strict";

var express = require('express');

var path = require('path');

var app = express();
var router = express.Router(); //app configuration

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use('/resources', express["static"](path.join(__dirname, 'resources')));
app.get('/', function (req, res) {
  res.render('home', {
    title: 'Home'
  });
});
app.listen(3000, function () {
  console.log('Express Server is running...');
});