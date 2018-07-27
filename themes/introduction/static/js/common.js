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

    
    // $('.anchorTop').waypoint( function() {
    //     window.location.hash = '';
    // });

    // $('.anchor').waypoint(function() {
    //     var location = $(window.location.hash).attr('href');
    //     var elem = ($(this.element).attr('id'));
    //    window.location.hash = elem;
    // });

    (function () {
    //Find all  top,bottom and Hash of each sections
    var section = $.map($(".anchor"), function (e) {
        var $e = $(e);
        var pos = $e.position();
        return {
            top: pos.top - 100,
            bottom: pos.top - 100 + $e.height(),
            hash: $e.attr('id')
        };
    });
     //Checking scroll 
    var top = null;
    var changed = false;
    var currentHash = null;

    $(window).scroll(function () {
        var newTop = $(document).scrollTop();
       
        changed = newTop != top;
        if (changed) {
            top = newTop;
        }

    });
    //set up for Hash while start scroll and the checking only every 300ms to prevent FPS
    function step() {
        if (!changed) {
            return setTimeout(step, 100);
            console.log("End");
        }
        var count = section.length;
        var p;

        while (p = section[--count]) {
            if (p.top >= top || p.bottom <= top) {
                continue;
            }
            if (currentHash == p.hash) {
                break;
            }
            var scrollTop = $(document).scrollTop();
            window.location.hash = currentHash = p.hash;
            // prevent browser to scroll
            $(document).scrollTop(scrollTop);
        }
        setTimeout(step, 100);
    }
    setTimeout(step, 100);
})();

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