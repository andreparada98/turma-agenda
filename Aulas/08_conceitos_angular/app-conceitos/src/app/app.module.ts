import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppExemplo } from './components/app-exemplo/app-exemplo.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component'

@NgModule({
  declarations: [
    AppComponent,
    AppExemplo,
    PropertyBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
