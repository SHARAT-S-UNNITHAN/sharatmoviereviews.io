(function ($, document, window) {
    $(document).ready(function () {
        // Initialize mobile navigation visibility (hidden initially)
        $(".mobile-navigation").hide();

        // Toggle mobile navigation when hamburger menu is clicked
        $(".menu-toggle").on("click", function () {
            if ($(window).width() <= 768) {  // Check if screen width is mobile
                $(".mobile-navigation").stop().slideToggle();  // Toggle mobile menu visibility
            }
        });

        // Ensure mobile navigation is hidden when resizing to larger screens (desktop)
        $(window).on("resize", function () {
            if ($(window).width() > 768) {  // If the screen width is greater than 768px (desktop)
                $(".mobile-navigation").hide();  // Hide mobile menu
            }
        });

        // Search bar toggle for mobile
        $(".search-form button").on("click", function () {
            $(this).toggleClass("active");
            var $parent = $(this).parent(".search-form");
            $parent.find("input").toggleClass("active").focus();
        });

        // Cloning main menu for mobile navigation (if not already cloned)
        if ($(".mobile-navigation .menu").length === 0) {
            var mainMenu = $(".main-navigation .menu").clone();
            if (mainMenu.length) {
                $(".mobile-navigation").append(mainMenu);
            }
        }

        // Slider initialization (for desktop and mobile)
        $(".slider").flexslider({
            controlNav: false,
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
        });

        // Google map integration (if map exists)
        if ($(".map").length) {
            $('.map').gmap3({
                map: {
                    options: {
                        maxZoom: 14
                    }
                },
                marker: {
                    address: "40 Sibley St, Detroit",
                }
            }, "autofit");
        }
    });

    // Ensure functionality when window is loaded
    $(window).load(function () {

    });

})(jQuery, document, window);
