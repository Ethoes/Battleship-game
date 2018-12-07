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

// set up a static file directory to use for default routing
// also see the note below about Windows
app.use(express.static(__dirname + "/"));

// Create our Express-powered HTTP server
http.createServer(app).listen(3000);
// set up our routes

// app.get("/", function (req, res) {
//     res.send(splash);
// });

app.get("/hello", function (req, res) {
res.send("Hello World!");
});


app.get("/goodbye", function (req, res) {
res.send("Goodbye World!");
});

app.post("/splash.html", function (req, res) {
    console.log("data has been posted to the server!");
    // send back a simple object
    res.json({"message":"You posted to the server!"});
    });