var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(function (request, response, next) {
	response.header("Access-Control-Allow-Origin", "*");
	// colocamos quem são as origens permitidas para acessar esse webservice
	// se quiser que todos tenha acesso, colocamos o * (asterisco) no valor
	// se não quiser dar acesso geral, temos que colocar os dominios permitidos separados com virgula: impacta.com, impacta.com.br, fit.com

	response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	// essa configuração valida quais cabeçalhos vem na requisição para permitir acesso ou não

	response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

	next();
});

global.db = mongoose.connect('mongodb://localhost:27017/turmaAgenda', {
	useNewUrlParser: true,
	useUnifiedTopology: true
}); // esses parametros são apenas sugestões para não apresentar erros no console

load('models').then('controllers').into(app);

// apenas uma mensagem para o usuário ler na tela na URL '/'
app.get('/', function (request, response) {
	response.send('Webservice no ar!');
});

app.listen(3200, function () {
	console.log("Minha API no ar!");
});
