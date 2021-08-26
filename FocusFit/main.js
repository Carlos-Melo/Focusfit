var $simpleCarousel = document.querySelector(".js-carousel--simple");
var $simpleCarousel2 = document.querySelector(".js-carousel--simple2");

new Glider($simpleCarousel, {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: ".js-carousel--simple-dots",
});

new Glider($simpleCarousel2, {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: ".js-carousel--simple-dots2",
});