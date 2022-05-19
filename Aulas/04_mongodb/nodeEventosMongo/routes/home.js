module.exports = function (app) {
	// vamos criar uma variavel para referenciar nosso controller
	var valida = require('./../middlewares/valida');
	var homec = app.controllers.homec;
	var eventosc = app.controllers.eventosc;
	var usuariosc = app.controllers.usuariosc;

	// agora pegamos o objeto app e como queremos 'interceptar' as requisições, vamos validar a requisição do browser de 'get'
	// inicialmente declararemos somente uma /
	app.get('/', homec.index);
	app.post('/login', homec.login);
	app.get('/logout', homec.logout);
	// o valida é usado como segundo parametro condicionalmente para verificar se pode acionar a action
	app.get('/inicio', valida, eventosc.inicio);
	app.get('/cadastroEvento', valida, eventosc.cadastroEvento);
	app.post('/cadastrarEvento', eventosc.cadastrarEvento);

	app.get('/usuarios', valida, usuariosc.usuarios);
	app.get('/cadastroUsuario', valida, usuariosc.cadastroUsuario);
	app.post('/cadastrarUsuario', usuariosc.cadastrarUsuario);
};
