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

//IMC
function imcCalc() {

    let peso = document.querySelector('input[name=peso]').value;
    let altura = document.querySelector('input[name=altura]').value;
    let result = document.querySelector('#result');

    if (peso != '' && altura != '') {
        p = parseFloat(peso.replace(',', '.'));
        a = parseFloat(altura.replace(',', '.'));

        let imc = p / Math.pow(a, 2);

        if (isNaN(imc))
            result.innerHTML = 'Digite o peso e altura corretamente';
        else {
            result.innerHTML = `Resultado: ${imc.toFixed(1)}`;

            document.querySelector('input[name=peso]').value = '';
            document.querySelector('input[name=altura]').value = '';
        }

    } else {
        result.innerHTML = 'Digite o peso e altura corretamente';
    }
}