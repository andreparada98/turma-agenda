import fetch from 'node-fetch';
// O fetch vai representar a nossa Promise : Promise é uma promessa, algo que queremos que tenha um retorno, uma solicitação.
// O fetch garante para nós que essa promessa retorne algo

var url = "http://localhost:3000/produtos";

var produtos = {};

// fetch faz uma requisição e quando a requisição estiver pronta, ela passará para o then a resposta do retorno
fetch(url).then(response => {
    //console.log(response);
    var x = response.json();
    console.log(x);
    return x;
}).then(saida => {
    produtos = saida;
    console.log(produtos);
});

console.log(produtos);
console.log('Fim da requisição');
