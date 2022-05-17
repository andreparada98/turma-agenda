var colecao = require("./colecoes");

// Obtendo um subconjunto da lista de nomes, com base em um critério
var filtroNomes = colecao.nomes.filter(n => n.includes('lin'));

for (const nome of filtroNomes) {
    console.log(`Nome: ${nome}`);
    console.log('*********');
}

// Obtendo um subconjunto da lista de cursos
var filtroCursos1 = colecao.cursos.filter(c => c.ch > 30);
var filtroCursos2 = colecao.cursos.filter(c => c.periodo == "Integral");
var filtroCursos3 = colecao.cursos.filter(c => c.ch < 20 && c.periodo == "Diurno");