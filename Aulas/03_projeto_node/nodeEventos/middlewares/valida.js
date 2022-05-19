// o middleware para validação funciona baseado na requisição que será 'interceptada'
// basedo nessa 'intercepção' que será feita, podemos direcionar uma resposta
// e também podemos mandar seguir se estiver tudo certo
module.exports = function (request, response, next) {
	// o if valida se a sessão NÃO É VALIDA
	if (!request.session.usuarioSession) {
		// e se não for valida, ele redireciona pra tela inicial
		return response.redirect('/');
	}
	// caso seja valida, é permitido seguir o fluxo que foi interceptado
	return next();
};
