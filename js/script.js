$(document).ready(function() {
    //menu burger
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu, .header__btn').toggleClass('active');
        $('body').toggleClass('lock');
    });

    //spoiler list
    $('.questions__title').click(function(event) {
        if ($('.questions').hasClass('faq__questions')) {
            $('.questions__title, .questions__item').not($(this)).removeClass('active-quest');
            $('.questions__text').not($(this).next()).slideUp(600);
        }
        $(this).addClass('active-quest').next().slideDown(600);
        $(this).parent().addClass('active-quest');
    });

});


const swiper = new Swiper('.team-swiper', {
    // Optional parameters
    loop: true,
    autoHeight: true,
    speed: 800,
    spaceBetween: 30,
    slidesPerView: 4,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-arrow-next',
      prevEl: '.swiper-arrow-prev',
    },

    breakpoints: {
        375 : {
            slidesPerView: 1.2,
            simulateTouch: true,
            touchRatio: 1,
        },
        475 : {
            slidesPerView: 1.5,
        },
        575 : {
            slidesPerView: 1.8,
        },
        675 : {
            slidesPerView: 2.3,
        },
        1075 : {
            slidesPerView: 2.5,
        },
        1220 : {
            slidesPerView: 2.8,
        }
    },
  
  });

const swiper_carousel = new Swiper('.testimonials-swiper', {
    loop: true,
    speed: 800,
    slidesPerView: 'auto',
    spaceBetween: 0,
    centeredSlides: true,
    slideToClickedSlide: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
  
  });