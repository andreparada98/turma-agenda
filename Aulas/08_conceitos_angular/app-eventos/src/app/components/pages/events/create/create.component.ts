import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Evento } from 'src/app/interfaces/evento';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
	selector: 'app-events-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.scss']
})
export class EventCreateComponent implements OnInit {
	evento: Evento = {
		descricao: '',
		data: '',
		preco: NaN
	};
	titlePage: string = '';
	btnSalvar: string = '';

	constructor(
		private location: Location,
		private webservice: WebserviceService,
		private route: ActivatedRoute,
		private router: Router,
		private title: Title
	) { }

	ngOnInit(): void {
		const id = this.route.snapshot.params['id'];
		if (id) {
			this.titlePage = 'Editar Evento';
			this.btnSalvar = 'Alterar Evento';

			this.webservice.getEvento(id).subscribe(evento => {
				this.evento = evento;
				this.evento.data = moment(evento.data).format('YYYY-MM-DD')

				this.title.setTitle(`${this.titlePage} - ${evento.descricao}`)
			})
		} else {
			this.titlePage = 'Cadastro de Evento';
			this.btnSalvar = 'Cadastrar Evento';
			this.title.setTitle(`${this.titlePage}`)
		}
	}

	salvarEvento(evento: Evento): void {
		if (evento._id) {
			this.alterar(evento);
		} else {
			this.cadastrar(evento);
		}
	}

	cadastrar(evento: Evento): void {
		this.webservice.postEvento(evento).subscribe(() => {
			this.router.navigate(['/eventos'])
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
