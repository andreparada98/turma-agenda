import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TopicosService {

	constructor() { }

	getTopicos(): string[] {
		return [
			'Aula legal',
			'Conceitos NodeJS',
			'MVC com Express.js',
			'Webservice - criação e consumo',
			'MongoDB',
			'Angular'
		]
	}
}
