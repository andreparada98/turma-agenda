import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventCreateComponent } from './components/pages/events/create/create.component';
import { EventsEditComponent } from './components/pages/events/edit/edit.component';
import { EventsListComponent } from './components/pages/events/list/list.component';
import { EventsSeeComponent } from './components/pages/events/see/see.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

const routes: Routes = [
	{
		path: "",
		component: HomeComponent
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: "eventos",
		component: EventsListComponent
	},
	{
		path: "eventos/cadastrar",
		component: EventCreateComponent
	},
	{
		path: "eventos/ver/:id",
		component: EventsSeeComponent
	},
	{
		path: "eventos/editar/:id",
		component: EventsEditComponent
	},
	{
		path: "**",
		component: NotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
