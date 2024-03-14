


/**************************************/


$(document).on("click", "#backhomeclicker", function () {
    $("form").addClass("offscreenemail").removeClass("onscreenemail");
});

$(document).on("click", "#email", function () {
    $("form").addClass("onscreenemail").removeClass("offscreenemail");
});

$(document).on("click", "#backhomeclicker", function () {
    $(".lines").addClass("offscreenlines").removeClass("onscreenlines");
});

$(document).on("click", "#email", function () {
    $(".lines").addClass("onscreenlines").removeClass("offscreenlines");
});



/************************************/


$(document).on("click", "#email", function () {
    $("#aboutme").addClass("fadeoutemail").removeClass("fadeinemail");
})

$(document).on("click", "#backhomeclicker", function () {
    $("#aboutme").addClass("fadeinemail").removeClass("fadeoutemail");
})


/*************************************/



