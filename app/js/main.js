$(function(){

    $('.header__btn').on('click', function() {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });
    $('.rightside-menu__close').on('click', function() {
        $('.rightside-menu').addClass('rightside-menu--close');
    });

//SLIDER main//
    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000
    });

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        },
        
    });
})