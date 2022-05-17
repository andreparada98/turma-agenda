// Alguém sabe a diferença entre let, var e const?
// const é uma constante que uma vez declarado o valor ele não é alterado
// var é uma variável, logo o seu valor é alterável, mas ele funciona num escopo 'global'
// let é uma variável que também pode ter seu valor alterável, mas ele funciona dentro de escopos/contexto, exemplo:
// se criado dentro de um if, ele funcionará somente no if e não fora dele
/*
    var idade = 10;

    for (let index = 0; index < array.length; index++) {
        let novoNumero = index;
        const element = array[index];
    }
    uso do novoNumero e index - não funciona
    uso de idade funciona fora e dentro do for
*/

const nome = 'Mariana';
var idade = 32;
let curso = 'Node e Angular';

console.log('Meu nome é ' + nome);
console.log('Minha idade é ' + idade);
console.log('O curso que estou fazendo é ' + curso);