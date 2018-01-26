(function($) {
    "use strict";

    var $navbar = $("#about"),
        y_pos = $navbar.offset().top,
        height = $navbar.height();

    var $navitems = $(".tflip");

    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > y_pos + height) {
            $navbar.addClass("navbar-fixed").animate({
                top: 0
            });

            $navitems.addClass("navitem");
        } else if (scrollTop <= y_pos) {
            $navbar.removeClass("navbar-fixed").clearQueue().animate({
                top: "-48px"
            }, 0.1);
            $navitems.removeClass("navitem").clearQueue();
        }
    });


})(jQuery, undefined);

