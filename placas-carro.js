//Explicação de aplicação de Regex na prática.

let placaCarros = new Array();


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

function populaPlacaCarros(quantidadePlacas) {
    while (quantidadePlacas--) {
        placaCarros.push(gerarPlacaMercosulAleatoria());
    }
}

function imprimirElementosValidos(array, regex) {
    array.forEach((element) => {
        regexPlacaMercosul.test(element) ? console.log(`%c ${element} - OK\t\t\t`, 'background: #2ECC71; color: #212F3D') : console.log(`%c ${element} - ERRO (Fora do padrão)\t\t\t`, 'background: #F5B7B1; color: #212F3D');
    });
};


function init() {
    //Inserção de placas fora do padrão
    placaCarros.push('!%$42AA');
    placaCarros.push('AAA2A542');
    placaCarros.push('A422C2');
    placaCarros.push('AJK42');
    placaCarros.push('AH-S2C2');
    placaCarros.push('AAA1235');
    placaCarros.push('ACG6657677');
    placaCarros.push('ASDY23V');
    placaCarros.push('ASFG12FSADF');

    populaPlacaCarros(350);
    imprimirElementosValidos(placaCarros, regexPlacaMercosul);
}

init();
