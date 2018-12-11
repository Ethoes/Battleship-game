(function(exports){

    exports.T_Game_Won = {
        type: "Game won"
    };
    exports.S_Game_Won = JSON.stringify(exports.O_Game_Won);

    exports.T_Shot = "SHOT_PLACE";
    exports.O_Shot = {
        type: exports.T_Shot,
        data: null
    };

    exports.T_Set_Field = "FIELD" 
    exports.O_Set_Field = {
        type: exports.T_Set_Field,
        data: null
    };

    exports.T_Set_Field_B = "FIELDB" 
    exports.O_Set_Field_B = {
        type: exports.T_Set_Field_B,
        data: null
    };

}(typeof exports === "undefined" ? this.Messages = {} : exports));
