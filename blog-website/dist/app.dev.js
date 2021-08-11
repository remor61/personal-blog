"use strict";

var express = require('express');

var path = require('path'); //debug stuff


var chalk = require('chalk');

var debug = require('debug')('app');

var morgan = require('morgan');

var app = express();
var newPostRouter = express.Router();
newPostRouter.route('/').get(function (req, res) {
  res.render('createNewPost', {
    title: 'Create New Post'
  });
}); //app configuration

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use('/resources', express["static"](path.join(__dirname, 'resources')));
app.use('/createNewPost', newPostRouter);
app.get('/', function (req, res) {
  res.render('home', {
    title: 'Home'
  });
});
app.listen(3000, function () {
  console.log('Express Server is running...');
});