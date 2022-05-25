import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../interfaces/evento';

@Injectable({
	providedIn: 'root'
})
export class WebserviceService {
	urlEventos: string = "http://localhost:3200/eventos";

	// declaramos como 'private' o http para disponibilizar o uso desse serviço para a classe WebserviceService, dessa maneira podendo realizar requisições (get, post, put...)
	constructor(private http: HttpClient) { }

	// para criarmos nosso método para listar eventos, criamos a função do tipo Observable
	// quando pensamos em um webservice e em requisições, pensamos em Promise; e no Angular temos algo que funciona da mesma maneira, mas chamamos de Observable
	// quando criamos a função do tipo Observable, ela automaticamente aguarda um retorno, e o retorno será diretamente a chamada da URL da API que criamos que retornará a listagem de eventos
	// O Observable utiliza o modelo da Interface de Evento para aguardar um retorno exato de lista de eventos baseado na definição feita na interface, o que define que será uma lita são os [] na frente da palavra 'Evento'
	// Como Observable espera um retorno, declaramos dentro da função o return já chamando fiz http uma requisição get com a URL de Eventos, e esperamos que essa requisição retorne também uma lista de Eventos
	public getEventos(): Observable<Evento[]> {
		return this.http.get<Evento[]>(this.urlEventos);
	}
}
