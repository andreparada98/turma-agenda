import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ModalComponent } from 'src/app/components/shared/modal/modal.component';
import { Evento } from 'src/app/interfaces/evento';
import { LogService } from 'src/app/services/log.service';
import { WebserviceService } from 'src/app/services/webservice.service';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-events-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class EventsListComponent implements OnInit {
	modalRef?: BsModalRef;
	initialState: any;

	eventos: Evento[] = [];
	urlEventos: string = "http://localhost:3200/eventos";
	featureFlag = environment.featureFlag;
	showBtnVer = this.featureFlag.pages.eventos.listaEventos.btnVer;
	showBtnEditar = this.featureFlag.pages.eventos.listaEventos.btnEditar;
	showBtnDeletar = this.featureFlag.pages.eventos.listaEventos.btnDeletar;

	// chamamos no constructor da lista o serviço de webservice que criamos para realizar a chamada da URL de get eventos criada com a função do tipo Observable
	constructor(
		private webservice: WebserviceService,
		private http: HttpClient,
		private log: LogService,
		private title: Title,
		private modalService: BsModalService
	) {
		this.title.setTitle('Lista de Eventos')
		this.log.show('warning', 'Construiu o componente');
	}

	openModal(template: TemplateRef<any>, evento: Evento) {
		//this.modalRef = this.modalService.show(template, { initialState: { item: evento } });
		const initialState: ModalOptions = {
			initialState: {
				evento
			}
		};
		this.modalRef = this.modalService.show(ModalComponent, initialState);
		this.modalRef.content.deleteBtnName = 'Apagar';
		this.modalRef.content.closeBtnName = 'Cancelar';

		this.modalRef.onHide?.pipe().subscribe(() => {
			this.getEventos()
		})
	}

	// vamos executar a função no ngOnInit que é a inicialização do componente
	ngOnInit(): void {
		this.log.show('log', 'Inicializou o componente de lista');
		this.getEventos();
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

	deletar(evento: Evento): void {
		this.log.show('error', 'Deletando evento', evento, evento.descricao);
		if (window.confirm(`Você quer mesmo excluir o evento: ${evento.descricao}?`)) {
			this.webservice.deleteEvento(evento).subscribe((evento) => {
				if (evento.errors) {
					this.log.show('error', 'listComponent | deletar', evento.errors);
				} else {
					this.log.show('sucess', 'listComponent | deletar', evento);
					this.getEventos();
				}
			})
		}
	}
}
