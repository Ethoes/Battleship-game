var smolship = [55, 55];

var largeship = [ 1, 23, 45 , 65];
var ships = [smolship, largeship];

var clicks = 0;
var hits = 0;


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
                        hits++;
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

            clicks ++;

            if(hits == 14){
                    alert("winner, winner chicken dinner!");
            }
            if(clicks == 49){
                    alert("you lost fam");
            }
            console.log(clicks);

        //     var count = 0;
        //     for(var int = 1; int <= 49; int ++){
        //         var test = $(".leftField div:nth-child(" +int+")");
        //         console.log("problem" +  test.hasClass("clicked") + " " + int);

        //         if(test.hasClass("clicked") != true){
        //                 // test.includes("clicked");
        //                 count ++;
                       
        //                 console.log("this si the problem" +  test.hasClass("clicked") );
        //                 return false;
        //         }
        //         if(count == 49){
        //                 alert("you lost");
        //         }
        //         console.log("it works" + count);
                
        //         // if($(".leftField div:nth-child(" +int+")")){
                        
        //         //         console.log("this workds");
        //         // }
        //         // console.log($(".leftField div:nth-child(" + int +")"));
        //         // if(document.leftField.getElementById(int).clicked != "clicked"){
        //         //         return false;
        //         // }
        //         // alert("wiw");
        // };
        // alert("you lost");
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


        // for(var int = 1; int <= 49; int ++){
        //         var test = $(".leftField div:nth-child(" +int+")");

        //         if(test.hasClass("clicked") != true){
        //                 // return false;

        //                 console.log("this si the problem");
        //         }
        //         console.log(test.hasClass("clicked"));
                
        //         // if($(".leftField div:nth-child(" +int+")")){
                        
        //         //         console.log("this workds");
        //         // }
        //         // console.log($(".leftField div:nth-child(" + int +")"));
        //         // if(document.leftField.getElementById(int).clicked != "clicked"){
        //         //         return false;
        //         // }
        //         // alert("wiw");
        // };
};

// document.getElementById('form-button').onclick = function () {
//     this.disabled = true;
// }

$(document).ready(main);