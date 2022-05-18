module.exports = function (app) {
	var EventosController = {
		inicio: function (request, response) {
			response.render('eventos/inicio');
		}
	};

	return EventosController;
};
