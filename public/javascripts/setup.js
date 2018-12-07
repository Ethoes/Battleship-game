var smolship = [5, 6];
var smolship2 = [2, 3];
var mediumship = [16 , 23, 30];
var mediumship2 = [20, 27, 34];

var largeship = [ 18, 25, 32 , 39];
var ships = [smolship, smolship2, mediumship, mediumship2, largeship];


var main = function () {
    "use strict";
};

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
   
  }



$(document).ready(main);