module.exports = function (app) {
	var Usuario = app.models.usuarios;

	var UsuariosController = {
		usuarios: function (request, response) {
			var params = { usuarioSession: request.session.usuarioSession };

			response.render('usuarios/inicio', params);
		},
		cadastroUsuario: function (request, response) {
			var params = { usuarioSession: request.session.usuarioSession };

			response.render('usuarios/cadastro', params);
		},
		cadastrarUsuario: function (request, response) {
			var usuario = request.body.usuario;

			if ((usuario.senha.trim() != usuario.confirmarSenha.trim()) || usuario.nome.trim().length == 0 || usuario.email.trim().length == 0) {
				response.redirect('/cadastroUsuario');
			} else {
				var novoUsuario = {
					nome: usuario.nome,
					senha: usuario.senha,
					email: usuario.email
				};

				// pegamos o modelo de Usuario e usamos o comando de create para gerar um novo cadastro na coleção de 'usuarios'
				// usando create, passamos o objeto com as informações a serem salvas e passamos uma função de callback para retornar possivel erro ou o item criado na coleção
				Usuario.create(novoUsuario, function (erro, itemCriado) {
					if (erro) {
						console.error("Erro: " + erro);
						response.redirect('/cadastroUsuario');
					} else {
						console.log('Usuário criado: ' + itemCriado);
						response.redirect('/usuarios');
					}
				});
			}
		}
	};

	return UsuariosController;
};
