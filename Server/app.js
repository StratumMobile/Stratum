var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var swipesRouter = require('./routes/swipes_route');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/swipes/:id', swipesRouter);
app.use('/login/:id', usersRouter);

module.exports = app;
