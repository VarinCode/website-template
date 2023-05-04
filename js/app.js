$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 1,
        nav: true,
        dotsEach: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        navSpeed:200,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
});

