$(document).ready(function () {
    var $nav = $('nav');
    var $navToggle = $('.js--nav-icon');
    var $mainNav = $('.js--main-nav');

    function updateStickyNavigation() {
        var aboutTop = $('#about').length ? $('#about').offset().top : $('.section-about').offset().top;
        $nav.toggleClass('sticky', $(window).scrollTop() >= aboutTop - 60);
    }

    /* Keep the top navigation visible after the user scrolls past the hero. */
    $(window).on('scroll', updateStickyNavigation);
    updateStickyNavigation();

    function closeMobileNav() {
        $mainNav.stop(true, true).slideUp(200).removeClass('show');
        $navToggle.attr('aria-expanded', 'false');
        $navToggle.find('i').removeClass('ion-android-close').addClass('ion-android-menu');
    }

    function checkWidth() {
        if ($(window).width() > 767) {
            $mainNav.removeAttr('style').removeClass('show');
            $navToggle.attr('aria-expanded', 'false');
        } else {
            closeMobileNav();
        }
        updateStickyNavigation();
    }

    $('a[href*="#"]:not([href="#"])').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({ scrollTop: target.offset().top }, 700);
                if ($(window).width() < 768) closeMobileNav();
                return false;
            }
        }
    });

    $('.js--wp-1').waypoint(function () { $('.js--wp-1').addClass('animated fadeIn'); }, { offset: '50%' });
    $('.js--wp-2').waypoint(function () { $('.js--wp-2').addClass('animated fadeInUp'); }, { offset: '50%' });
    $('.js--wp-3').waypoint(function () { $('.js--wp-3').addClass('animated fadeIn'); }, { offset: '50%' });
    $('.js--wp-4').waypoint(function () { $('.js--wp-4').addClass('animated fadeIn'); }, { offset: '50%' });
    $('.js--wp-5').waypoint(function () { $('.js--wp-5').addClass('animated fadeIn'); }, { offset: '50%' });
    $('.js--wp-6').waypoint(function () { $('.js--wp-6').addClass('animated fadeIn'); }, { offset: '50%' });

    $navToggle.on('click', function () {
        var isOpen = $mainNav.hasClass('show');
        if (isOpen) {
            closeMobileNav();
        } else {
            $mainNav.stop(true, true).slideDown(200).addClass('show');
            $navToggle.attr('aria-expanded', 'true');
            $navToggle.find('i').removeClass('ion-android-menu').addClass('ion-android-close');
        }
    });

    $(window).on('resize', checkWidth);
    checkWidth();
});
