export const environment = {
	production: true,
	featureFlag: {
		showLog: false,
		shared: {
			menu: {
				home: true,
				eventos: {
					pai: true,
					lista: true,
					cadastrar: false
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
