var game = function (gameID) {
    this.playerA = null;
    this.playerB = null;
    this.id = gameID;
    this.playerAhits = {};
    this.playerBhits = {};
    this.playerAField ={};
    this.playerBField = {};
    this.gameState = "0 JOINT";
  }

  game.prototype.setState = function(state) {
      this.gameState = state;
  }


  game.prototype.setplayerAfield = function(ships = {}) {
    this.playerAField = ships;
  }

  game.prototype.setplayerBfield = function(ships = {}) {
    this.playerBField = ships;
  }

  game.prototype.getplayerAField = function(){
      return this.playerAField;
  }

  game.prototype.getplayerBField = function(){
    return this.playerBField;
}
  game.prototype.playerAgotAHit = function(gridspot){
    if( this.playerBField.includes(gridspot) ){
        if(!this.playerAhits.includes(gridspot))
            this.playerAhits.push(gridspot);
    }
  }

  game.prototype.playerBgotAHit = function(gridspot){
    if( this.playerAField.includes(gridspot) ){
        if(!this.playerBhits.includes(gridspot))
            this.playerBhits.push(gridspot);
    }
  }



  game.prototype.hasTwoConnectedPlayers = function () {
    return (this.gameState == "2 JOINT");
};

  game.prototype.addPlayer = function (p) {

    // if(this.gameState != "0 JOINT" && this.gameState != "1 JOINT"){
    //     return new Error("game full");
    // }

    
    if(this.gameState == "0 JOINT"){
        this.playerA == p;
        return "A";
    }

    else{
        this.playerB == "1 JOINT";
        return "B";
    }


  };

  module.exports = game;