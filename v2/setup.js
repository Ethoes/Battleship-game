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