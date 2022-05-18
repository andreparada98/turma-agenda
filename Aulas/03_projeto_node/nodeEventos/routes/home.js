module.exports = function (app) {
    // vamos criar uma variavel para referenciar nosso controller
    var homec = app.controllers.homec;

    // agora pegamos o objeto app e como queremos 'interceptar' as requisições, vamos validar a requisição do browser de 'get'
    // inicialmente declararemos somente uma /
    app.get('/', homec.index);
    app.get('/abc', homec.index);
};