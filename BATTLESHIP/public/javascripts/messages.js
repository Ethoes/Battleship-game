(function(exports){

    exports.T_Game_Won = {
        type: "Game won"
    };
    exports.S_Game_Won = JSON.stringify(exports.O_Game_Won);

    exports.T_Shot = "SHOT_PLACE";
    exports.O_Shot = {
<<<<<<< HEAD
        type: exports.T_Shot,
=======
        type: exports.O_Shot,
>>>>>>> 0cd48eb3e23059574a79efacc1b9f0d173d10a9a
        data: null
    };

    exports.T_Set_Field = "FIELD" 
    exports.O_Set_Field = {
<<<<<<< HEAD
        type: exports.T_Set_Field,
=======
        type: exports.O_Set_Field,
>>>>>>> 0cd48eb3e23059574a79efacc1b9f0d173d10a9a
        data: null
    };

    exports.T_Set_Field_B = "FIELDB" 
    exports.O_Set_Field_B = {
<<<<<<< HEAD
        type: exports.T_Set_Field_B,
=======
        type: exports.O_Set_Field_B,
>>>>>>> 0cd48eb3e23059574a79efacc1b9f0d173d10a9a
        data: null
    };

}(typeof exports === "undefined" ? this.Messages = {} : exports));
