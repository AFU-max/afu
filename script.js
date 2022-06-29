$(document).ready(function() {
    $('.slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 500,
        easing: 'ease',
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        waitForAnimate: false,
        centerMode: true,
        variableWidth: true,

    });
});