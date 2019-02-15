import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GnomesListComponent } from './components/gnomes-list/gnomes-list.component';
import { GnomesFormComponent } from './components/gnomes-form/gnomes-form.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/gnomes',
		pathMatch: 'full'
	  },
	  {
		path: 'gnomes',
		component: GnomesListComponent
	  },
	  {
		path: 'gnomes/add',
		component: GnomesFormComponent
	  },
	  {
		path: 'gnomes/edit/:id',
		component: GnomesFormComponent
	  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
