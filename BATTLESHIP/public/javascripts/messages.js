(function(exports){

    exports.O_Game_Won = {
        type: "Game won"
    };
    exports.S_Game_Won = JSON.stringify(exports.O_Game_Won);

    exports.O_Shot = "SHOT_PLACE";
    exports.T_Shot = {
        type: exports.O_Shot,
        data: null
    };

    exports.O_Set_Field = "FIELD" 
    exports.T_Set_Field = {
        type: exports.O_Set_Field,
        data: null
    };

    exports.O_Set_Field_B = "FIELD" 
    exports.T_Set_Field_B = {
        type: exports.O_Set_Field_B,
        data: null
    };

}(typeof exports === "undefined" ? this.Messages = {} : exports));