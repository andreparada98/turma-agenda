module.exports = function (app) {
	var Usuario = app.models.usuarios;

	// listar todos os usuarios
	app.get('/usuarios', function (request, response) {
		Usuario.find(function (erro, usuarios) {
			if (erro) {
				response.json(erro);
			} else {
				response.json(usuarios);
			}
		});
	});

	// pegar somente 1 usuarios
	app.get('/usuarios/:id', function (request, response) {
		var id = request.params.id;

		Usuario.findById(id, function (erro, usuarioEncontrado) {
			if (erro) {
				response.json(erro);
			} else {
				response.json(usuarioEncontrado);
			}
		});
	});

	//criar um novo usuario
	app.post('/usuarios', function (request, response) {
		var usuario = {
			'nome': request.body.nome,
			'email': request.body.email,
			'senha': request.body.senha
		};

		Usuario.create(usuario, function (erro, usuarioCriado) {
			if (erro) {
				response.json(erro);
			} else {
				response.json(usuarioCriado);
			}
		});
	});

	// atualizar um usuario
	app.put('/usuarios/:id', function (request, response) {
		var id = request.params.id;

		Usuario.findById(id, function (erro, usuarioEncontrado) {
			if (erro) {
				response.json(erro);
			} else {
				usuarioEncontrado.nome = request.body.nome;
				usuarioEncontrado.email = request.body.email;
				usuarioEncontrado.senha = request.body.senha;

				usuarioEncontrado.save(function (erro, usuarioAtualizado) {
					if (erro) {
						response.json(erro);
					} else {
						response.json(usuarioAtualizado);
					}
				});
			}
		});
	});

	app.delete('/usuarios/:id', function (request, response) {
		var id = request.params.id;

		Usuario.findById(id, function (erro, usuarioEncontrado) {
			if (erro) {
				response.json(erro);
			} else {
				Usuario.deleteOne(usuarioEncontrado, function (erro, usuarioApagado) {
					var nome = usuarioEncontrado.nome;

					if (erro) {
						response.json(erro);
					} else {
						response.send(`Usuario ${nome} removido`);
					}
				});
			}
		});
	});
};
