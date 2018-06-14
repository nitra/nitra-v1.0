$(document).ready(function() {


    //var url = $(document).location.hash;

    $('.anchorTop').waypoint( function() {
        window.location.hash = '';
    });

    $('.anchor').waypoint(function() {
        var location = $(location).attr('href');
        var elem = ($(this.element).attr('id'));
       window.location.hash = elem;

    });

    // $(".ninja-btn").click(function() {
    //     $(this).toggleClass("active");
    //     $("#side-nav").toggleClass("active");
    //     $("#content").toggleClass("active");
    // });

    // $("#content").click(function() {
    //     if ($(this).hasClass("active")) {
    //         $(".ninja-btn").toggleClass("active");
    //         $(this).toggleClass("active");
    //         $("#side-nav").toggleClass("active");
    //     } else {
    //         console.log('.');
    //     }
    // });

    $('.button-wrap .btn-primary').addClass('btn-lg');



});