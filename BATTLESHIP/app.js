var express = require("express");
var http = require("http");
var websocket = require("ws");

var port = process.argv[2];
var app = express();

app.use(express.static(__dirname + "/public"));

var server = http.createServer(app);
const wss = new websocket.Server({ server });<<<<<<< HEAD
=======




app.get("/", function (req, res) {
  res.sendFile("splash.html", {root: "./public"});
  });

  var Game = require("./game"s = {};
var currentGame = new Game(gameStats.gamesInitialized++);
var connectionID = 0;
, 
fu
wss.on("connection");

  var websockets = {};

  var currentGame = new Game(gameStats.gamesInitialized++);
  var connectionID = 0;


  // var game = function (gameID) {
  //   this.playerA = null;
  //   this.playerB = null;
  //   this.id = gameID;
  //   this.playerAhits = 0;
  //   this.playerBhits = 0;
  //   this.playerAField ={};
  //   this.playerBField = {};
  // }


  var gameStats = {
    since : Date.now(),     /* since we keep it simple and in-memory, keep track of when this object was created */
    shotsfired : 0,   /* number of games initialized */
    playersonline : 0,       /* number of games aborted */
    gamesCompleted : 0      /* number of games successfully completed */
};



server.listen(port);








// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

