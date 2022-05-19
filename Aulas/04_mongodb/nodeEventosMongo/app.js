var express = require('express');
// Não precisa ser o mesmo nome, apenas aplicamos a boa prática de manter o require com o nome da variavel da aplicação, dessa forma utilizaremos a instancia do express para criar a aplicação

var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

// app será nossa instancia e aplicação de express
app = express();
// Essa variável executará o que significa o próprio módulo do express, e então configuraremos a nossa aplicação

app.set('views', __dirname + '/views');
// Existe uma constante do express chamada 'views', nós não inventamos esse nome
// esse comando significa que a nossa aplicação está setando/configurando o caminho aonde as views da aplicação devem ser lidas, logo nossas views não podem ficar em qualquer lugar, elas terão um lugar específico para ficarem

app.set('models', __dirname + '/models');
app.set('controllers', __dirname + '/controllers');

app.set('view engine', 'ejs');
// 'view engine' define o mecanismo de tipo de arquivo de view que utilizaremos na nossa aplicação

app.use(express.static(__dirname + '/public'));
// configuramos com o .use o caminho de pastas de arquivos estáticos da nossa aplicação express

app.use(cookieParser('nodeEventos'));
app.use(expressSession());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // para configurar caracteres especiais

load('models').then('controllers').then('routes').into(app);
// usamos o 'load' para carregar em ordem contrária ao carregamento para deixar 'preparado' tudo que nossa aplicação precisa, por isso o load começa com models, depois controllers, depois rotas (que compreendem renderização de view) na aplicação

// Usaremos o listen para rodar nossa aplicação/servidor
// Assim como o exemplo do node que fizemos anteriormente, o Express utiliza o 'listen' para rodar o servidor e rodar a aplicação
// O Express encapsula o módulo de http e então ele consegue utilizar o listen no 'app'
app.listen(3001, function () {
	console.log('Aplicação rodando!');
});
