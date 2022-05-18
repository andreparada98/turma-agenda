var http = require('http'); // Módulo para criar aplicação que vai funcionar como servidor web
var fs = require('fs'); // Módulo de file system que permite ler e gravar arquivos
var url = require('url'); // Capta a URL e trabalha as solicitações e parametros

var server = http.createServer(function (request, response) {
    // Vamos usar o 'request' para pegar informações da URL
    var url_params = url.parse(request.url);
    // Vamos pegar o nome do caminho do arquivo e salvar na variavel 'caminho'
    var caminho = url_params.pathname;

    // contante do nome -> __dirname
    // retorna o local aonde está sendo executado o código
    fs.readFile(__dirname + caminho, function (erro, conteudo) {
        if (erro) {
            // Nesse cenário, vamos tratar um cabeçalho para exibir o erro 404 de não encontrado como resposta do servidor
            // Importante: a escrita tem que ser exatamente como ficará abaixo, para que o servidor compreenda o cabeçalho da maneira esperada
            response.writeHead(404, {
                "Content-Type": "text/html"
            });
            response.write('<h1>Pagina nao encontrada</h1>');
        } else {
            response.writeHead(200, {
                "Content-Type": 'text/html'
            });
            response.write(conteudo);
        }
        response.end(); // finaliza a tratativa da resposta;
    });
});

server.listen(3000, function () {
    console.log('O meu servidor está no ar!');
});