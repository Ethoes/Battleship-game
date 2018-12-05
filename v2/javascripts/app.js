var smolship = [55, 55];

var largeship = [ 1, 23, 45 , 65];
var ships = [smolship, largeship];


var main = function () {
    "use strict";

    

    // $(".leftField button").on("click", function(event) {
        
    //     console.log(event);
    //     this.disabled = true;

    // });

    // $(".leftField button:nth-child(5)").on("click", function(event) {
        
    //     console.log("wow");
    //     this.disabled = true;
    //    $(".leftField button:nth-child(5)").addClass("active");

    // });

    $(".leftField div").toArray().forEach(function (element) {
        // create a click handler for this element
        $(element).on("click", function () {
            //$(".tabs a span").removeClass("active");
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
            // for(var index = 1; index <= 49; index++){
            //     if(id == index){
                    $(".leftField div:nth-child(" + id + ")") 
                            this.disabled = true;
                    
              //  }
        //    }


           // this.disable = true;
            // element.addClass("active");
           
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

            console.log(id);
            // for(var index = 1; index <= 49; index++){
            //     if(id == index){
                    $(".leftField div:nth-child(" + id + ")") 
                            this.disabled = true;
                    
              //  }
        //    }

            this.disable = true;
            // element.addClass("active");
           alert("jdkd");
            return false;
        });
        });


        for(var int = 1; int <= 49; int ++){
                if($(".leftField div:nth-child(" + int +")").
                // console.log($(".leftField div:nth-child(" + int +")"));
                // if(document.leftField.getElementById(int).clicked != "clicked"){
                //         return false;
                // }
                // alert("wiw");
        }
};

// document.getElementById('form-button').onclick = function () {
//     this.disabled = true;
// }

$(document).ready(main);