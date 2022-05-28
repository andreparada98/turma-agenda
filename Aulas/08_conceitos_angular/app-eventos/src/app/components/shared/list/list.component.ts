import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	@Input() categoria!: string;
	@Input() itens: any;
	qtdTH!: any;

	constructor() { }

	ngOnInit(): void {
		this.qtdTH = document.querySelectorAll('th');
	}

}
