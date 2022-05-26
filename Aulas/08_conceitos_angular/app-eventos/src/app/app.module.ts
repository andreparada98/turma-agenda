import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventCreateComponent } from './components/pages/events/create/create.component';
import { EventsEditComponent } from './components/pages/events/edit/edit.component';
import { EventsListComponent } from './components/pages/events/list/list.component';
import { EventsSeeComponent } from './components/pages/events/see/see.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { SharedModule } from './components/shared/shared.module';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		EventsListComponent,
		EventCreateComponent,
		NotFoundComponent,
		EventsSeeComponent,
		EventsEditComponent
	],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		FormsModule,
		HttpClientModule,
		SharedModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
