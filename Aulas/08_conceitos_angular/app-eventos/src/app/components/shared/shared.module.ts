import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MenuComponent } from './menu/menu.component';

@NgModule({
	declarations: [
		MenuComponent
	],
	imports: [
		CommonModule,
		CollapseModule.forRoot(),
		BsDropdownModule.forRoot(),
		RouterModule
	],
	exports: [
		MenuComponent
	]
})
export class SharedModule { }
