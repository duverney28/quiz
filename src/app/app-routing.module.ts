import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { NuestroclientesComponent } from './components/nuestroclientes/nuestroclientes.component';

const routes: Routes = [

  { path: 'nuestrosclientes', component: NuestroclientesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
