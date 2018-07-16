$( document ).ready(function() {
    $('.owl-carousel').owlCarousel({

        items:1,
        loop:true,
        margin:10,
        smartSpeed:700,
        autoplay:true,
        nav:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav:false,
        dots:false,


    })



    $('.teb__pane').css("display", "none");
    $('.teb__pane:first').show();
    $('.service__list li:first').addClass('active');

    $('.service__list li').click(function () {
        $('.service__list li').removeClass('active');
        $(this).addClass('active');
        $('.teb__pane').css("display", "none");

        var selector = $ (this).find('a').attr("href");
        $(selector).fadeIn();

    })


    $(".main__offer").animated("fadeIn");
    $(".about__title").animated("fadeIn");
    $("#title").animated("fadeIn");
    $(".icon").animated("bounce");
    $(".service__list").animated("zoomIn");
    $(".card").animated("bounceInUp");
    $(".team__item").animated("fadeIn");
    $(".list-group").animated("fadeIn");
    $(".progress-bar").animated("fadeInLeft");
    $(".fun__fact").animated("bounceInRight");




});