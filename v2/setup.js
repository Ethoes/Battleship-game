var smolship = [5, 6];
var smolship2 = [2, 3];
var mediumship = [16 , 23, 30];
var mediumship2 = [20, 27, 34];

var largeship = [ 18, 25, 32 , 39];
var ships = [smolship, smolship2, mediumship, mediumship2, largeship];

var $element = 0;
var toggle = 0;
var turn = 0;

var shipimg;
var prevgrid;

var main = function () {
    "use strict";


    $(".shipsetc img").toArray().forEach(function (element) {

        

        $(element).on("click", function () {


            if(toggle == 0){

            toggle = 1;

            shipimg = $(element);

            $element = Number(element.id);
            console.log($element);
            $(element).addClass("clicked");
            
            if($element == 1){
                turn = 2;
                smolship = [];
            };

            if($element == 2){
                turn = 2;
                smolship2 = [];
            };

            if($element == 3){
                turn = 3;
                mediumship = [];
            };

            if($element == 4){
                turn = 3;
                mediumship2 = [];
            };

            if($element == 5){
                turn = 4;
                largeship = [];
            };




        };
        });
        
     });
    




// if(toggle == 0){

    
    // if($element > 0){
        toggle = 0;

    $(".Field div").toArray().forEach(function (elementgrid) {


        $(elementgrid).on("click", function () {

            if(toggle == 1){

                

                 $(elementgrid).addClass("clicked");

                var idgrid = Number(elementgrid.id);


                if(prevgrid == null){
                    prevgrid = idgrid;
                }

                

                if((prevgrid == (idgrid + 1)) || (prevgrid == (idgrid - 1)) || (prevgrid == (idgrid + 7)) || (prevgrid == (idgrid - 7)) || (prevgrid == (idgrid))  ){
                    


                    // $(elementgrid).addClass("clicked");

                  
                if(turn > 0){

                    

                    if($element == 1){
                     smolship.push(idgrid);
                     turn--;
                    }

                    if($element == 2){
                        smolship2.push(idgrid);
                        turn--;
                       }

                       if($element == 3){
                        mediumship.push(idgrid);
                        turn--;
                       }

                       if($element == 4){
                        mediumship2.push(idgrid);
                        turn--;
                       }

                       if($element == 5){
                        largeship.push(idgrid);
                        turn--;
                       }

            }

            if(turn == 0){
                shipimg.addClass("disable");
                toggle = 0;
                $element = null;
                prevgrid = null;
            }
            
           prevgrid = idgrid;

        } // id statements
        }
        return false;
    })


    // }
    
})

            

        
};


$(document).ready(main);