var smolship = [];
var smolship2 = [];
var mediumship = [];
var mediumship2 = [];
var largeship = [];


var currentship;


var ships = [smolship, smolship2, mediumship, mediumship2, largeship];

var $element = 0;
var toggle = 0;
var turn = 0;

var shipimg;
var prevgrid = null;

var clickedgrids = [];
// var isshipvertical = false;
// var howmanyturns = 0;

var socket = new WebSocket("ws://localhost:3000");

var msg = {
    type: "message",
    text: "sup",
    id:   1
  };

$("button").on("click", function(){
    socket.send(JSON.stringify(msg));
})


socket.onmessage = function(event){
    console.log(event);
}

var main = function () {
    "use strict";

    $(".Field div").toArray().forEach(function (elementgrid) {
        $(elementgrid).addClass("disabled");
    })


    $(".shipsetc img").toArray().forEach(function (element) {
        $(element).on("click", function () {

            if(toggle == 0){
                toggle = 1;

                shipimg = $(element);

                $element = Number(element.id);
             
                $(element).addClass("clicked");
                
                if($element == 1){
                   turn = 2;
                   currentship = smolship;
                };

                if($element == 2){
                    turn = 2;
                    currentship = smolship2;
                };

                if($element == 3){
                    turn = 3;
                    currentship = mediumship;
                };

                if($element == 4){
                    turn = 3;
                    currentship = mediumship2;
                };

                if($element == 5){
                    turn = 4;
                    currentship = largeship;
                };

                $(".Field div").toArray().forEach(function (elementgrid) {
                    $(elementgrid).removeClass("disabled");

                    $('.clicked').addClass("disabled");
                    
                })

            };
        });
     });
    
    $("button").on("click", function(){
        var shipString = [];
        shipString[0] = smolship[0];
        shipString[1] = smolship[1];
        shipString[2] = smolship2[0];
        shipString[3] = smolship2[1];
        shipString[4] = mediumship[0];
        shipString[5] = mediumship[1];
        shipString[6] = mediumship[2];
        shipString[7] = mediumship2[0];
        shipString[8] = mediumship2[1];
        shipString[9] = mediumship2[2];
        shipString[10] = largeship[0];
        shipString[11] = largeship[1];
        shipString[12] = largeship[2];
        shipString[13] = largeship[3];

        var Outmail = Messages.O_Set_Field;
        Outmail.data = shipString;
        socket.send(JSON.stringify(Outmail));

    
    });

    $(".Field div").toArray().forEach(function (elementgrid) {
        $(elementgrid).on("click", function () {

            var grid = $(elementgrid);
            var idgrid = Number(elementgrid.id);
            grid.addClass("clicked");
            currentship.push(idgrid);
            clickedgrids.push(idgrid);



            if(toggle == 1){
                turn--;
               
                prevgrid = idgrid;

             

                $(".Field div").toArray().forEach(function (elementgrid1) {
                    $(elementgrid1).addClass("disabled");
                })


                if((idgrid != 7) && (idgrid != 14) && (idgrid != 21) && (idgrid != 28) && (idgrid != 35) && (idgrid != 42) && (idgrid != 49) && (!clickedgrids.includes(idgrid + 1)) )
                  $("#" + (idgrid + 1) ).removeClass("disabled")
               
                if(!clickedgrids.includes(idgrid + 7))
                    $("#" + (idgrid + 7) ).removeClass("disabled")
                
                if((idgrid != 1) && (idgrid != 8) && (idgrid != 15) && (idgrid != 22) && (idgrid != 29) && (idgrid != 36) && (idgrid != 43) && (!clickedgrids.includes(idgrid - 1)))
                    $("#" + (idgrid - 1) ).removeClass("disabled")
                
                if(!clickedgrids.includes(idgrid - 7))
                    $("#" + (idgrid - 7) ).removeClass("disabled")
                
                toggle++;
                return false;
            }
            

            if(toggle == 2){
                turn--;
              

                grid.addClass("disabled")

                if((idgrid == (prevgrid + 1)) ){
                    if((idgrid != 7) && (idgrid != 14) && (idgrid != 21) && (idgrid != 28) && (idgrid != 35) && (idgrid != 42) && (idgrid != 49) && (!clickedgrids.includes(idgrid + 1)) )
                        $("#" + (idgrid + 1) ).removeClass("disabled")

                        $("#" + (prevgrid + 7) ).addClass("disabled")
                        $("#" + (prevgrid - 7) ).addClass("disabled")

                }

                if((idgrid == (prevgrid - 1)) ){
                    if((idgrid != 7) && (idgrid != 14) && (idgrid != 21) && (idgrid != 28) && (idgrid != 35) && (idgrid != 42) && (idgrid != 49) && (!clickedgrids.includes(idgrid - 1)) )
                        $("#" + (idgrid - 1) ).removeClass("disabled")

                        $("#" + (prevgrid + 7) ).addClass("disabled")
                        $("#" + (prevgrid - 7) ).addClass("disabled")

                }

                if((idgrid == (prevgrid + 7)) ){
                    if(!clickedgrids.includes(idgrid + 7))
                        $("#" + (idgrid + 7) ).removeClass("disabled")

                    $("#" + (prevgrid + 1) ).addClass("disabled")
                    $("#" + (prevgrid - 1) ).addClass("disabled")

                }

                if((idgrid == (prevgrid - 7)) ){
                    if(!clickedgrids.includes(idgrid -7))
                        $("#" + (idgrid - 7) ).removeClass("disabled")

                    $("#" + (prevgrid + 1) ).addClass("disabled")
                    $("#" + (prevgrid - 1) ).addClass("disabled")

                }

                if(turn == 0){
                    toggle = 0;
                    shipimg.addClass("disable");

                    $(".Field div").toArray().forEach(function (elementgrid1) {
                        console.log("here"); 
                               //showing the ships For smolship
        const ship11 = document.querySelector('.ship1-1');
        const space11 = document.getElementById(smolship[0]);
        const ship12 = document.querySelector('.ship1-2');
        const space12 = document.getElementById(smolship[1]);

        if((smolship[0] - smolship[1])  == -1){
                
                space11.appendChild(ship11);
                space12.appendChild(ship12);
        }

        if((smolship[0] - smolship[1]) == 1){
                ship11.className += " Left"
                ship12.className += " Left"
                space11.appendChild(ship11);
                space12.appendChild(ship12);
        }

        if((smolship[0] - smolship[1]) == -7){
                ship11.className += " Down"
                ship12.className += " Down"
                space11.appendChild(ship11);
                space12.appendChild(ship12); 
        }

        if((smolship[0] - smolship[1]) == 7){
                ship11.className += " Up"
                ship12.className += " Up"
                space11.appendChild(ship11);
                space12.appendChild(ship12); 
        }

        //showing the ships for smolship2
        const ship21 = document.querySelector('.ship2-1');
        const space21 = document.getElementById(smolship2[0]);
        const ship22 = document.querySelector('.ship2-2');
        const space22 = document.getElementById(smolship2[1]);

        if((smolship2[0] - smolship2[1])  == -1){
                
                space21.appendChild(ship21);
                space22.appendChild(ship22);
        }

        if((smolship2[0] - smolship2[1]) == 1){
                ship21.className += " Left"
                ship22.className += " Left"
                space21.appendChild(ship21);
                space22.appendChild(ship22);
        }

        if((smolship2[0] - smolship2[1]) == -7){
                ship21.className += " Down"
                ship22.className += " Down"
                space21.appendChild(ship21);
                space22.appendChild(ship22); 
        }

        if((smolship2[0] - smolship2[1]) == 7){
                ship21.className += " Up"
                ship22.className += " Up"
                space21.appendChild(ship21);
                space22.appendChild(ship22); 
        }

        //Showing ThreeShip1
        const ship31 = document.querySelector('.ship3-1');
        const space31 = document.getElementById(mediumship[0]);
        const ship32 = document.querySelector('.ship3-2');
        const space32 = document.getElementById(mediumship[1]);
        const ship33 = document.querySelector('.ship3-3');
        const space33 = document.getElementById(mediumship[2]);

        if((mediumship[0] - mediumship[1])  == -1){
                
                space31.appendChild(ship31);
                space32.appendChild(ship33);
                space33.appendChild(ship32);
        }

        if((mediumship[0] - mediumship[1]) == 1){
                ship31.className += " Left"
                ship32.className += " Left"
                ship33.className += " Left"
                space31.appendChild(ship31);
                space32.appendChild(ship33);
                space33.appendChild(ship32);
        }

        if((mediumship[0] - mediumship[1]) == -7){
                ship31.className += " Down"
                ship32.className += " Down"
                ship33.className += " Down"
                space31.appendChild(ship31);
                space32.appendChild(ship33);
                space33.appendChild(ship32); 
        }

        if((mediumship[0] - mediumship[1]) == 7){
                ship31.className += " Up"
                ship32.className += " Up"
                ship33.className += " Up"
                space31.appendChild(ship31);
                space32.appendChild(ship33);
                space33.appendChild(ship32); 
        }

        //showing threeship2
        const ship41 = document.querySelector('.ship4-1');
        const space41 = document.getElementById(mediumship2[0]);
        const ship42 = document.querySelector('.ship4-2');
        const space42 = document.getElementById(mediumship2[1]);
        const ship43 = document.querySelector('.ship4-3');
        const space43 = document.getElementById(mediumship2[2]);

        if((mediumship2[0] - mediumship2[1])  == -1){
                
                space41.appendChild(ship41);
                space42.appendChild(ship43);
                space43.appendChild(ship42);
        }

        if((mediumship2[0] - mediumship2[1]) == 1){
                ship41.className += " Left"
                ship42.className += " Left"
                ship43.className += " Left"
                space41.appendChild(ship41);
                space42.appendChild(ship43);
                space43.appendChild(ship42);
        }

        if((mediumship2[0] - mediumship2[1]) == -7){
                ship41.className += " Down"
                ship42.className += " Down"
                ship43.className += " Down"
                space41.appendChild(ship41);
                space42.appendChild(ship43);
                space43.appendChild(ship42); 
        }

        if((mediumship2[0] - mediumship2[1]) == 7){
                ship41.className += " Up"
                ship42.className += " Up"
                ship43.className += " Up"
                space41.appendChild(ship31);
                space42.appendChild(ship33);
                space43.appendChild(ship32); 
        }

        //showing fourship
        const ship51 = document.querySelector('.ship5-1');
        const space51 = document.getElementById(largeship[0]);
        const ship52 = document.querySelector('.ship5-2');
        const space52 = document.getElementById(largeship[1]);
        const ship53 = document.querySelector('.ship5-3');
        const space53 = document.getElementById(largeship[2]);
        const ship54 = document.querySelector('.ship5-4');
        const space54 = document.getElementById(largeship[3]);

        if((largeship[0] - largeship[1])  == -1){
                
                space51.appendChild(ship51);
                space52.appendChild(ship52);
                space53.appendChild(ship53);
                space54.appendChild(ship54);
        }

        if((largeship[0] - largeship[1]) == 1){
                ship51.className += " Left"
                ship52.className += " Left"
                ship53.className += " Left"
                ship54.className += " Left"
                space51.appendChild(ship51);
                space52.appendChild(ship52);
                space53.appendChild(ship53);
                space54.appendChild(ship54);
        }

        if((largeship[0] - largeship[1]) == -7){
                ship51.className += " Down"
                ship52.className += " Down"
                ship53.className += " Down"
                ship54.className += " Down"
                space51.appendChild(ship51);
                space52.appendChild(ship52);
                space53.appendChild(ship53);
                space54.appendChild(ship54); 
        }

        if((largeship[0] - largeship[1]) == 7){
                ship51.className += " Up"
                ship52.className += " Up"
                ship53.className += " Up"
                ship54.className += " Up"
                space51.appendChild(ship51);
                space52.appendChild(ship52);
                space53.appendChild(ship53);
                space54.appendChild(ship54); 
        }            
        $(elementgrid1).addClass("disabled");
                    })

                }
                

                prevgrid = idgrid;
            }

           
                return false;

            

         })
        return false;
    })
}           

  


$(document).ready(main);
