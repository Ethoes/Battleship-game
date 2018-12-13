var express = require("express");
var http = require("http");
var websocket = require("ws");

var port = process.argv[2];
var app = express();

var cookies = require("cookie-parser"); //////////////////////
app.use(cookies("my_secret_abc_123"));

app.use(express.static(__dirname + "/public"));

var server = http.createServer(app);
const wss = new websocket.Server({ server })

var Messages = require("./public/javascripts/messages.js");

var gameStats = {
  // since : Date.now(),     /* since we keep it simple and in-memory, keep track of when this object was created */
  shotsfired : 0,   /* number of games initialized */
  playersonline : 0,       /* number of games aborted */
  gamesInitialized: 0      /* number of games successfully completed */
};

var Game = require("./gamestate");

var websockets = {};
var currentGame = new Game(gameStats.gamesInitialized++);
var connectionID = 0;
var messageAField;




wss.on("connection", function connection(ws) {


  let con = ws; 
  con.id = connectionID++;

  // console.log("cookie " + con.cookie);
  // res.cookie("signed_chocolate", "monster", { signed: true });
  // con.cookies("cookies for game", "sup bot", { signed: true});
  
  let playerType = currentGame.addPlayer(con);
  console.log(currentGame.gameState);
  console.log("playertype " + playerType);
  
  currentGame.setState(playerType);
  
  
  websockets[con.id] = currentGame;
    
  console.log("Player %s placed in game %s as %s", con.id, currentGame.id, playerType);

  // console.log(currentGame.playerA);
    
  let gameObj = websockets[con.id];

  if (currentGame.hasTwoConnectedPlayers()) {
    
    var Outmail = Messages.O_Shot;
    Outmail.data = 50;
    
    gameObj.playerB.send(JSON.stringify(Outmail));
  

    console.log("sending shot to player 3");

      currentGame = new Game(gameStats.gamesInitialized++);
  }
  
  con.on("message", function incoming(message) {
  
    let oMsg = JSON.parse(message);
 
  

    console.log("getting message " + message);

    // con.send("supder");

    gameStats.playersonline++;
    let isPlayerA = (gameObj.playerA == con) ? true : false;
    // console.log(gameObj.playerA == con);
    
    if (isPlayerA) {
            /*
             * player A cannot do a lot, just send the target word;
             * if player B is already available, send message to B
             */
      if (oMsg.type === Messages.T_Set_Field) {
        // console.log("this is the fucking problem");

        gameObj.setplayerAfield(oMsg.data);
        messageAField = message;
       

      }
                
        if(oMsg.type == Messages.T_Shot){
          gameStats.shotsfired++;
          gameObj.playerB.send(message);
        }
        
        if( oMsg.type == Messages.T_GAME_WON_BY){
          gameObj.setStatus(oMsg.data);
          //game was won by somebody, update statistics
          gameStatus.gamesCompleted++;
        }  
      
    }
      else {
      
        if (oMsg.type == Messages.T_Set_Field) { 
         
          gameObj.setplayerBfield(oMsg.data);
          if(gameObj.hasTwoConnectedPlayers()){
          
            gameObj.playerA.send(message); 
            

            gameObj.playerB.send(messageAField);
          }                
        }
            /*
             * player B can make a guess; 
             * this guess is forwarded to A
             */ 
            if(oMsg.type == Messages.T_Shot){
              gameStats.shotsfired++;
              // console.log("sending shot from B to A")
                gameObj.playerA.send(message);
            }
            /*
             * player B can state who won/lost
             */ 
            if( oMsg.type == Messages.T_GAME_WON_BY){
                gameObj.setStatus(oMsg.data);
                //game was won by somebody, update statistics
               
                gameStats.playersonline--;
                
            }            
        }
    });
  
})




app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    //example of data to render; here gameStatus is an object holding this information
    res.render('splash.ejs', { shotsfired: gameStats.shotsfired, players: gameStats.playersonline, games: (gameStats.gamesInitialized - 1) });
})



  app.get("/setup", function (req, res) {
  
    res.sendFile("setup.html", {root: "./public"});
    
    });

    app.get("/game", function (req, res) {
      res.sendFile("game.html", {root: "./public"});
      
      });


     



server.listen(port);


