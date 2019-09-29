var width = $(window).width();

if (width > 600) {
    var fpApi = $.fn.fullpage;

    $('.fullpage-container').fullpage({

        responsiveHeight: 600,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Главная', 'История','Водителям','Бонусы', 'Автопарк','FAQ', 'Отзывы', 'Контакты'],
        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        controlArrows: false,
        lockAnchors: true,

        onLeave: function(prevIndex, currentIndex, direction) {

            var $menu = $('.fixed-menu');
            var $fpNav = $('#fp-nav > ul > li > a > span');
            var $currentSection = $('[data-index="' + currentIndex + '"]');
            var $fpNavText = $('#fp-nav > ul > li > .fp-tooltip');

            if ($currentSection.hasClass('white')) {
                $menu.addClass('dark');
                $fpNav.css('background', '#000');
                $fpNavText.css('color', '#000');
            } else {
                $menu.removeClass('dark');
                $fpNav.css('background', '#fff');
                $fpNavText.css('color', '#fff');
            }

            var $mobileMenu = $('.open-menu');
            ($currentSection.hasClass('white')) ? $mobileMenu.addClass('dark') : $mobileMenu.removeClass('dark');
        }
    });
  
    $('[data-section-anchor]').click(function () {
        var target = $(this).attr('data-section-anchor');
        fpApi.moveTo(target);
    });
}

// Mobile menu

$('[data-mobile]').click(function () {
    var selector = $(this).attr('data-mobile');

    if (selector === 'close') {
        $('.overlay').removeClass('active');
        $('.mobile-nav').removeClass('active');
    } else {
        $('.overlay').addClass('active');
        $('.mobile-nav').addClass('active');
    }
});

// Accordion 
  
$('.accordion-content .accordion-title').click(function () {
    $('.accordion-content .accordion-title.active').removeClass('active').siblings('.accordion-body').slideUp();
    $(this).addClass('active').siblings('.accordion-body').slideDown();
});
  
  
// AOS Animation

AOS.init();
  
// LightCase.js

$('a[data-rel^=lightcase]').lightcase({
    showTitle: true,
    swipe: true
});
  
// Slick.js

$('.slider-container').slick({
    dots: true,
    arrows: true,

    responsive: [
    {
        breakpoint: 1200,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 900,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }
    ]
});

// Modal window

$('.modal-container').modalPlugin({
    animationSpeed: 700,
    dataAttr: 'data-modal'
});

