import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Evento } from 'src/app/interfaces/evento';
import { LogService } from 'src/app/services/log.service';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

	eventos: Evento[] = [];
	evento?: any;
	closeBtnName?: string;
	deleteBtnName?: string;

	constructor(public bsModalRef: BsModalRef,
		private webservice: WebserviceService,
		private http: HttpClient,
		private log: LogService) { }

	ngOnInit() {

	}

	deletar(evento: Evento): void {
		this.log.show('error', 'Deletando evento', evento, evento.descricao);

		this.webservice.deleteEvento(evento).subscribe((evento) => {
			if (evento.errors) {
				this.log.show('error', 'listComponent | deletar', evento.errors);
			} else {
				this.log.show('sucess', 'listComponent | deletar', evento);
				this.getEventos();

				this.bsModalRef.hide()
			}
		})

	}

	getEventos(): void {
		this.webservice.getEventos().subscribe(resposta => {
			if (resposta.length > 0) {
				this.eventos = resposta
				this.log.show('success', 'listComponent | getEventos | if resposta not null', resposta, this.eventos);
			} else {
				this.eventos = []
				this.log.show('error', 'listComponent | getEventos | length == 0', 'resposta veio vazia', this.eventos);
			}

		});
	}

}
