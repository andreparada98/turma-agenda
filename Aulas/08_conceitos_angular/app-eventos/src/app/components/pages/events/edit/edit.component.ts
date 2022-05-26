import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Evento } from 'src/app/interfaces/evento';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.scss']
})
export class EventsEditComponent implements OnInit {
	evento: Evento = {
		descricao: '',
		data: '',
		preco: NaN
	};

	constructor(
		private webservice: WebserviceService,
		private router: Router,
		private route: ActivatedRoute,
		private location: Location
	) { }

	ngOnInit(): void {
		const id = this.route.snapshot.params['id'];
		this.webservice.getEvento(id).subscribe(evento => {
			this.evento = evento;
			this.evento.data = moment(evento.data).format('YYYY-MM-DD')
		})
	}

	alterar(evento: Evento): void {
		this.webservice.putEvento(evento).subscribe(() => {
			this.router.navigate(['/eventos']);
		})
	}

	cancelar(): void {
		this.location.back()
	}
}
