var Escola = {
    nome: 'Impacta Tecnologia',
    endereco: {
        logradouro: 'Avenida Paulista',
        numero: 1009,
        cep: '01311-100'
    },
    cursos: [
        'Javascript',
        'Node',
        'Angular',
        'Express',
        'MongoDB'
    ],
    mostrarInfos: function () {
        var texto = `
            Nome da escola é  ${this.nome}
            Endereço: ${this.endereco.logradouro}, ${this.endereco.numero}
            CEP: ${this.endereco.cep}
        `;
        return texto;
    }
};

module.exports = Escola;