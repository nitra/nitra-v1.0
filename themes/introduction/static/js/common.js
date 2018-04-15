$(document).ready(function() {

    $(".ninja-btn").click(function() {
        $(this).toggleClass("active");
        $("#side-nav").toggleClass("active");
        $("#content").toggleClass("active");
    });

    $("#content").click(function() {
        if ($(this).hasClass("active")) {
            $(".ninja-btn").toggleClass("active");
            $(this).toggleClass("active");
            $("#side-nav").toggleClass("active");
        } else {
            console.log('.');
        }
    });

});





