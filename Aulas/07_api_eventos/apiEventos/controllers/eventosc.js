module.exports = function (app) {

	// declarando métodos para nossa webservice
	var Evento = app.models.eventos;

	// listar todos os eventos
	app.get('/eventos', function (request, response) {
		Evento.find(function (erro, eventos) {
			if (erro) {
				response.json(erro);
			} else {
				response.json(eventos);
			}
		});
	});

	// pegar somente 1 eventos
	app.get('/eventos/:id', function (request, response) { // :id representa um valor dinamico
		var id = request.params.id;

		Evento.findById(id, function (erro, eventoEncontrado) {
			if (erro) {
				response.json(erro);
			} else {
				response.json(eventoEncontrado);
			}
		});
	});

	//criar um novo evento
	app.post('/eventos', function (request, response) {
		// vamos criar a estrutura do objeto de evento baseado nos dados esperados pelo model
		var evento = {
			'descricao': request.body.descricao,
			'data': request.body.data + 'T03:00:00',
			'preco': request.body.preco
		};

		Evento.create(evento, function (erro, eventoCriado) {
			if (erro) {
				response.json(erro);
			} else {
				response.json(eventoCriado);
			}
		});
	});

	// atualizar um evento
	app.put('/eventos/:id', function (request, response) {
		var id = request.params.id;

		// vamos buscar um evento por ID para garantir que o evento existe
		Evento.findById(id, function (erro, eventoEncontrado) {
			if (erro) {
				response.json(erro);
			} else {
				// seguir para a atualização do evento manipulando o objeto de evento
				eventoEncontrado.descricao = request.body.descricao;
				eventoEncontrado.data = request.body.data + 'T03:00:00';
				eventoEncontrado.preco = request.body.preco;

				eventoEncontrado.save(function (erro, eventoAtualizado) {
					if (erro) {
						response.json(erro);
					} else {
						response.json(eventoAtualizado);
					}
				});
			}
		});
	});

	app.delete('/eventos/:id', function (request, response) {
		var id = request.params.id;

		Evento.findById(id, function (erro, eventoEncontrado) {
			if (erro) {
				response.json(erro);
			} else {
				Evento.deleteOne(eventoEncontrado, function (erro, eventoApagado) {
					var descricao = eventoEncontrado.descricao;

					if (erro) {
						response.json(erro);
					} else {
						// response.send(`Evento ${descricao} removido`);
						// o response.send exibe um retorno escrito pra 'tela'
						// quando formos de fato integrar e usar o webservice, precisamos mudar para response.json
						response.json(eventoApagado);
					}
				});
			}
		});
	});
};
