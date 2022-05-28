export const environment = {
	production: true,
	webservice: {
		urlEventos: "http://prod.com.br/eventos",
		urlUsuarios: "http://prod.com.br/usuarios"
	},
	featureFlag: {
		showLog: false,
		shared: {
			menu: {
				home: true,
				eventos: {
					pai: true,
					lista: true,
					cadastrar: true
				}
			}
		},
		pages: {
			eventos: {
				listaEventos: {
					btnVer: false,
					btnEditar: true,
					btnDeletar: false
				}
			}
		}
	}
};
