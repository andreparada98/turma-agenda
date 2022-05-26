import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
	isCollapsed: boolean = true;
	featureFlag = environment.featureFlag;
	showHome = this.featureFlag.shared.menu.home;
	showEventos = this.featureFlag.shared.menu.eventos.pai;
	showEventosLista = this.featureFlag.shared.menu.eventos.lista;
	showEventosCadastrar = this.featureFlag.shared.menu.eventos.cadastrar;

	constructor() { }

	ngOnInit(): void {
	}

}
