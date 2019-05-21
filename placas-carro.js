//Explicação de aplicação de Regx na prática.

let placasCarro = new Array();


//Definição do regex para placado padrão Mercosul
const regexPlacaMercosul = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/;


function getInteiroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function gerarPlacaMercosulAleatoria() {
    return String.fromCharCode(
        getInteiroAleatorio(65, 90),
        getInteiroAleatorio(65, 90),
        getInteiroAleatorio(65, 90),
        getInteiroAleatorio(48, 57),
        getInteiroAleatorio(65, 90),
        getInteiroAleatorio(48, 57),
        getInteiroAleatorio(48, 57));
}

function populaPlacasCarro(quantidadePlacas) {
    while (quantidadePlacas--) {
        placasCarro.push(gerarPlacaMercosulAleatoria());
    }
}
