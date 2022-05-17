var funcoes = require('./funcoes');

var valor1 = 20;
var valor2 = 4;

var soma = funcoes.somar(valor1, valor2);

console.log(`Minha soma de ${valor1}+${valor2} deu: ${soma}`);

console.log('------------------------------');

var multiplica = funcoes.multiplicar(valor1, valor2);

console.log(`Minha multiplicação de ${valor1}x${valor2} deu: ${multiplica}`);

console.log('------------------------------');

var listaAlunos = funcoes.alunos;
console.log('Quantidade de alunos: ' + listaAlunos.length);

console.log('------------------------------');

for (let index = 0; index < listaAlunos.length; index++) {
    //console.log('Posição: ' + index);
    //console.log(listaAlunos[index]);
    //console.log('------------------------------');
    let aluno = listaAlunos[index];
    console.log(`Nome: ${listaAlunos[index].nome}`);
    console.log(`Idade: ${aluno.idade}`);
    console.log('------------------------------');
}