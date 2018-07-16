$(document).ready(function () {

    /*card hover animation*/

    $('.about-box__social, .works-box__content').css("display", "none");

    $('.about-box__card, .works-box__img').mouseenter(function () {
           $('.about-box__social, .works-box__content',this).slideToggle(400);
    });
    $('.about-box__card, .works-box__img').mouseleave(function () {
        $('.about-box__social, .works-box__content',this).slideToggle(400);
    });

    /*card hover animation*/


    $('.partners-item__carousel').bxSlider({
        captions: true,
        pager:true,
        controls: false,
        responsive: true

    });

    /*toggle*/

    $('.navigation__toggle').click(function () {
        $('.navigation__nav').slideToggle(400);
    });

    $('.navigation__close').click(function () {
        $('.navigation__nav').slideToggle(400);
    });

    /*animate*/
    $('.service-item__card').animated("fadeInUpBig");
    $('.about-box__card').animated('flipInX');
    $('.works-box__item').animated('swing');
    $('.order').animated('pulse');
    $('.order-item > .btn').animated('tada');
    $('.order-item > h5').animated('bounceInLeft');
    $('.blog-content').animated('fadeInUp');
    $('.partners-item__logo').animated("rollIn")
});