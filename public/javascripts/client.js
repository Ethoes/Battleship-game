var main = function () {

    "use strict";
    
    $(".leftField button").toArray().forEach(function (element) {

    var Battleship1 = [1, 2];
    var Battleship2 = [3, 4];
    var Battleship3 = [5, 6, 7];
    var Battleship4 = [8, 9, 10];
    var Battleship5 = [11, 12, 13, 14];

    if(Battleship1.includes(1))
    console.log("ur mom has the big gay")
        
    // create a click handler for this element
    
    $(element).on("click", function () {
    
    var $element = $(element);
    
    console.log($element);
    
    $element.addClass("active");
    
    var id = element.id;
    
    
    
    console.log(id);
    
    if(Battleship1.includes(Number(id)))
    console.log("Hit")

    $(".leftField button:nth-child(" + id + ")") 
    this.disabled = true;
    
    // if(Battleship1.includes(id))
    // console.log("ur mom has the small gay")

    return false;
    
    });
    });
    };
    
    $(document).ready(main);
    
    