// Nesse arquivo escreveremos funções e objetos a serem 'expostos'/exportados
var valor1 = 10;
var valor2 = 5;

function calcularSoma(x, y) {
    return x + y;
}

var calculo = calcularSoma(valor1, valor2);
// console.log('Minha soma de ' + valor1 + '+' + valor2 + ' deu: ' + calculo);
// console.log(`Minha soma de ${valor1}+${valor2} deu: ${calculo}`);
// console.log(`Minha soma de ${valor1}+${valor2} deu: ${calcularSoma(valor1, valor2)}`);

// Primeira exportação
exports.somar = calcularSoma;
// somar é um alias para a função calcularSoma

exports.multiplicar = function (x, y) {
    return x * y;
};

exports.alunos = [
    {
        nome: 'Andre',
        idade: 23
    },
    {
        nome: 'Camilo',
        idade: 25
    },
    {
        nome: 'Rennan',
        idade: 29
    }
];

// Função tradicional
exports.verificaTamanho = function (x) {
    return x.length;
};

// Arrow function
exports.verificaTamanho1 = (x) => x.length;
exports.verificaTamanho2 = x => x.length;

// Em caso de função sem parametro e sem return
exports.fn = function () {
    console.log('oi');
};

exports.fn1 = () => console.log('oi');

// Função com multiplas linhas
exports.multiplasLinhas = function (texto) {
    let novoTexto = texto + "!!";
    console.log(novoTexto);
    return novoTexto;
};

exports.multiplasLinhas1 = (texto) => {
    let novoTexto = texto + "!!";
    console.log(novoTexto);
    return novoTexto;
};