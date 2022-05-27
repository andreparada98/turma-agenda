import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class LogService {
	showLog = environment.featureFlag.showLog;

	constructor() { }

	show(type: string, ...value: any[]) {
		const hora = `> ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}`;

		if (this.showLog) {
			switch (type) {
				case 'error':
					console.error(hora);
					console.error(value);
					break;
				case 'info':
					console.info(hora);
					console.info(value);
					break;
				case 'warning':
					console.warn(hora);
					console.warn(value);
					break;
				default:
					console.log(hora);
					console.log(value);
					break;
			}
		}

		if (type === 'error' || type === 'info') {
			/*
				analytics:
				- categoria: error, info (success), warning (processing)
				- ação: 'listComponent | constructor', 'listComponent | ngOnInit', 'listComponent | getEventos | if resposta not null'
				- rótulo: 26/05/2022 19:57:22 | IP Address | email | objeto de retorno de sucesso / objeto de erro

			 */
		}
	}
}
