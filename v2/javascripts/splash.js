var main = function () {
    "use strict";

    $("main button").on("click", function () {
        console.log("sup mofo");

        $.post("splash.html", {}, function (response) {
            console.log("message send");
            console.log(response);
        })
    })

};


$(document).ready(main);