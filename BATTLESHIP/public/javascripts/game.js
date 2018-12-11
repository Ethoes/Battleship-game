var smolship;
var smolship2;
var mediumship;
var mediumship2;
var largeship;
var shots;

var smolship3;
var smolship4;
var mediumship3;
var mediumship4;
var largeship2;

var enemyShips = [smolship3, smolship4, mediumship3, mediumship4, largeship2];
var ships = [smolship, smolship2, mediumship, mediumship2, largeship];

var loss = 0;

var socket = new WebSocket("ws://localhost:3000");

socket.onmessage = function (event) {
        //console.log(event.data);

            if(event.type == Messages.T_Set_Field){
                    var boardB = event.data;
                    
                    var smolship3 = [boardB[0], boardB[1]];
                    var smolship4 = [boardB[2], boardB[3]];
                    var mediumship3 = [boardB[4], boardB[5], boardB[6]];
                    var mediumship4 = [boardB[7], boardB[8], boardB[9]];
                    var largeship2 = [boardB[10], boardB[11], boardB[12], boardB[13]];
            }
        
            if(event.type == Messages.T_Shot){
                var Id = event.data;
                const spaaaace = document.getElementById(Id);
                if(ships[index].includes(id)){
                spaaaace.className += ' bigDick';
                loss++;
                }
                if(!(ships[index].includes(id))){
                spaaaace.className += ' smallDick'
                }
                for(var i = 0; i < 49; i++){
                        if(!(shots.includes(id))){
                        document.querySelector(i + 'r').enable;
                        }
                }
                }
            

            if(event.type == Messages.T_Set_Field){
                var boardA = event.data;
    
                var smolship = [boardA[0], boardA[1]];
                var smolship2 = [boardA[2], boardA[3]];
                var mediumship = [boardA[4], boardA[5], boardA[6]];
                var mediumship2 = [boardA[7], boardA[8], boardA[9]];
                var largeship = [boardA[10], boardA[11], boardA[12], boardA[13]];
    
                //add the ship append code here
                //showing the ships For smolship
                const ship11 = document.querySelector('.ship1-1');
                const space11 = document.getElementById(smolship[0]);
                const ship12 = document.querySelector('.ship1-2');
                const space12 = document.getElementById(smolship[1]);

                if((smolship[0] - smolship[1])  == -1){
                        
                        space11.appendChild(ship11);
                        space12.appendChild(ship12);
                }

                if((smolship[0] - smolship[1]) == 1){
                        ship11.className += " Left"
                        ship12.className += " Left"
                        space11.appendChild(ship11);
                        space12.appendChild(ship12);
                }

                if((smolship[0] - smolship[1]) == -7){
                        ship11.className += " Down"
                        ship12.className += " Down"
                        space11.appendChild(ship11);
                        space12.appendChild(ship12); 
                }
              
                if((smolship[0] - smolship[1]) == 7){
                        ship11.className += " Up"
                        ship12.className += " Up"
                        space11.appendChild(ship11);
                        space12.appendChild(ship12); 
                }

                //showing the ships for smolship2
                const ship21 = document.querySelector('.ship2-1');
                const space21 = document.getElementById(smolship2[0]);
                const ship22 = document.querySelector('.ship2-2');
                const space22 = document.getElementById(smolship2[1]);

                if((smolship2[0] - smolship2[1])  == -1){
                        
                        space21.appendChild(ship21);
                        space22.appendChild(ship22);
                }

                if((smolship2[0] - smolship2[1]) == 1){
                        ship21.className += " Left"
                        ship22.className += " Left"
                        space21.appendChild(ship21);
                        space22.appendChild(ship22);
                }

                if((smolship2[0] - smolship2[1]) == -7){
                        ship21.className += " Down"
                        ship22.className += " Down"
                        space21.appendChild(ship21);
                        space22.appendChild(ship22); 
                }

                if((smolship2[0] - smolship2[1]) == 7){
                        ship21.className += " Up"
                        ship22.className += " Up"
                        space21.appendChild(ship21);
                        space22.appendChild(ship22); 
                }

                //Showing ThreeShip1
                const ship31 = document.querySelector('.ship3-1');
                const space31 = document.getElementById(mediumship[0]);
                const ship32 = document.querySelector('.ship3-2');
                const space32 = document.getElementById(mediumship[1]);
                const ship33 = document.querySelector('.ship3-3');
                const space33 = document.getElementById(mediumship[2]);

                if((mediumship[0] - mediumship[1])  == -1){
                        
                        space31.appendChild(ship31);
                        space32.appendChild(ship33);
                        space33.appendChild(ship32);
                }

                if((mediumship[0] - mediumship[1]) == 1){
                        ship31.className += " Left"
                        ship32.className += " Left"
                        ship33.className += " Left"
                        space31.appendChild(ship31);
                        space32.appendChild(ship33);
                        space33.appendChild(ship32);
                }

                if((mediumship[0] - mediumship[1]) == -7){
                        ship31.className += " Down"
                        ship32.className += " Down"
                        ship33.className += " Down"
                        space31.appendChild(ship31);
                        space32.appendChild(ship33);
                        space33.appendChild(ship32); 
                }

                if((mediumship[0] - mediumship[1]) == 7){
                        ship31.className += " Up"
                        ship32.className += " Up"
                        ship33.className += " Up"
                        space31.appendChild(ship31);
                        space32.appendChild(ship33);
                        space33.appendChild(ship32); 
                }

                //showing threeship2
                const ship41 = document.querySelector('.ship4-1');
                const space41 = document.getElementById(mediumship2[0]);
                const ship42 = document.querySelector('.ship4-2');
                const space42 = document.getElementById(mediumship2[1]);
                const ship43 = document.querySelector('.ship4-3');
                const space43 = document.getElementById(mediumship2[2]);

                if((mediumship2[0] - mediumship2[1])  == -1){
                        
                        space41.appendChild(ship41);
                        space42.appendChild(ship43);
                        space43.appendChild(ship42);
                }

                if((mediumship2[0] - mediumship2[1]) == 1){
                        ship41.className += " Left"
                        ship42.className += " Left"
                        ship43.className += " Left"
                        space41.appendChild(ship41);
                        space42.appendChild(ship43);
                        space43.appendChild(ship42);
                }

                if((mediumship2[0] - mediumship2[1]) == -7){
                        ship41.className += " Down"
                        ship42.className += " Down"
                        ship43.className += " Down"
                        space41.appendChild(ship41);
                        space42.appendChild(ship43);
                        space43.appendChild(ship42); 
                }

                if((mediumship2[0] - mediumship2[1]) == 7){
                        ship41.className += " Up"
                        ship42.className += " Up"
                        ship43.className += " Up"
                        space41.appendChild(ship31);
                        space42.appendChild(ship33);
                        space43.appendChild(ship32); 
                }

                //showing fourship
                const ship51 = document.querySelector('.ship5-1');
                const space51 = document.getElementById(largeship[0]);
                const ship52 = document.querySelector('.ship5-2');
                const space52 = document.getElementById(largeship[1]);
                const ship53 = document.querySelector('.ship5-3');
                const space53 = document.getElementById(largeship[2]);
                const ship54 = document.querySelector('.ship5-4');
                const space54 = document.getElementById(largeship[3]);
        
                if((largeship[0] - largeship[1])  == -1){
                        
                        space51.appendChild(ship51);
                        space52.appendChild(ship52);
                        space53.appendChild(ship53);
                        space54.appendChild(ship54);
                }
        
                if((largeship[0] - largeship[1]) == 1){
                        ship51.className += " Left"
                        ship52.className += " Left"
                        ship53.className += " Left"
                        ship54.className += " Left"
                        space51.appendChild(ship51);
                        space52.appendChild(ship52);
                        space53.appendChild(ship53);
                        space54.appendChild(ship54);
                }
        
                if((largeship[0] - largeship[1]) == -7){
                        ship51.className += " Down"
                        ship52.className += " Down"
                        ship53.className += " Down"
                        ship54.className += " Down"
                        space51.appendChild(ship51);
                        space52.appendChild(ship52);
                        space53.appendChild(ship53);
                        space54.appendChild(ship54); 
                }
        
                if((largeship[0] - largeship[1]) == 7){
                        ship51.className += " Up"
                        ship52.className += " Up"
                        ship53.className += " Up"
                        ship54.className += " Up"
                        space51.appendChild(ship51);
                        space52.appendChild(ship52);
                        space53.appendChild(ship53);
                        space54.appendChild(ship54); 
                }

        }
}



var clicks = 0;
var hits = 0;
var F = 1;
var i = 1;
var E = 0;

var main = function () {
    "use strict";

    
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
                        hits++;
                        //send the message here for a click1
                }
        }

                if(E == 0) {
                        miss.className += ' visible';
                        $element.append(miss);
                        F++
                        //send the message here for a click2
                }
                
                shots[clicks] = id;
                clicks++;
                        //hit trackers
                        if(hits == 14){
                                alert("winner, winner chicken dinner!");
                        }
                        if(loss == 14){
                                alert("you lost fam");
                        }
                        console.log(clicks);

                                //message sender for shots
                                var Outmail = Messages.O_Shot;
                                Outmail.data = element.id;
                                socket.send(JSON.stringify(Outmail));

                                for(var i = 0; i < 49; i++){
                                                document.querySelector(i + 'r').disable;
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



