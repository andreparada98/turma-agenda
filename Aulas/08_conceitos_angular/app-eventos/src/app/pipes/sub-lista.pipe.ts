import { Pipe, PipeTransform } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Pipe({
	name: 'subLista'
})
export class SubListaPipe implements PipeTransform {

	transform(eventos: Evento[], input: string): Evento[] {
		if (input) {
			var filter = eventos.filter(evento =>
				evento.descricao.toLowerCase().includes(input.toLowerCase()))
			return filter;
		} else {
			return eventos;
		}
	}

}
