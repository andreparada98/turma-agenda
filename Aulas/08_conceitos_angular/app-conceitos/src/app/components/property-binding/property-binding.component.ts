import { Component } from '@angular/core';

@Component({
	selector: 'app-property-binding',
	templateUrl: './property-binding.component.html',
	styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent {
	// Exemplo de Property Binding
	// um tipo de binding unidirecional (component -> view)

	rnd: number = Math.random();
	image = "http://lorempixel.com.br/400/200";
	// 400 é a largura
	// 200 é a altura

}
