const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const swipesRouter = require('./routes/swipes_route');
const usersRouter = require('./routes/users');

const { DBURL } = process.env;
mongoose.Promise = Promise;
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log(`Connected to Mongo on ${DBURL}`)
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/swipes/:id', swipesRouter);
app.use('/user/:id', usersRouter);

module.exports = app;
