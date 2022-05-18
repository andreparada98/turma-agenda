module.exports = function (app) {
    // criamos o módulo e exportamos ele usando a aplicação 'app' como referencia
    // criamos um objeto aonde podemos ter 'N' actions (funções/propriedades) no objeto, que será o 'HomeController'
    // criamos as action's dentro do objeto pensando nas possiveis entradas e saidas que teremos de respostas das solicitações

    var HomeController = {
        // action
        index: function (request, response) {
            // quando a rota pegar a requisição de get do browser na rota '/', iremos carregar a action 'index' q por sua vez responderá e renderizará a view 'home(pasta)/inicio(arquivo ejs)'
            response.render('home/inicio');
        }
    };

    // por fim, depois de declarar o objeto, iremos 'retornar' e disponibilizar para a exportação o objeto completo
    return HomeController;
};