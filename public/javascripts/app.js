var Twoship1 = [1, 2];
var Twoship2 = [3, 4];
var Threeship1 = [8, 9, 10];
var Threeship2 = [15, 16, 17];
var FourShip = [22, 23, 24, 25];

var ships = [Twoship1, Twoship2, Threeship1, Threeship2, FourShip];


var main = function () {
    "use strict";

    
        const ship1 = document.querySelector('.ship1');
        const ship2 = document.querySelector('.ship2');
        const ship3 = document.querySelector('.ship3');
        const ship4 = document.querySelector('.ship4');
        const ship5 = document.querySelector('.ship5');
        const space1 = document.getElementById(Twoship1[0]);
        const space2 = document.getElementById(Twoship2[0]);
        const space3 = document.getElementById(Threeship1[0]);
        const space4 = document.getElementById(Threeship2[0]);
        const space5 = document.getElementById(FouShip[0]);

        space1.appendChild(ship1);


    $(".rightField div").toArray().forEach(function (element) {
        // create a click handler for this element
        $(element).on("click", function () {
            
            var $element = $(element);
            console.log($element);
            $element.addClass("clicked");
            var id = Number(element.id);

            for(var index = 0; index < ships.length; index++){
                if(ships[index].includes(id)){
                        console.log("that's a hit");
                        $element.addClass("hit");
                }
        }

            console.log(id);
                    $(".rightField div:nth-child(" + id + ")") 
                            this.disabled = true;
                    
              
           
            return false;
        });
        });


$(".leftField div").toArray().forEach(function (element) {
        
        $(element).on("click", function () {
            
            var $element = $(element);
            console.log($element);
            $element.addClass("active");
            var id = element.id;

            console.log(id);
            
                    $(".rightField div:nth-child(" + id + ")") 
                            this.disabled = true;

            this.disable = true;

           alert("Wrong field dickhead");
            return false;
        });
        });


        
};

$(document).ready(main);