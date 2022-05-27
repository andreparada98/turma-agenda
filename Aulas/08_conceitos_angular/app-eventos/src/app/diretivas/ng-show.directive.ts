import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[ngShow]'
})
export class NgShowDirective {
	@Input() set ngShow(condicao: boolean) {
		if (condicao) {
			this.view.createEmbeddedView(this.template)
		} else {
			this.view.clear();
		}
	}
	constructor(
		private template: TemplateRef<any>,
		private view: ViewContainerRef
	) { }

}
