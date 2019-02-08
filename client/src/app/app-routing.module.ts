import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GnomesListComponent } from './components/gnomes-list/gnomes-list.component';
import { GnomesFormComponent } from './components/gnomes-form/gnomes-form.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/',
		pathMatch: 'full'
	},	
	{
		path: '/',
		component:AppComponent 
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
