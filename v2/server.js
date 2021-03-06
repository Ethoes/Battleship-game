// // 2. Create Express server
// var app = express();
// // serve static files if available
// app.use(express.static(__dirname + "/client"));


// // 2. Create HTTP server and listen
// http.createServer(app).listen(3000, function() {
//     console.log("# Listening to port 3000...");
// });

// var express = require("express"), http = require("http"), app;

// app = express();
// http.createServer(app).listen(3000);

// app.get("/hello", function (req, res) {
//     res.send("hello World");
// });

// app.get("/", function (req, res) {
//     res.send();
//     });

var express = require("express"),
http = require("http"),
app = express();
var cookies = require("cookie-parser");

// set up a static file directory to use for default routing
// also see the note below about Windows
app.use(express.static(__dirname + "/"));

// Create our Express-powered HTTP server
http.createServer(app).listen(3000);
// set up our routes

// app.get("/", function (req, res) {
//     res.send(splash);
// });

// var htmlsht = splash.html;


app.use(function(req, res, next) {
    console.log('[LOG] %s\t%s\t%s\t%s', new Date().toISOString(), req.connection.remoteAddress,
        req.method, req.url);
    next(); // call on to next component
});

app.use(cookies("mysecret")); // this will encrypt cookies to avoid users tampering with them
app.use(function(req, res, next) {
    var userId = req.signedCookies.userId;
    if(userId === undefined) { // no cookie
        userId = ++usersCount;
        console.log("# Setting new cookie for user " + userId);
        res.cookie("userId", userId, {signed: true, httpOnly: true});
    }
    req.userId = parseInt(userId); // store the parsed userId for the next components
    next(); // call on the next component
});




app.get("/", function (req, res) {
res.sendFile("splash.html", {root: "./"});
});


app.get("/goodbye", function (req, res) {
res.send("Goodbye World!");
});

app.post("/splash.html", function (req, res) {
    console.log("data has been posted to the server!");
    // send back a simple object
    res.json({"message":"You posted to the server!"});
    });