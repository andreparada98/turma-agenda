import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/interfaces/evento';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
	selector: 'app-see',
	templateUrl: './see.component.html',
	styleUrls: ['./see.component.scss']
})
export class EventsSeeComponent implements OnInit {
	evento!: Evento;

	constructor(
		private route: ActivatedRoute,
		private webservice: WebserviceService
	) {
		this.evento = {
			_id: "",
			descricao: "",
			data: "",
			preco: NaN
		}
	}

	ngOnInit(): void {
		const id = this.route.snapshot.params['id'];

		this.webservice.getEvento(id).subscribe(evento => {
			this.evento = evento;
		})
	}

}
