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
var isshipvertical = false;
var howmanyturns = 0;

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
                console.log($element);
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
                })

            };
        });
     });
    





        // toggle = 0;

    $(".Field div").toArray().forEach(function (elementgrid) {
        $(elementgrid).on("click", function () {

            var grid = $(elementgrid);
            var idgrid = Number(elementgrid.id);
            grid.addClass("clicked");
            currentship.push(idgrid);

            if(toggle == 1){
                // var grid = $(elementgrid);
                // var idgrid = Number(elementgrid.id);
                
                // grid.addClass("clicked");
                // currentship.push(idgrid);

                prevgrid = idgrid;

                console.log(currentship)

                $(".Field div").toArray().forEach(function (elementgrid1) {
                    $(elementgrid1).addClass("disabled");
                })


                if((idgrid != 7) && (idgrid != 14) && (idgrid != 21) && (idgrid != 28) && (idgrid != 35) && (idgrid != 42) && (idgrid != 49) )
                  $("#" + (idgrid + 1) ).removeClass("disabled")
               
                $("#" + (idgrid + 7) ).removeClass("disabled")
                
                if((idgrid != 1) && (idgrid != 8) && (idgrid != 15) && (idgrid != 22) && (idgrid != 29) && (idgrid != 36) && (idgrid != 43) )
                    $("#" + (idgrid - 1) ).removeClass("disabled")
                
                $("#" + (idgrid - 7) ).removeClass("disabled")
                
                toggle++;
                return false;
            }
            

            if(toggle == 2){
                // var grid = $(elementgrid);
                // var idgrid = Number(elementgrid.id);
                
                // grid.addClass("clicked");
                // currentship.push(idgrid);

                grid.addClass("disabled")

                if((idgrid != 7) && (idgrid != 14) && (idgrid != 21) && (idgrid != 28) && (idgrid != 35) && (idgrid != 42) && (idgrid != 49) && ((idgrid + 1) != prevgrid) )
                  $("#" + (idgrid + 1) ).removeClass("disabled")
               
                if( clickedgrids.includes(idgrid + 7))
                    $("#" + (idgrid + 7) ).removeClass("disabled")
                
                if((idgrid != 1) && (idgrid != 8) && (idgrid != 15) && (idgrid != 22) && (idgrid != 29) && (idgrid != 36) && (idgrid != 43) && ((idgrid - 1) != prevgrid) )
                    $("#" + (idgrid - 1) ).removeClass("disabled")
                
                if(((idgrid - 7) != prevgrid))
                    $("#" + (idgrid - 7) ).removeClass("disabled")
                
                console.log(currentship)

                prevgrid = idgrid;

                // toggle++;
                return false;

            }

        })
        return false;
    })
}           

    //            if( (digrid.includes(idgrid + 1)) || (digrid.includes(idgrid - 1)) || (digrid.includes(idgrid + 7)) || (digrid.includes(idgrid - 7)) || prevgrid == null)
    //                 digrid.push(idgrid);

    //             // console.log("gridnmber " + digrid);


    //             if(prevgrid == null || (prevgrid == (-69))){
    //                 prevgrid = idgrid;
    //             }

    //         //     console.log("prevgrid before assert " + prevgrid);

    //         // console.log(" vertical  " + isshipvertical);
    //         //     console.log( "plus 1 " + ( (isshipvertical == false ) && ( (digrid.includes(prevgrid + 1)) || (digrid.includes(prevgrid - 1)) ) ) );
    //         //     console.log(" not at the edge  " +   ( (idgrid != 7) && (idgrid != 14) && (idgrid != 21) && (idgrid != 28) && (idgrid != 35) && (idgrid != 42) && (idgrid != 49) &&
    //         //     (idgrid != 1) && (idgrid != 8) && (idgrid != 15) && (idgrid != 22) && (idgrid != 29) && (idgrid != 36) && (idgrid != 43)));

    //         //     console.log("plus 7 " +  ( ((isshipvertical == true) || (howmanyturns < 2) )&&    ( (digrid.includes( (prevgrid + 7)  )) || (digrid.includes( (prevgrid - 7) ) ) )));
    //         //     console.log("digrid contains prevgrid " + ( idgrid == prevgrid ) );

    //             if(( ((isshipvertical == false ) || (howmanyturns < 2)) && ( (digrid.includes(prevgrid + 1)) || (digrid.includes(prevgrid - 1)) || ( idgrid == prevgrid )) )  ){
                    


    //                 $(elementgrid).addClass("clicked");

                  
    //             if(turn > 0){

        
    //                 if($element == 1){
    //                  smolship.push(idgrid);
    //                  turn--;
    //                 }

    //                 if($element == 2){
    //                     smolship2.push(idgrid);
    //                     turn--;
    //                    }

    //                    if($element == 3){
    //                     mediumship.push(idgrid);
    //                     turn--;
    //                     howmanyturns ++;

    //                     if( (digrid.includes(prevgrid + 7)) || (digrid.includes(prevgrid - 7))){
    //                         isshipvertical = true;
    //                         // console.log("sup m " + isshipvertical);   
    //                     }
    //                    }

    //                    if($element == 4){
    //                     mediumship2.push(idgrid);
    //                     turn--;
    //                     howmanyturns++;
    //                     if((digrid.includes(prevgrid + 7)) || (digrid.includes(prevgrid - 7))){
    //                         isshipvertical = true;
    //                     }
    //                    }

    //                    if($element == 5){
    //                     largeship.push(idgrid);
    //                     turn--;
    //                     howmanyturns++;
    //                     if((digrid.includes(prevgrid + 7)) || (digrid.includes(prevgrid - 7))){
    //                         isshipvertical = true;
    //                     }
    //                    }

    //         }

    //          prevgrid = idgrid;

    //         if(turn == 0){
    //             shipimg.addClass("disable");
                
    //             toggle = 0;
    //             $element = null;
    //             prevgrid = null;

                
    //             isshipvertical = false;
    //             digrid = [];
    //             howmanyturns = 0;
    //         }
            
        
    //         // console.log("test array grid " + digrid + " index " + digrid.includes(prevgrid) + prevgrid ) //(prevgrid == (digrid + 1)) || (prevgrid == (digrid - 1)) || (prevgrid == (digrid + 7)) || (prevgrid == (digrid - 7)) || (prevgrid == (digrid)));

    //     // } 




    //     if(( ((isshipvertical == true) || (howmanyturns < 2)) &&    ( (digrid.includes( (prevgrid + 7)  )) || (digrid.includes( (prevgrid - 7) ) ) ))  ){
                    


    //         $(elementgrid).addClass("clicked");

          
    //     if(turn > 0){


    //         if($element == 1){
    //          smolship.push(idgrid);
    //          turn--;
    //         }

    //         if($element == 2){
    //             smolship2.push(idgrid);
    //             turn--;
    //            }

    //            if($element == 3){
    //             mediumship.push(idgrid);
    //             turn--;
    //             howmanyturns ++;

    //             if( (digrid.includes(prevgrid + 7)) || (digrid.includes(prevgrid - 7))){
    //                 isshipvertical = true;
    //                 // console.log("sup m " + isshipvertical);   
    //             }
    //            }

    //            if($element == 4){
    //             mediumship2.push(idgrid);
    //             turn--;
    //             howmanyturns++;
    //             if((digrid.includes(prevgrid + 7)) || (digrid.includes(prevgrid - 7))){
    //                 isshipvertical = true;
    //             }
    //            }

    //            if($element == 5){
    //             largeship.push(idgrid);
    //             turn--;
    //             howmanyturns++;
    //             if((digrid.includes(prevgrid + 7)) || (digrid.includes(prevgrid - 7))){
    //                 isshipvertical = true;
    //             }
    //            }

    // }

    //  prevgrid = idgrid;

    // if(turn == 0){
    //     shipimg.addClass("disable");
    //     toggle = 0;
    //     $element = null;
    //     prevgrid = null;

        
    //     isshipvertical = false;
    //     digrid = [];
    //     howmanyturns = 0;
    // }
    

   // console.log("test array grid " + digrid + " index " + digrid.includes(prevgrid) + prevgrid ) //(prevgrid == (digrid + 1)) || (prevgrid == (digrid - 1)) || (prevgrid == (digrid + 7)) || (prevgrid == (digrid - 7)) || (prevgrid == (digrid)));

// } 





    //     }
    //     return false;
    // })


    
    
// })

            

        
// };


$(document).ready(main);