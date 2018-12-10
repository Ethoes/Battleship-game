var smolship = [5, 6];
var smolship2 = [2, 3];
var mediumship = [16 , 23, 30];
var mediumship2 = [20, 27, 34];

var largeship = [ 18, 25, 32 , 39];
var ships = [smolship, smolship2, mediumship, mediumship2, largeship];

var clicks = 0;
var hits = 0;


var main = function () {
    "use strict";


    $(".leftField div").toArray().forEach(function (element) {
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
                        hits++;
                }
        }

            

            clicks ++;

            if(hits == 14){
                    alert("winner, winner chicken dinner!");
            }
            if(clicks == 49){
                    alert("you lost fam");
            }
            console.log(clicks);

      
            return false;
        });
        });


$(".rightField div").toArray().forEach(function (element) {
        // create a click handler for this element
        $(element).on("click", function () {
            //$(".tabs a span").removeClass("active");
            var $element = $(element);
            console.log($element);
            $element.addClass("active");
            var id = element.id;

            this.disable = true;
            return false;
        });
        });

};


$(document).ready(main);