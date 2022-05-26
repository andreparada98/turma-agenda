import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from 'src/app/interfaces/evento';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
	selector: 'app-events-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.scss']
})
export class EventCreateComponent implements OnInit {
	evento!: Evento;

	constructor(
		private location: Location,
		private webservice: WebserviceService,
		private router: Router
	) { }

	ngOnInit(): void {
		this.evento = {
			descricao: '',
			data: '',
			preco: NaN
		}
	}

	cadastrar(evento: Evento): void {
		this.webservice.postEvento(evento).subscribe(() => {
			this.router.navigate(['/eventos'])
		})
	}

	cancelar(): void {
		this.location.back()
	}

}
