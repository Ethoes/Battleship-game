var Twoship1 = [1, 2];
var Twoship2 = [3, 4];
var Threeship1 = [8, 9, 10];
var Threeship2 = [15, 16, 17];
var FourShip = [22, 23, 24, 25];

var ships = [Twoship1, Twoship2, Threeship1, Threeship2, FourShip];


var main = function () {
    "use strict";

    
    


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