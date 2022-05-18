module.exports = function (app) {
	// vamos criar uma variavel para referenciar nosso controller
	var homec = app.controllers.homec;
	var eventosc = app.controllers.eventosc;

	// agora pegamos o objeto app e como queremos 'interceptar' as requisições, vamos validar a requisição do browser de 'get'
	// inicialmente declararemos somente uma /
	app.get('/', homec.index);
	app.post('/login', homec.login);
	app.get('/logout', homec.logout);
	app.get('/inicio', eventosc.inicio);
};
