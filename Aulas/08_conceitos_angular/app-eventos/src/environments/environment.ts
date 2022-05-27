// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	webservice: {
		urlEventos: "http://localhost:3200/eventos",
		urlUsuarios: "http://localhost:3200/usuarios"
	},
	featureFlag: {
		showLog: true,
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
					btnVer: true,
					btnEditar: true,
					btnDeletar: true
				}
			}
		}
	}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
