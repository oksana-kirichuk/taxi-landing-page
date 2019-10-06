let width = $(window).width();

if (width > 600) {
    let fpApi = $.fn.fullpage;

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

            let $menu = $('.fixed-menu');
            let $fpNav = $('#fp-nav > ul > li > a > span');
            let $currentSection = $('[data-index="' + currentIndex + '"]');
            let $fpNavText = $('#fp-nav > ul > li > .fp-tooltip');

            if ($currentSection.hasClass('white')) {
                $menu.addClass('dark');
                $fpNav.css('background', '#000');
                $fpNavText.css('color', '#000');
            } else {
                $menu.removeClass('dark');
                $fpNav.css('background', '#fff');
                $fpNavText.css('color', '#fff');
            }

            let $mobileMenu = $('.open-menu');
            ($currentSection.hasClass('white')) ? $mobileMenu.addClass('dark') : $mobileMenu.removeClass('dark');
        }
    });
  
    $('[data-section-anchor]').click(function () {
        let target = $(this).attr('data-section-anchor');
        fpApi.moveTo(target);
    });
}

// Mobile menu

let dataMobile = document.querySelectorAll('[data-mobile]');
let overlay = document.querySelector('.overlay');

dataMobile.forEach(function (element) {
	element.addEventListener('click', function() {
        
        let selector = this.getAttribute('data-mobile');
        
		if (selector === 'close') {
            overlay.classList.remove('active');
            document.querySelector('.mobile-nav').classList.remove('active');
		} else {
			overlay.classList.add('active');
			document.querySelector('.mobile-nav').classList.add('active');
		}
	});
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



