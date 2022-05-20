module.exports = function (app) {
	// criamos o módulo e exportamos ele usando a aplicação 'app' como referencia
	// criamos um objeto aonde podemos ter 'N' actions (funções/propriedades) no objeto, que será o 'HomeController'
	// criamos as action's dentro do objeto pensando nas possiveis entradas e saidas que teremos de respostas das solicitações

	var Usuario = app.models.usuarios;

	var HomeController = {
		// action - toda estrutura tem a 'function' com request e response
		index: function (request, response) {
			// quando a rota pegar a requisição de get do browser na rota '/', iremos carregar a action 'index' q por sua vez responderá e renderizará a view 'home(pasta)/inicio(arquivo ejs)'
			response.render('home/login');
			// o response.render renderiza uma tela baseado no caminho de possivel pasta e arquivo ejs - que está na pasta de views
		},
		login: function (request, response) {
			// obter as informações dos campos de entrada
			// request para pegar os dados do bodyParser
			var usuario = request.body.usuario;
			// o usuario declarado acima é baseado nos dados de formulário da tela de login, não tem a ver com o Schema dos dados do usuário

			// o método 'findOne' busca baseado no objeto passado dados que batam com os critérios de informação. Caso seja encontrado mais que um, ele trará o primeiro dado encontrado na ordem natural dos dados
			Usuario.findOne(usuario).exec(function (erro, itemEncontrado) {
				if (erro) {
					console.error("Erro: " + erro);
					response.redirect('/');
				} else {
					// em caso de sucesso, o 'itemEncontrado' são os dados do usuário registrados no banco
					console.log(itemEncontrado);
					request.session.usuarioSession = itemEncontrado;
					response.redirect('inicio');
				}
			});

		},
		logout: function (request, response) {
			// precisamos destruir a sessão para não armazenar mais as informações do usuário
			request.session.destroy();
			response.redirect('/');
		}
	};

	// por fim, depois de declarar o objeto, iremos 'retornar' e disponibilizar para a exportação o objeto completo
	return HomeController;
};
