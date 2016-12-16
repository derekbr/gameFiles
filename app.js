
require('dotenv').load();

var express = require('express');
var bodyParser=require('body-parser');
var engine = require('ejs-mate');
var session = require('express-session');
var pgp = require('pg-promise')();

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + 'public'))

var routes = require('./routes/index');
var scoreboard = require('./routes/scoreboard');
app.use('/', routes);
app.use('/scoreboard', scoreboard);


//error handling
app.use(function(req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

//error handling
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

//listen to port
app.listen(process.env.PORT, function () {
  console.log('Express app listening on port 3000');
});