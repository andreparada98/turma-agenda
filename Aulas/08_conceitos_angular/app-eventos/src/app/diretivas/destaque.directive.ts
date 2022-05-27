import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
	selector: '[appDestaque]'
})
export class DestaqueDirective implements OnInit {

	constructor() { }

	@HostBinding('style.backgroundColor') corDeFundo!: string;

	ngOnInit(): void {
		this.corDeFundo = '#ff0'
	}

	@HostListener('mouseover') entrarMouse() {
		this.corDeFundo = 'red';
	}

	@HostListener('mouseout') retirarMouse() {
		this.corDeFundo = '#ff0';
	}

}
