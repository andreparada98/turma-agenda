import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-event-binding',
	templateUrl: './event-binding.component.html',
	styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {
	escola: string = "Impacta";

	// o constructor tem o papel de ser executado quando o componente é criado
	// é uma função especial para ser processada quando o componente passa a existir e então sua tarefa se torna receber objetos através de injeção de dependencia, compreendendo o que aquele componente precisa ter para existir
	constructor() { }

	// o ngOnInit é uma propriedade (função) da Interface OnInit que funciona/é ativada quando o componente é incializado
	// em INTERFACES temos apenas DEFINIÇÕES
	ngOnInit(): void {
	}

	alterarTexto(): void {
		this.escola = "Impacta Tecnologia";
	}
}
