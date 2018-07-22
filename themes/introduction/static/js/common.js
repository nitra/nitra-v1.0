$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip()

    // Modal windows
    $('.openModal').click(function(e) {
        $('.modalWindow').removeClass('is-active');
        e.preventDefault();
        let modal = $(this).attr('href');
        $(modal).find('.modal-card').niceScroll({
            cursorcolor: "#00b8d4",
            cursoropacitymin: 1,
            cursoropacitymax: 1,
            cursorwidth: "5px",
            cursorborder: "1px solid #00b8d4",
            cursorborderradius: "15px"
        });
        console.log(modal);
        $(modal).addClass('is-active');
    });
    $('#close, .modal-background').click(function() {
        $('.modalWindow').removeClass('is-active');
    });

    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        var target = this.hash;
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
        return false;
    });

    
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