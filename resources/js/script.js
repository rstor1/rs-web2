
$(document).ready(function () {

    /*Sticky navigation*/
    $('.js--section-about').waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky')
        }

    }, {
        offset: '60px;'
    });

    function checkWidth() {
        var $window1 = $(window);
        var windowsize1 = $window1.width();
        if (windowsize1 > 767) {
            $('.main-nav').css("display", "inline-block");
        } else {
            $('.main-nav').css("display", "none");
            $('.js--main-nav').slideUp();
            $('.js--nav-icon i').addClass('ion-android-menu');
        }
    }

    /*Scroll on buttons*/

    /*Navigation scroll*/
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    var _$window = $(window);
                    var _windowsize = _$window.width();
                    if (_windowsize < 767) { // smaller then slide up the menu and put menu back instead of X icon
                        $('.js--main-nav').slideUp();
                        $('.js--nav-icon i').addClass('ion-android-menu');
                    }
                    return false;
                }
            }
        });
    });

    /*Animations on scroll*/
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-5').waypoint(function (direction) {
        $('.js--wp-5').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-6').waypoint(function (direction) {
        $('.js--wp-6').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    /*Mobile navigation*/
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);

        if (icon.hasClass('ion-android-menu')) {
            icon.addClass('ion-android-close');
            icon.removeClass('ion-android-menu');
        } else {
            icon.addClass('ion-android-menu');
            icon.removeClass('ion-android-close');
        }
    });

    $(window).resize(checkWidth); // check width to help with navigation menu

});