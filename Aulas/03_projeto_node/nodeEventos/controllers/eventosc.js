module.exports = function (app) {
	var EventosController = {
		inicio: function (request, response) {
			// antes de mandar renderizar, vamos pegar a informação do usuário da sessão e armazenar em um objeto que será passado para a renderização
			var params = { usuarioSession: request.session.usuarioSession };

			response.render('eventos/inicio', params);
		},
		cadastroEvento: function (request, response) {
			var params = { usuarioSession: request.session.usuarioSession };

			response.render('eventos/cadastro', params);
		},
		cadastrarEvento: function (request, response) {
			var evento = request.body.evento;
		}
	};

	return EventosController;
};
