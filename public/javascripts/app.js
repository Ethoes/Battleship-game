var Twoship1 = [1, 2];
var Twoship2 = [3, 4];
var Threeship1 = [16, 23, 30];
var Threeship2 = [8, 9, 10];
var FourShip = [46, 47, 48, 49];

var ships = [Twoship1, Twoship2, Threeship1, Threeship2, FourShip];



var main = function () {
    "use strict";


        


        //showing the ships For Twoship1
        const ship11 = document.querySelector('.ship1-1');
        const space11 = document.getElementById(Twoship1[0]);
        const ship12 = document.querySelector('.ship1-2');
        const space12 = document.getElementById(Twoship1[1]);

        if((Twoship1[0] - Twoship1[1])  == -1){
                
                space11.appendChild(ship11);
                space12.appendChild(ship12);
        }

        if((Twoship1[0] - Twoship1[1]) == 1){
                ship11.className += " Left"
                ship12.className += " Left"
                space11.appendChild(ship11);
                space12.appendChild(ship12);
        }

        if((Twoship1[0] - Twoship1[1]) == -7){
                ship11.className += " Down"
                ship12.className += " Down"
                space11.appendChild(ship11);
                space12.appendChild(ship12); 
        }

        if((Twoship1[0] - Twoship1[1]) == 7){
                ship11.className += " Up"
                ship12.className += " Up"
                space11.appendChild(ship11);
                space12.appendChild(ship12); 
        }

        //showing the ships for Twoship2
        const ship21 = document.querySelector('.ship2-1');
        const space21 = document.getElementById(Twoship2[0]);
        const ship22 = document.querySelector('.ship2-2');
        const space22 = document.getElementById(Twoship2[1]);

        if((Twoship2[0] - Twoship2[1])  == -1){
                
                space21.appendChild(ship21);
                space22.appendChild(ship22);
        }

        if((Twoship2[0] - Twoship2[1]) == 1){
                ship21.className += " Left"
                ship22.className += " Left"
                space21.appendChild(ship21);
                space22.appendChild(ship22);
        }

        if((Twoship2[0] - Twoship2[1]) == -7){
                ship21.className += " Down"
                ship22.className += " Down"
                space21.appendChild(ship21);
                space22.appendChild(ship22); 
        }

        if((Twoship2[0] - Twoship2[1]) == 7){
                ship21.className += " Up"
                ship22.className += " Up"
                space21.appendChild(ship21);
                space22.appendChild(ship22); 
        }

        //Showing ThreeShip1
        const ship31 = document.querySelector('.ship3-1');
        const space31 = document.getElementById(Threeship1[0]);
        const ship32 = document.querySelector('.ship3-2');
        const space32 = document.getElementById(Threeship1[1]);
        const ship33 = document.querySelector('.ship3-3');
        const space33 = document.getElementById(Threeship1[2]);

        if((Threeship1[0] - Threeship1[1])  == -1){
                
                space31.appendChild(ship31);
                space32.appendChild(ship33);
                space33.appendChild(ship32);
        }

        if((Threeship1[0] - Threeship1[1]) == 1){
                ship31.className += " Left"
                ship32.className += " Left"
                ship33.className += " Left"
                space31.appendChild(ship31);
                space32.appendChild(ship33);
                space33.appendChild(ship32);
        }

        if((Threeship1[0] - Threeship1[1]) == -7){
                ship31.className += " Down"
                ship32.className += " Down"
                ship33.className += " Down"
                space31.appendChild(ship31);
                space32.appendChild(ship33);
                space33.appendChild(ship32); 
        }

        if((Threeship1[0] - Threeship1[1]) == 7){
                ship31.className += " Up"
                ship32.className += " Up"
                ship33.className += " Up"
                space31.appendChild(ship31);
                space32.appendChild(ship33);
                space33.appendChild(ship32); 
        }

        //showing threeship2
        const ship41 = document.querySelector('.ship4-1');
        const space41 = document.getElementById(Threeship2[0]);
        const ship42 = document.querySelector('.ship4-2');
        const space42 = document.getElementById(Threeship2[1]);
        const ship43 = document.querySelector('.ship4-3');
        const space43 = document.getElementById(Threeship2[2]);

        if((Threeship2[0] - Threeship2[1])  == -1){
                
                space41.appendChild(ship41);
                space42.appendChild(ship43);
                space43.appendChild(ship42);
        }

        if((Threeship2[0] - Threeship2[1]) == 1){
                ship41.className += " Left"
                ship42.className += " Left"
                ship43.className += " Left"
                space41.appendChild(ship41);
                space42.appendChild(ship43);
                space43.appendChild(ship42);
        }

        if((Threeship2[0] - Threeship2[1]) == -7){
                ship41.className += " Down"
                ship42.className += " Down"
                ship43.className += " Down"
                space41.appendChild(ship41);
                space42.appendChild(ship43);
                space43.appendChild(ship42); 
        }

        if((Threeship2[0] - Threeship2[1]) == 7){
                ship41.className += " Up"
                ship42.className += " Up"
                ship43.className += " Up"
                space41.appendChild(ship31);
                space42.appendChild(ship33);
                space43.appendChild(ship32); 
        }

        //showing fourship
        const ship51 = document.querySelector('.ship5-1');
        const space51 = document.getElementById(FourShip[0]);
        const ship52 = document.querySelector('.ship5-2');
        const space52 = document.getElementById(FourShip[1]);
        const ship53 = document.querySelector('.ship5-3');
        const space53 = document.getElementById(FourShip[2]);
        const ship54 = document.querySelector('.ship5-4');
        const space54 = document.getElementById(FourShip[3]);

        if((FourShip[0] - FourShip[1])  == -1){
                
                space51.appendChild(ship51);
                space52.appendChild(ship52);
                space53.appendChild(ship53);
                space54.appendChild(ship54);
        }

        if((FourShip[0] - FourShip[1]) == 1){
                ship51.className += " Left"
                ship52.className += " Left"
                ship53.className += " Left"
                ship54.className += " Left"
                space51.appendChild(ship51);
                space52.appendChild(ship52);
                space53.appendChild(ship53);
                space54.appendChild(ship54);
        }

        if((FourShip[0] - FourShip[1]) == -7){
                ship51.className += " Down"
                ship52.className += " Down"
                ship53.className += " Down"
                ship54.className += " Down"
                space51.appendChild(ship51);
                space52.appendChild(ship52);
                space53.appendChild(ship53);
                space54.appendChild(ship54); 
        }

        if((FourShip[0] - FourShip[1]) == 7){
                ship51.className += " Up"
                ship52.className += " Up"
                ship53.className += " Up"
                ship54.className += " Up"
                space51.appendChild(ship51);
                space52.appendChild(ship52);
                space53.appendChild(ship53);
                space54.appendChild(ship54); 
        }
        var F = 1;
        var i = 1;
        var E = 0;
    $(".rightField div").toArray().forEach(function (element) {
        // create a click handler for this element
        $(element).on("click", function () {
            
            var $element = $(element);
            console.log($element);
            $element.addClass("clicked");
            var id = Number(element.id); 
            const hit = document.querySelector('.hit'+i);
            const miss = document.querySelector('.miss' + F);

            for(var index = 0; index < ships.length; index++){
                if(ships[index].includes(id)){
                        console.log("that's a hit");
                        //$element.addClass("hit");
                        hit.className += ' visible';
                        $element.append(hit);
                        i++
                        E = 1;
                }
        }

                if(E == 0) {
                        $element.append(miss);
                        F++
                }
                

               
                E = 0;
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