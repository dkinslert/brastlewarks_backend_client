import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GnomesFormComponent } from './components/gnomes-form/gnomes-form.component';
import { GnomesListComponent } from './components/gnomes-list/gnomes-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormsModule }   from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    GnomesFormComponent,
    GnomesListComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
