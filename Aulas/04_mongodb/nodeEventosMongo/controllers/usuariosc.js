module.exports = function (app) {
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
		}
	};

	return UsuariosController;
};
