module.exports = function (app) {
	var Evento = app.models.eventos;

	var EventosController = {
		inicio: function (request, response) {
			Evento.find(function (erro, eventosEncontrados) {
				var eventos;

				if (erro) {
					eventos = [];
					console.error('Erro: ' + erro);
				} else {
					eventos = eventosEncontrados;
					console.log(eventos);
				}

				var params = {
					usuarioSession: request.session.usuarioSession,
					listaEventos: eventos
				};

				response.render('eventos/inicio', params);
			});
		},
		cadastroEvento: function (request, response) {
			var params = { usuarioSession: request.session.usuarioSession };

			response.render('eventos/cadastro', params);
		},
		cadastrarEvento: function (request, response) {
			var evento = request.body.evento;

			if (evento.descricao.trim().length == 0) {
				response.redirect('/cadastroEvento');
			} else {
				Evento.create(evento, function (erro, itemCriado) {
					if (erro) {
						console.error("Erro: " + erro);
						response.redirect('/cadastroEvento');
					} else {
						console.log("Evento criado: " + itemCriado);
						response.redirect('/inicio');
					}
				});
			}
		}
	};

	return EventosController;
};
