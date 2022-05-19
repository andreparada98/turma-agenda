module.exports = function (app) {
	// criamos o módulo e exportamos ele usando a aplicação 'app' como referencia
	// criamos um objeto aonde podemos ter 'N' actions (funções/propriedades) no objeto, que será o 'HomeController'
	// criamos as action's dentro do objeto pensando nas possiveis entradas e saidas que teremos de respostas das solicitações

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
			var nome = request.body.usuario.nome;
			var senha = request.body.usuario.senha;

			// simulação de login
			if (nome == 'admin' && senha == 'admin') {
				// caso o login tenha sucesso, vamos armazenar as informações do usuário
				request.session.usuarioSession = request.body.usuario;
				// request.session cria uma sessão, no caso o nome da nossa sessão é 'usuarioSession' e armazena nela um valor, o caso o objeto inteiro do usuario
				response.redirect('inicio');
			} else {
				// response.redirect ele redireciona encaminhando um 'processamento' pra uma rota
				response.redirect('/');
			}
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
