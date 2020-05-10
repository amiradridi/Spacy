require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const passport = require("passport");
var cors = require('cors');

var usersRouter = require('./routes/auth');
var postRouter = require('./routes/post');

mongoose.connect(process.env.MongoURL ,{ useNewUrlParser: true ,useUnifiedTopology: true } )
.then(() => {
  console.log("connected to the database")
})
.catch((err) => {
  console.log("Connection failed");
})

var app = express();

app.use(cors())



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
require("./middlewares/jwt")(passport);

app.use('/users', usersRouter);
app.use('/post', postRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
